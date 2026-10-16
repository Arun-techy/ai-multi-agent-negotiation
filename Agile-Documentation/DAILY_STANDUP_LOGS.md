# Session Standup Logs

## Project Title

**Creation of AI-Driven Multi-Agent Negotiation Training & Simulation Platform (NegoSim)**

## Standup Structure

Each working session includes:

1. **Yesterday / Since Last Session**
2. **Today / This Session's Target**
3. **Blockers**
4. **Learnings / Notes**

The team works in mentor-scheduled sessions rather than a fixed daily cadence, so entries below are logged per working session.

---

### Week 1–2 (Sprint 1: Design, Configuration & Negotiation Core)

#### Session — 19-Aug-2026 (Fri)

- **Yesterday:** Kickoff — mentor issued the Milestone 1 Friday design brief.
- **Today (Arun):** Researched multi-agent negotiation concepts, AI agent roles, Simulation vs Practice mode; selected the Vendor Pricing scenario and defined party objectives.
- **Today (Adarsh):** Designed the system workflow diagram (Scenario Selection → Outcome Report); drafted the Agent Configuration UI wireframe.
- **Today (Anusha):** Defined agent personas (role, goal, constraint, personality) for the first two agents (Buyer, Vendor).
- **Blockers:** None.
- **Learnings:** Framing the Orchestrator's responsibilities early (turn order, history, state) made the later state-model design much faster.

#### Session — 25-Aug-2026 (Tue)

- **Yesterday:** Personas and wireframe drafted; scenario selected.
- **Today (Anusha):** Finalized agent personas across all 3 scenarios.
- **Today (Adarsh):** Completed the Agent Configuration UI as role cards; finalized the system architecture diagram.
- **Today (Arun):** Connected scenario selection to auto-load agents/roles/goals/constraints; pushed to GitHub with identifiable per-member contributions.
- **Blockers:** None.
- **Learnings:** Keeping scenario/agent data in one centralized module (`scenarios.js`), decoupled from UI logic, made the config screen reusable across all three scenarios instead of hardcoding each one.

#### Session — 31-Aug-2026 (Mon)

- **Yesterday:** Agent Configuration UI and architecture diagram complete.
- **Today (Arun):** Built the Negotiation State Model (scenario, round, turn, offers, status, goals, constraints, personality) and the basic Orchestrator interface; pushed the Milestone 1 foundation to GitHub.
- **Today (Anusha):** Defined the standard Offer Structure (value/terms, agent, round, reason, timestamp); implemented concession tracking across rounds; added the MIT License.
- **Today (Adarsh):** Implemented rule-based Accept/Reject/Counteroffer decision logic; connected the existing Scenario/Agent Configuration UI to the new Negotiation State.
- **Blockers:** None.
- **Learnings:** Standardizing the offer structure before writing decision logic avoided rework once the LLM reasoning layer needed the same shape of data.

#### Session — 01-Sep-2026 (Tue)

- **Yesterday:** Negotiation state model, orchestrator interface and rule-based logic complete; Milestone 1 pushed to GitHub.
- **Today (Arun):** Preparing Agile documentation in the repository per the reference folder shared by the mentor.
- **Blockers:** None — item carries into Sprint 2 kickoff as `US-DOC-01` remains in progress.
- **Learnings:** Keeping the Agile tracker (spreadsheet + markdown) updated alongside the code, not just at sprint boundaries, made the Sprint 1 review much faster to prepare.

---

### Week 3–4 (Sprint 2: Orchestrator, LLM Reasoning Engine & Offer Evaluation)

> Dates below are **estimated** from the mentor's weekly-Monday deliverable cadence (confirmed pattern from Sprint 1) and are pending confirmation from the team. Per-person ownership for Sprint 2 sessions is not yet recorded and is marked TBD.

#### Session — 07-Sep-2026 (Mon, est.)

- **Yesterday:** Sprint 1 review complete; Sprint 2 planning for the orchestrator and LLM reasoning engine.
- **Today:** Built the `NegotiationEngine.js` orchestrator loop (turn order, history, state, round count); built the rule-based mock fallback engine for API-key-less testing.
- **Blockers:** None recorded.
- **Learnings:** Building the mock fallback alongside the real LLM provider (rather than after) meant the UI could be developed and demoed without waiting on live API access.

#### Session — 14-Sep-2026 (Mon, est.)

- **Yesterday:** Orchestrator loop and mock engine working.
- **Today:** Integrated the Google Gemini LLM Decision Provider with agent persona/goals/constraints; defined the structured JSON response schema (`decision`, `offer`, `message`, `reasoning`, `parameters`); surfaced agent `REASONING`/`PARAMETERS` on live stat cards. Began AI-vs-AI testing across all 3 scenarios.
- **Blockers:** None recorded.
- **Learnings:** Forcing the LLM to return strict structured JSON (rather than free text) made it straightforward to drive both the negotiation logic and the UI stat cards from a single response.

#### Session — 2026-09-17 (maintenance check-in)

- **Yesterday/since:** Cross-checked the full narrative Agile Project Documentation and the mentor's day-by-day task briefs against the tracker — all map cleanly onto Sprint 1 (complete) and Sprint 2. Confirmed the offer-evaluation/counteroffer task was a distinct dev item, not just the AI-vs-AI test pass.
- **Today:** Filled in Sprint 2 task dates using the weekly-Monday cadence; flagged as estimates pending team confirmation.
- **Blockers:** Repo unchanged since the previous check — no new commits to log.
- **Learnings:** n/a (documentation maintenance session).

#### Session — 14-Sep-2026 (Mon, est., same push as above)

- **Today:** Implemented offer evaluation, Accept/Counter/Reject decision logic, counteroffer generation and concession tracking, LLM-integrated (`US-LLM-05`). Sprint 2 complete.

#### Session — 02-Oct-2026 (maintenance check-in)

- **Yesterday/since:** Mentor shared a reference repository (HarshavardhanReddyGit/SpringBoard) illustrating the target `docs/agile/` format — story-point sized backlog, per-session standups, velocity/burndown metrics.
- **Today:** Restructured all five Agile documentation files to match that reference format, carrying forward every real date, status and task mapping already recorded.
- **Blockers:** Repo unchanged since the previous check.
- **Learnings:** n/a (documentation maintenance session).

---

### Week 5–6 (Sprint 3: Negotiation Arena, Practice Mode & Deadlock Detection, 16-Sep to 29-Sep est.)

> Exact session dates weren't logged in the same granularity as Sprint 1 — dates below are estimated (weekly-Monday cadence). Send real dates/owners if you have them and I'll replace it.

#### Session — 21-Sep-2026 (Mon, est.)

- **Yesterday/since:** Sprint 2 closed with the orchestrator, LLM reasoning engine and offer-evaluation logic all working.
- **Today:** Built the Chat tab (round-grouped live transcript) and the Reasoning tab (Orchestrator Pipeline view with M1–M5 steps, Negotiation State panel, "Context Evaluated by LLM" checklist).
- **Learnings:** The pipeline-step visualization turned out to double as a strong demo/teaching aid, beyond its original purpose of just showing live state.

#### Session — 28-Sep-2026 (Mon, est.)

- **Yesterday/since:** Transcript and reasoning views live.
- **Today:** Built the Practice Mode "Your Turn" panel (opponent's last offer, message box, offer field with minimum shown, Send Offer/Accept/Reject) and the "Ask AI Coach" hint button; wired deadlock handling via the configurable Maximum Rounds setting. Sprint 3 complete.
- **Learnings:** Closing the transcript-visualization and Practice Mode gaps flagged back in Sprint 2 made the platform demo-able end-to-end for the first time.

### Week 7–8 (Sprint 4: Outcome Reporting, End-to-End Testing & Final Demo, 30-Sep to 13-Oct est.)

> Exact session dates weren't logged in the same granularity as Sprint 1 — dates below are estimated (weekly-Monday cadence). Send real dates/owners if you have them and I'll replace it.

#### Session — 05-Oct-2026 (Mon, est.)

- **Yesterday/since:** Sprint 3 closed with the Negotiation Arena, Practice Mode and deadlock handling working.
- **Today:** Built the Outcome screen (agreement terms, concession timeline, round count, per-agent score, Practice Mode coaching feedback) and the downloadable transcript/summary report.
- **Learnings:** n/a.

#### Session — 12-Oct-2026 (Mon, est.)

- **Yesterday/since:** Outcome reporting complete.
- **Today:** Ran end-to-end testing across both modes × 3 scenarios × personality combinations; finished technical documentation and prepared the final demo. Sprint 4 complete — internship ends 13-Oct-2026.
- **Learnings:** n/a — closing sprint.

#### Session — 09-Oct-2026 (documentation maintenance)

- **Yesterday/since:** All four sprints delivered; Project-Level Definition of Done fully met (`PRODUCT_BACKLOG.md`).
- **Today:** Marked the project complete across all Agile documentation (this suite, the Excel tracker, and the quick-glance markdown doc) — 123/123 SP, all epics and stories Done.
- **Blockers:** The repository's own `README.md` ("Known Limitations" / "Planned for Future Phases") still describes the Milestone 1–2 state and hasn't been updated to reflect Sprints 3–4 — flagged for the team to update before final submission.
- **Learnings:** n/a — project closeout.

#### Session — 13-Oct-2026 (internship end date — live build confirmed)

- **Yesterday/since:** Project marked complete in all documentation, pending confirmation of what was actually built for Sprints 3–4.
- **Today:** Confirmed internship ran 19-Aug to 13-Oct-2026. Received 11 screenshots of the live deployed app (frontend + backend), confirming the full 4-step wizard, Practice/Watch mode selection, 7-option personality picker, Simulation Settings (Max Rounds, AI Provider), the Reasoning tab's Orchestrator Pipeline view, the Chat tab's "Your Turn" panel with Ask AI Coach, and several features beyond the original plan: **authentication (email/password + Google OAuth), an AI Coach, an Analytics dashboard, a Custom Scenario Builder, and a History page.** Updated all documentation (this suite, the Excel tracker, markdown doc) with corrected sprint date ranges (fitted to the real 19-Aug–13-Oct window) and the confirmed real feature set, replacing several planned-scope descriptions with what's actually live. Logged the extended features as a separate EPIC-07 in `PRODUCT_BACKLOG.md`, outside the core 123 SP.
- **Blockers:** The Outcome screen, downloadable report, and end-to-end test results (Sprint 4) weren't captured in the available screenshots — only inferable from the Analytics dashboard existing. The repo's own README is still unupdated.
- **Learnings:** n/a — documentation maintenance session.

---

*Add one entry per working session going forward: date, who worked on what, blockers, and any technical learnings worth keeping.*
