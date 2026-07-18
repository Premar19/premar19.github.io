# Prem Sharma

**Full-stack & applied-AI engineer.** Computer Science graduate, sole engineer on
**KidneyWise**, an NHS clinical AI platform now heading toward clinical trials.

Open to graduate and junior roles, UK and beyond.

[Portfolio](https://premar19.github.io) · [GitHub](https://github.com/Premar19) · [LinkedIn](https://linkedin.com/in/prem-sharma-b258341a9) · [premar190505@gmail.com](mailto:premar190505@gmail.com)

---

## What I do

I build production software end to end: architecture, backend, frontend, tests,
release. Two things I hold to: applied AI has to stay inside its guardrails, and
tests have to check the property that actually matters, not just the happy path.
I only claim what I've built.

Strongest in **Java** and **TypeScript**, most at home across the full stack.

---

## KidneyWise: NHS clinical AI platform

A full-stack web and Android app for kidney-cancer prehabilitation, built in
partnership with **Hywel Dda University Health Board (NHS Wales)**, **UWTSD** and
**Aberystwyth University**. I was the sole engineer, from architecture to release.

At its centre is an AI health chatbot: a retrieval pipeline over NHS clinical
content, with the language model run **on-premise** so patient data never leaves
the environment, supporting UK GDPR and NHS information governance. Around it
sits real-time clinician–patient messaging, longitudinal heart-rate charts, a
guided exercise programme, and role-based access with a safety filter that
blocks out-of-scope medical questions.

|  |  |
| --- | --- |
| **Sole engineer** | Architecture to release |
| **138 tests** | Automated, front and back |
| **On-premise LLM** | Data stays in-environment |
| **WCRC 2026** | Conference presentation |

React 19 · TypeScript · Python · FastAPI · PostgreSQL/pgvector · Llama 3.1 (Ollama) · Firebase · Capacitor

📹 [Demo walkthrough](https://www.youtube.com/watch?v=6Gg-uTh7npQ)

---

## Selected work

### [LinkForge](https://github.com/Premar19/linkforge): multi-tenant SaaS analytics
Tenant data isolation enforced in the database with PostgreSQL Row-Level
Security. A Redis cache layer **cut p95 redirect latency by ~62%** and more than
doubled throughput, measured under k6 load tests and reproduced across
independent runs.
`FastAPI` `PostgreSQL (RLS)` `Redis` `arq` `React/TS` `Docker`

### [BugTracker API](https://github.com/Premar19/bugtracker-nest-api): Nest.js REST backend
Multi-user issue tracker with Passport/JWT auth and **layered authorisation**
(role guards plus ownership checks), Prisma and PostgreSQL, filtering and
pagination, OpenAPI docs, and 30 Jest tests. Dockerised for one-command setup.
`Nest.js` `TypeScript` `PostgreSQL (Prisma)` `JWT` `Jest` `Docker`

### [Agent Reliability Harness](https://github.com/Premar19/mini_swe_project): LLM evaluation tooling
Runs an autonomous LLM coding agent against a bug-fixing benchmark in a Docker
sandbox, scores every attempt against real test suites, and parses runs into
structured metrics. Controlled experiments **raised measured success from 80% to
97%** via failing-test feedback.
`Python` `Docker` `LLM APIs` `pytest`

---

## Toolbox

**Languages** Java · TypeScript · Python
**Frontend** React · Capacitor
**Backend** Node / Nest.js · FastAPI
**Data** PostgreSQL · pgvector · Redis · Prisma
**AI** RAG pipelines · on-premise LLMs (Ollama) · evaluation harnesses
**Infra & testing** Docker · Jest · pytest · k6

**Certifications** CompTIA Security+ · Azure AI-103 (in progress)

---

## About this repo

The source of [premar19.github.io](https://premar19.github.io): a hand-built
static site, no framework and no build step.

```
.
├── index.html              # markup only, no inline styles or scripts
├── assets/
│   ├── css/styles.css      # design tokens, layout, components
│   └── js/main.js          # scroll reveal, progressive enhancement
└── .nojekyll               # skip Jekyll processing
```

Colours and typefaces are CSS custom properties in one `:root` block, so a theme
change is a token change rather than a find-and-replace. The JavaScript is
optional: every section reads fine with scripting off, and the fade-in respects
`prefers-reduced-motion`. Keyboard focus is visible throughout and the layout
holds down to mobile.

Run it locally:

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

---

<sub>© 2026 Prem Sharma · Built and deployed by hand.</sub>
