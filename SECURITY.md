# Security and deployment scope

For one person's devices on a trusted private network. There is no independent login, multi-tenant authorization or application-level encryption at rest.

- Keep the server on loopback and use Tailscale Serve.
- Do not use Funnel, public port forwarding or an unauthenticated public proxy.
- Keep Node.js, browsers and Tailscale updated.
- Export records before upgrades, storage cleanup and destructive operations. Browser storage and caches are not backups.

Do not post real financial records or credentials in reports. Use private vulnerability reporting if GitHub offers it for this repository. Otherwise open a minimal issue requesting a private contact channel, without disclosing exploit details. No formal audit or response-time guarantee is claimed.
