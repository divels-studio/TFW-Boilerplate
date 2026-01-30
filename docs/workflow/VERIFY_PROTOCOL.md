# Verify Protocol

Всяка промяна трябва да има проверка, описана в ticket-а (`verify`).

Минимум:
- “как го пускам/стартирам”
- “какво точно гледам”
- “какво е pass/fail”

## Бързи проверки (препоръчани)

- `scripts/tfw.ps1 validate` / `scripts/tfw.sh validate` — backlog + enforcement (локално soft, CI hard)
- `scripts/tfw.ps1 checkpoint` / `scripts/tfw.sh checkpoint` — handoff + session log

## Автоматизируеми verify стъпки

Където е възможно, `verify` трябва да е команда/скрипт (за да се повтаря без мислене).
