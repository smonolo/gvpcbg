# Privacy — GVPCBG website

**Last updated:** 3 November 2026

Canonical public notice (Italian): `/privacy` · in-repo page: `app/(site)/privacy/page.tsx`

This document summarizes how the **source-controlled marketing site** handles data. The **data controller** for the public website is the association **SAFETY TEAM OdV Gruppo Volontari Protezione Civile Busto Garolfo** (GVPCBG), not the individual software author.

## Summary

- The site is **informational**. There is no public account system and no visitor-generated content store in this application.
- Editors manage photos, announcements, and articles through **Sanity Studio** (`/studio`). Published assets are delivered via Sanity’s CDN.
- **No analytics SDK** is bundled by default.
- **No profiling cookies** are used. Any technical cookies, if introduced by the host, must stay limited to essential operation.
- Contact happens through normal channels (email / phone / Facebook) linked from the site; those channels are outside this repo’s runtime.
- Server, CDN, or CMS operators may process standard connection logs (IP, user agent, timestamps) as needed to serve and protect the site and content APIs.

## Data the site may involve

| Data                       | Where it goes                           | Why                           |
| -------------------------- | --------------------------------------- | ----------------------------- |
| Pages you request          | Hosting / CDN logs (operator-dependent) | Deliver and secure the site   |
| Published CMS content      | Sanity Content Lake + CDN               | Show photos, avvisi, articoli |
| Email / phone you initiate | Association inboxes / phone systems     | Respond to your request       |
| Content in this repository | Git host                                | Develop and publish the site  |

## Rights

Data subjects may exercise GDPR rights against the association as controller, using the contacts on `/privacy` and `/contatti`.

## Source code

The software in this repository is licensed under [PolyForm Noncommercial 1.0.0](./LICENSE). That license does not change who is controller for the live website.
