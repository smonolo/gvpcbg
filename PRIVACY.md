# Privacy — GVPCBG website

**Last updated:** 2 November 2026

Canonical public notice (Italian): `/privacy` · in-repo page: `app/privacy/page.tsx`

This document summarizes how the **source-controlled marketing site** handles data. The **data controller** for the public website is the association **SAFETY TEAM OdV Gruppo Volontari Protezione Civile Busto Garolfo** (GVPCBG), not the individual software author.

## Summary

- The site is **informational**. There is no account system and no user-generated content store in this application.
- **No analytics SDK** is bundled by default.
- **No profiling cookies** are used. Any technical cookies, if introduced by the host, must stay limited to essential operation.
- Contact happens through normal channels (email / phone / Facebook) linked from the site; those channels are outside this repo’s runtime.
- Server or CDN operators may process standard connection logs (IP, user agent, timestamps) as needed to serve and protect the site.

## Data the site may involve

| Data                       | Where it goes                           | Why                          |
| -------------------------- | --------------------------------------- | ---------------------------- |
| Pages you request          | Hosting / CDN logs (operator-dependent) | Deliver and secure the site  |
| Email / phone you initiate | Association inboxes / phone systems     | Respond to your request      |
| Content in this repository | Git host                                | Develop and publish the site |

## Rights

Data subjects may exercise GDPR rights against the association as controller, using the contacts on `/privacy` and `/contatti`.

## Source code

The software in this repository is licensed under [PolyForm Noncommercial 1.0.0](./LICENSE). That license does not change who is controller for the live website.
