#!/usr/bin/env node
import { readFileSync, appendFileSync, mkdirSync, existsSync } from 'fs';
import { join, normalize } from 'path';

interface HookInput {
    session_id: string;
    tool_name: string;
    tool_input: {
        file_path?: string;
    };
}

function main() {
    try {
        const input = readFileSync(0, 'utf-8');
        const data: HookInput = JSON.parse(input);

        const toolName = data.tool_name;
        const filePath = data.tool_input?.file_path;
        const sessionId = data.session_id || 'default';

        // Skip if not an edit tool or no file path
        if (!['Edit', 'MultiEdit', 'Write'].includes(toolName) || !filePath) {
            process.exit(0);
        }

        // Skip markdown and config files
        if (/\.(md|markdown|json|yaml|yml)$/i.test(filePath)) {
            process.exit(0);
        }

        const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

        // Normalize paths for cross-platform comparison
        const normalizedFile = normalize(filePath).replace(/\\/g, '/').toLowerCase();
        const normalizedProject = normalize(projectDir).replace(/\\/g, '/').toLowerCase();

        // Get relative path
        let relativePath = normalizedFile;
        if (normalizedFile.startsWith(normalizedProject)) {
            relativePath = normalizedFile.slice(normalizedProject.length).replace(/^\//, '');
        }

        // Create cache directory
        const cacheDir = join(projectDir, '.claude', 'tsc-cache', sessionId);
        mkdirSync(cacheDir, { recursive: true });

        // Log edited file
        appendFileSync(
            join(cacheDir, 'edited-files.log'),
            `${Date.now()}:${filePath}:${relativePath}\n`
        );

        process.exit(0);
    } catch {
        process.exit(0);
    }
}

main();
