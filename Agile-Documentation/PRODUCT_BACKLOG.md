# Product Backlog & Epics

## Project Title

**Creation of AI-Driven Multi-Agent Negotiation Training & Simulation Platform (NegoSim)**

Story IDs follow the `US-<AREA>-NN` convention. The **Tracker ID** column maps each story to the IDs used in `NegoSim_Team1_Agile_Tracker.xlsx`.

**Status: ✅ All 123 SP across 6 core epics and 17 user stories delivered — project complete.** Plus 5 additional stories (EPIC-07, Extended Features) confirmed live but outside the original graded scope.

---

## Epic Overview

| Epic | Theme | Stories | SP | Sprint | Status |
| ---- | ----- | ------- | -- | ------ | ------ |
| **EPIC-01** | Requirements & System Design | US-DES-01 | 5 | 1 | ✅ Done |
| **EPIC-02** | Scenario & Agent Configuration | US-CFG-01 | 8 | 1 | ✅ Done |
| **EPIC-03** | Negotiation Core & State Management | US-CORE-01 | 13 | 1 | ✅ Done |
| **EPIC-04** | LLM Reasoning & AI-vs-AI Engine | US-LLM-01 to 05 | 34 | 2 | ✅ Done |
| **EPIC-05** | Negotiation Arena, Practice Mode & Deadlocks | US-ARENA-01/02, US-PRAC-01, US-DLK-01 | 34 | 3 | ✅ Done |
| **EPIC-06** | Outcome Reporting, QA & Documentation | US-OUT-01/02, US-QA-01, US-DOC-01/02 | 34 | 1, 4 | ✅ Done |
| | **Core Total** | | **123** | | |
| **EPIC-07** | *Extended Features (beyond original plan — not counted in core 123 SP)* | US-EXT-01 to 05 | *~29 (estimated)* | — | ✅ Done — confirmed live |

> EPIC-06 spans Sprint 1 (US-DOC-01, 3 SP) and Sprint 4 (26 SP); the epic total reconciles to the sprint totals in `README.md`: Sprint 1 = 29, Sprint 2 = 34, Sprint 3 = 34, Sprint 4 = 26 (123 SP overall, all delivered). EPIC-07 is kept separate from the 123 SP core total since it wasn't part of the originally graded scope — see below.

---

## EPIC-01 to EPIC-03: Sprint 1 Foundation

| Story ID | Tracker ID | User Story | SP | MoSCoW | Status |
| -------- | ---------- | ---------- | -- | ------ | ------ |
| US-DES-01 | US1 | As a team, we want to design the negotiation workflow, agent personas, chosen scenario and configuration wireframe so we understand the system before building. | 5 | Must | ✅ Done |
| US-CFG-01 | US2 | As a user, I want to pick one of three scenarios, choose Practice or Watch mode, then configure each agent's Goals → Constraints → Personality (from suggested chips or custom text), with a Goals & Constraints Summary and configurable Max Rounds/AI Provider before starting. | 8 | Must | ✅ Done — confirmed live, personality set expanded to 7 options (Aggressive, Collaborative, Risk-Averse, Competitive, Flexible, Analytical, Professional) |
| US-CORE-01 | US3 | As a developer, I want a negotiation state model, standard offer structure, rule-based Accept/Reject/Counter logic, concession tracking and an orchestrator interface so the engine has a solid base. | 13 | Must | ✅ Done |
| US-DOC-01 | US4 | As a team, we want an MIT License and Agile documentation in the repository so the project meets submission requirements. | 3 | Should | ✅ Done |

## EPIC-04: LLM Reasoning & AI-vs-AI Engine (Sprint 2)

| Story ID | Tracker ID | User Story | SP | MoSCoW | Status |
| -------- | ---------- | ---------- | -- | ------ | ------ |
| US-LLM-01 | US5 (T20–T22) | As a user, I want an orchestrator loop that passes persona, goals, constraints and history to a Gemini-powered agent and gets a structured JSON decision back. | 13 | Must | ✅ Done |
| US-LLM-02 | US6 (T23) | As a user, I want each agent's reasoning and extracted parameters shown on its stat card so the negotiation is transparent. | 3 | Should | ✅ Done |
| US-LLM-03 | US7 (T24) | As a developer, I want a rule-based mock engine so the UI can be tested without an API key. | 5 | Should | ✅ Done |
| US-LLM-04 | US8 (T25) | As a developer, I want AI-vs-AI negotiations tested across all three scenarios and personality combinations. | 5 | Must | ✅ Done |
| US-LLM-05 | US8 (T26) | As a user, I want agents to evaluate offers, decide Accept/Counter/Reject, generate counteroffers within their constraints and track concessions, LLM-integrated. | 8 | Must | ✅ Done |

## EPIC-05: Negotiation Arena, Practice Mode & Deadlocks (Sprint 3)

| Story ID | Tracker ID | User Story | SP | MoSCoW | Status |
| -------- | ---------- | ---------- | -- | ------ | ------ |
| US-ARENA-01 | US9 | As a user, I want a live, round-grouped Chat transcript of the negotiation, plus a Reasoning tab showing the Orchestrator's live pipeline (M1–M5 steps) and the current negotiation state. | 8 | Must | ✅ Done — confirmed live |
| US-ARENA-02 | US10 | As a user, I want round/turn metrics (Round X/10, active turn, live status) and a "Context Evaluated by LLM" checklist visible while a negotiation runs. | 5 | Should | ✅ Done — confirmed live |
| US-PRAC-01 | US11 | As a user, I want a "Your Turn" panel in Practice Mode showing the opponent's last offer, a message box, an offer field (with minimum required shown), and Send Offer/Accept/Reject actions, with an optional "Ask AI Coach" hint. | 13 | Must | ✅ Done — confirmed live |
| US-DLK-01 | US12 | As a user, I want stalled negotiations detected after N rounds (configurable Maximum Rounds, default 10) and resolved or ended as a breakdown. | 8 | Should | ✅ Done |

## EPIC-06: Outcome Reporting, QA & Documentation (Sprint 4)

| Story ID | Tracker ID | User Story | SP | MoSCoW | Status |
| -------- | ---------- | ---------- | -- | ------ | ------ |
| US-OUT-01 | US13 | As a user, I want an outcome screen with agreement terms, concession timeline, round count and per-agent objective satisfaction (plus coaching feedback in Practice Mode). | 8 | Must | ✅ Done |
| US-OUT-02 | US14 | As a user, I want to download the transcript and a structured summary report. | 5 | Should | ✅ Done |
| US-QA-01 | US15 | As a developer, I want end-to-end tests across both modes, all scenarios and all personality combinations. | 8 | Must | ✅ Done |
| US-DOC-02 | US16 | As a team, we want technical documentation, a project report and a final demo prepared. | 5 | Must | ✅ Done |

---

## EPIC-07: Extended Features (Beyond Original Plan)

Confirmed live via screenshots on 13-Oct-2026. SP values are rough estimates for reference only — not part of the graded 123 SP core backlog unless the team decides to fold them in.

| Story ID | User Story | SP (est.) | Status |
| -------- | ---------- | --------- | ------ |
| US-EXT-01 | As a user, I want to sign up and sign in (email/password or Google OAuth) so my negotiations and history are tied to my account. | 8 | ✅ Done — confirmed live |
| US-EXT-02 | As a user, I want an "Ask AI Coach" option during Practice Mode negotiations for limited in-session coaching hints. | 5 | ✅ Done — confirmed live |
| US-EXT-03 | As a user, I want an Analytics dashboard (total negotiations, agreement rate, avg rounds, avg score, and trend/breakdown charts) so I can track my performance over time. | 8 | ✅ Done — confirmed live |
| US-EXT-04 | As a user, I want to build and run custom negotiation scenarios with my own agents, goals and constraints, beyond the three built-in templates. | 8 | ✅ Done — confirmed live (UI present; no custom scenarios created in the available screenshots) |
| US-EXT-05 | As a user, I want a History page to review my past negotiations. | — | ✅ Done — confirmed live (nav item present; content not captured in available screenshots) |

## Definition of Done (DoD)

A story is **Done** only when all of the following hold:

- [ ] Requirement is implemented
- [ ] Code is integrated into the main branch and the project runs without errors
- [ ] Feature is tested (manual or automated) against the relevant scenario(s)
- [ ] Acceptance criteria are met
- [ ] Known bugs are fixed or logged in the Bug Tracker
- [ ] README / docs / Agile tracker are updated
- [ ] Each member's contribution is identifiable in the GitHub history

## Project-Level Definition of Done

- [ ] Three scenarios implemented (Vendor Pricing, Job Offer, Project Budget Allocation)
- [ ] Agent personas, goals, constraints and personalities configurable
- [ ] Orchestrator manages turns and rounds; agents negotiate autonomously
- [ ] Offers are evaluated and counteroffers generated
- [ ] Simulation Mode and Practice Mode both work
- [ ] Deadlock detection works
- [ ] Negotiation Arena shows a live transcript, stances and metrics
- [ ] Outcome analysis and concession timeline generated
- [ ] Transcript downloadable; summary report generated
- [ ] End-to-end testing complete
- [ ] Technical documentation and final demo ready
