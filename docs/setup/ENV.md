# ENV

## Help site (docs viewer)

Файл: `tools/docs-site/.env.local` (не се комитва). Пример: `tools/docs-site/.env.example`.

- `TFW_DOCS_PORT` — порт за help сайта (default: 3001)

## Enforcement

- `TFW_ENFORCEMENT` — `soft` или `hard`
  - `soft`: warning (exit 0)
  - `hard`: fail (exit != 0)

В CI се използва `hard`.
