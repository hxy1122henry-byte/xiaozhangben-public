# Pocket Ledger — independent public edition

A personal, offline-first expense tracker with manual accounts, monthly charts, JSON backups and optional device synchronization.

## Start locally

Requires Node.js 24+. No dependency installation or build step.

```sh
node server.cjs
```

Open http://127.0.0.1:18769/. Windows users can double-click `启动记账.cmd`.

## Language and currencies

English is the initial language. Settings supports English, 简体中文, Español, Français and 日本語, with immediate switching and local preference storage. User notes and account names stay as entered.

No currency is enabled or selected initially. Add currencies in Settings before recording. Supported currencies: USD, EUR, GBP, CNY, MYR, JPY, KRW, SGD, AUD, CAD, HKD, TWD, CHF, THB, IDR, INR, VND, PHP, AED and NZD. Amounts support up to two decimal places for all currencies. Currencies are independent; there is no exchange-rate conversion. A currency used by an account or entry cannot be removed.

Accounts, balances, ledger filters, charts, server validation and v3 backups support all twenty currencies. Backup import retains currencies used by the imported data. Language and enabled-currency preferences are local to each device; currencies used by synchronized records are enabled automatically.

## Isolation and data

This is a separate copy from the personal edition. It has a separate directory, port, browser storage namespace, service-worker cache and server data directory. No personal records were copied. Existing personal devices remain pointed at their original server.

Browser data is saved locally first; queued account and transaction edits synchronize while the app is open and connected to this server. For phones, HTTPS and a separate deployment are needed; this local preview does not change an existing Tailscale setup. Export backups regularly. Do not expose this single-user server directly to the public internet.

## Tests

```sh
npm test
```

Tests use independent temporary storage. They cover queues, server merging, accounts, backups, language dictionaries, preference persistence and all supported currencies.

[MIT](LICENSE).
