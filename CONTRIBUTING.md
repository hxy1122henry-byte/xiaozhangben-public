# Contributing

Issues and pull requests in Chinese or English are welcome. This is a small personal project; there is no guaranteed response time or feature delivery date.

For larger changes, open an issue describing the workflow first. Useful starting areas: accessibility, iPhone Safari behavior, reduced motion, keyboard navigation, translations and regression tests. Check the repository license status before reusing or distributing code.

## Development

Use Node.js 24+. No dependency installation is needed.

~~~sh
npm start
npm test
~~~

Use synthetic records and a separate LEDGER_DATA_DIR when testing destructive operations. Tests use port 18766.

## Pull requests

- Explain the concrete problem and resulting behavior.
- Keep existing records, currencies and deletion markers compatible.
- Run regression tests for data or sync changes.
- Check touch layouts and reduced-motion preferences for UI changes; state which browsers were actually tested.
- Bump CACHE in sw.js when changing cached files; test offline reopening.
- Never commit real records, browser exports, credentials, environment files, private addresses or the data directory.
