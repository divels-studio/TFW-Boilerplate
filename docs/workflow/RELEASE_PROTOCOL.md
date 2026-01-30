# Release Protocol

## Version

- SemVer в `VERSION`

## Changelog

- Обнови `CHANGELOG.md` (Unreleased → нова версия)

## Tag

- Tag `vX.Y.Z` (в Git)

## Минимален release flow

1. `scripts/tfw.ps1 validate` (или `scripts/tfw.sh validate`)
2. Обнови `VERSION`
3. Обнови `CHANGELOG.md`
4. Commit + tag `vX.Y.Z` + push
5. Увери се, че CI е зелено
