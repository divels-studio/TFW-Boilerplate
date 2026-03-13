#!/usr/bin/env node
import { readFileSync, existsSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

interface HookInput {
    session_id: string;
}

interface HooksConfig {
    buildCheck?: {
        enabled?: boolean;
        command?: string;
        cwd?: string;
    };
}

function main() {
    try {
        const input = readFileSync(0, 'utf-8');
        const data: HookInput = JSON.parse(input);
        const sessionId = data.session_id || 'default';

        const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

        // Read hooks config
        const configPath = join(projectDir, '.claude', 'hooks', 'hooks-config.json');
        let config: HooksConfig = {};
        try {
            config = JSON.parse(readFileSync(configPath, 'utf-8'));
        } catch {
            // No config — build check disabled by default
            process.exit(0);
        }

        // Check if build check is enabled
        if (!config.buildCheck?.enabled || !config.buildCheck?.command) {
            process.exit(0);
        }

        const cacheDir = join(projectDir, '.claude', 'tsc-cache', sessionId);
        const editedLog = join(cacheDir, 'edited-files.log');

        // Only run if files were edited this session
        if (!existsSync(editedLog)) {
            process.exit(0);
        }

        const buildCwd = config.buildCheck.cwd
            ? join(projectDir, config.buildCheck.cwd)
            : projectDir;

        try {
            execSync(config.buildCheck.command, {
                encoding: 'utf-8',
                cwd: buildCwd,
                stdio: ['pipe', 'pipe', 'pipe'],
                timeout: 120000
            });

            // Success — clean up cache
            rmSync(cacheDir, { recursive: true, force: true });
            process.exit(0);
        } catch (execError: any) {
            const output = (execError.stdout || '') + (execError.stderr || '');

            // Save errors for reference
            const resultsDir = join(cacheDir, 'results');
            mkdirSync(resultsDir, { recursive: true });
            writeFileSync(join(resultsDir, 'build-errors.txt'), output);

            // Send feedback via stderr + exit code 2
            const lines = output.split('\n').filter((l: string) => l.trim());
            const preview = lines.slice(0, 20);
            const feedback = [
                '',
                '## Build Check Failed',
                '',
                `Command: \`${config.buildCheck.command}\``,
                '',
                ...preview.map((line: string) => `  ${line}`),
                lines.length > 20 ? `  ... and ${lines.length - 20} more lines` : '',
                '',
                'Please fix these errors before proceeding.',
            ].filter(Boolean).join('\n');

            process.stderr.write(feedback);
            process.exit(2);
        }
    } catch {
        process.exit(0);
    }
}

main();
