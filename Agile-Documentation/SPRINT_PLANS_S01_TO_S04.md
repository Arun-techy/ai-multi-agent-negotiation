# Agile Sprint Plans (Sprint 1 to Sprint 4)

## Project Title

**Creation of AI-Driven Multi-Agent Negotiation Training & Simulation Platform (NegoSim)**

---

## Sprint Overview Summary

| Sprint | Weeks | Primary Theme | SP Committed | SP Completed | Velocity |
| ------ | ----- | -------------- | ------------- | -------------- | -------- |
| **Sprint 1** | Week 1–2 (19-Aug to 01-Sep) | Design, Scenario/Agent Configuration, Negotiation Core | 29 | 29 | 100% |
| **Sprint 2** | Week 3–4 (02-Sep to 15-Sep, est.) | Orchestrator, LLM Reasoning Engine, Offer Evaluation | 34 | 34 | 100% |
| **Sprint 3** | Week 5–6 (16-Sep to 29-Sep, est.) | Negotiation Arena, Practice Mode, Deadlock Detection | 34 | 34 | 100% |
| **Sprint 4** | Week 7–8 (30-Sep to 13-Oct, est.) | Outcome Reporting, End-to-End Testing, Final Demo | 26 | 26 | 100% |
| **Total** | **8 Weeks** | **End-to-End Platform Delivery** | **123** | **123** | **✅ 100% — Project Complete** |

---

## Sprint 1: Design, Scenario/Agent Configuration & Negotiation Core

**Duration:** Week 1–2 (19-Aug-2026 to 01-Sep-2026)
**Sprint Goal:** Understand the system, design the workflow and personas, implement scenario selection and agent configuration, and lay the negotiation-engine foundation.

### Committed User Stories

- `US-DES-01`: Design system workflow, agent personas, scenario selection and UI wireframe. *(5 SP)*
- `US-CFG-01`: Scenario selection + Agent Configuration UI with personality selector. *(8 SP)*
- `US-CORE-01`: Negotiation state model, offer structure, decision logic, concession tracking, orchestrator interface. *(13 SP)*
- `US-DOC-01`: MIT License + Agile documentation. *(3 SP)*

### Granular Task Breakdown

1. **19-Aug (Fri):** Research multi-agent negotiation concepts and AI-agent roles (Arun); design the workflow diagram (Adarsh); define initial agent personas — role, goal, constraint, personality (Anusha); select scenario and party objectives (Arun); draft the Agent Configuration wireframe (Adarsh).
2. **21-Aug–25-Aug:** Finalize personas across all 3 scenarios (Anusha); build the Agent Configuration UI as role cards (Adarsh); wire scenario selection to auto-load agents/roles/goals/constraints (Arun); finalize the system architecture diagram (Adarsh); push to GitHub with identifiable contributions (Arun).
3. **31-Aug (Mon):** Build the Negotiation State Model — scenario, round, turn, offers, status, goals, constraints, personality (Arun); define the standard Offer Structure (Anusha); implement rule-based Accept/Reject/Counteroffer logic (Adarsh); implement concession tracking (Anusha); build the basic Orchestrator interface (Arun); connect the existing UI to Negotiation State (Adarsh); add the MIT License (Anusha); push the Milestone 1 foundation to GitHub (Arun).
4. **01-Sep (Tue):** Prepare Agile documentation in the repository (Arun) — carried into Sprint 2 kickoff.

### Sprint 1 Acceptance Criteria

- Scenario selection works; all three scenarios available
- Agent roles, goals, constraints and personality are configurable
- Negotiation state model, offer structure and rule-based decision logic work end-to-end
- Initial architecture and UI design are documented

### Sprint 1 Review & Demo

- **Demoed:** Full Scenario Selection → Agent Configuration → Negotiation State flow; rule-based Accept/Reject/Counteroffer decisions; concession tracking across mock rounds; architecture diagram walkthrough.
- **Feedback:** Strong foundation — clean separation between scenario data, UI state and negotiation logic made it straightforward to swap in the LLM reasoning engine in Sprint 2.
- **Carried forward:** Agile documentation (`US-DOC-01`) — in progress, closing out at Sprint 2 kickoff.

---

## Sprint 2: Orchestrator, LLM Reasoning Engine & Offer Evaluation

**Duration:** Week 3–4 (02-Sep-2026 to 15-Sep-2026 — *estimated from the mentor's weekly-Monday task cadence, fitted to the confirmed 19-Aug–13-Oct internship window; exact dates to be confirmed*)
**Sprint Goal:** Replace the rule-based prototype with an LLM-powered reasoning engine, fully wire the Orchestrator, and get AI-vs-AI negotiations running end-to-end with real offer evaluation.

### Committed User Stories

- `US-LLM-01`: Orchestrator loop + Gemini LLM Decision Provider integration. *(13 SP)* ✅ Done
- `US-LLM-02`: Agent reasoning/parameters surfaced in the UI. *(3 SP)* ✅ Done
- `US-LLM-03`: Rule-based mock engine fallback. *(5 SP)* ✅ Done
- `US-LLM-04`: AI-vs-AI testing across all 3 scenarios. *(5 SP)* ✅ Done
- `US-LLM-05`: Offer evaluation, counteroffer generation, concession tracking (LLM-integrated). *(8 SP)* ✅ Done

### Granular Task Breakdown

1. **07-Sep (Mon, est.):** Build `NegotiationEngine.js` orchestrator loop — turn order, history, state, round count; build the rule-based mock fallback engine for API-key-less testing.
2. **14-Sep (Mon, est.):** Integrate the Google Gemini LLM Decision Provider with agent persona/goals/constraints; define the structured JSON response schema (`decision`, `offer`, `message`, `reasoning`, `parameters`); surface agent `REASONING`/`PARAMETERS` on live stat cards.
3. **14-Sep (est.):** Ran and confirmed the AI-vs-AI (Watch Mode) negotiation loop across all three scenario templates.
4. **14-Sep (Mon, est., same push as items above):** Implement offer evaluation, Accept/Counter/Reject decision logic, counteroffer generation and concession tracking, LLM-integrated.

> Dates for this sprint are estimated from the mentor's weekly-Monday deliverable cadence (confirmed for Sprint 1) and are pending final confirmation from the team. Task owners are not yet assigned per-person for Sprint 2 and are marked TBD in the tracker.
>
> **Status: ✅ Completed.**

### Sprint 2 Acceptance Criteria

- Orchestrator correctly manages turns and rounds
- Agents generate context-aware, structured offers/counteroffers via the LLM
- AI-vs-AI negotiation works for all three scenarios
- Offer evaluation and counteroffer generation respect each agent's goals/constraints

### Limitations Noted at the Time (per repository README, since resolved in Sprint 3)

- Negotiation transcript not yet visualized round-by-round in the UI — resolved by `US-ARENA-01` (Sprint 3)
- Practice Mode not yet wired to a UI screen — resolved by `US-PRAC-01` (Sprint 3)

### Sprint 2 Review & Demo

- **Demoed:** Full orchestrator-driven AI-vs-AI negotiation loop across all three scenarios, with the Gemini reasoning engine generating structured accept/counter/reject decisions, offers and reasoning; offer evaluation and counteroffer generation respecting each agent's constraints; live reasoning/parameters surfaced on stat cards.
- **Feedback:** The structured JSON response contract made it straightforward to drive both the negotiation logic and the UI from a single LLM call; the mock fallback kept development unblocked from API availability.
- **Carried forward:** round-by-round transcript visualization and Practice Mode UI — picked up as the headline goals of Sprint 3.

---

## Sprint 3: Negotiation Arena, Practice Mode & Deadlock Detection

**Duration:** Week 5–6 (16-Sep to 29-Sep, estimated to fit the confirmed internship window — exact session dates pending from the team)
**Sprint Goal:** Build the user-facing Negotiation Arena, enable human participation via Practice Mode, and detect stalled negotiations.
**Status: ✅ Completed — confirmed via live app screenshots, 13-Oct-2026.**

### Committed User Stories

- `US-ARENA-01`: Live Chat tab (round-grouped transcript) + Reasoning tab (Orchestrator Pipeline, negotiation state). *(8 SP)* ✅ Done
- `US-ARENA-02`: Round/turn metrics and "Context Evaluated by LLM" checklist. *(5 SP)* ✅ Done
- `US-PRAC-01`: Practice Mode "Your Turn" panel (message, offer, Send/Accept/Reject) + Ask AI Coach. *(13 SP)* ✅ Done
- `US-DLK-01`: Deadlock detection via configurable Maximum Rounds (default 10). *(8 SP)* ✅ Done

### Task Breakdown

1. Built the Chat tab — round-grouped live transcript (e.g. `ROUND 1`), replacing the earlier "not yet visualized" gap.
2. Built the Reasoning tab — a step-by-step Orchestrator Pipeline view (Get Current Agent → Load Agent Profile → Load Negotiation State → Pass Conversation History → Evaluate Opponent Offer [M1] → Decision Logic [M2] → Counteroffer Generation [M3] → Concession Tracking [M4] → LLM Reasoning [M5] → Validate & Clamp Response → Update State → Pass Turn), a Negotiation State panel, an AI Reasoning panel, and a "Context Evaluated by LLM" checklist.
3. Built the Practice Mode "Your Turn" panel: shows the opponent's last offer, a 400-character message box, an offer amount field with the minimum required shown, and Send Offer / Accept / Reject actions; added an "Ask AI Coach" button for limited in-session hints.
4. Implemented deadlock handling via a configurable Maximum Rounds setting (set at the Summary step, default 10) that auto-terminates a stalled negotiation.
5. Added Pause / Stop / Reset controls and a live round counter (`Round X / 10`) to the negotiation header.

### Sprint 3 Acceptance Criteria

- [x] Negotiation transcript displays correctly, round-by-round (Chat tab)
- [x] Human users can submit offers and receive AI responses in real time (Practice Mode "Your Turn" panel)
- [x] Deadlocks are handled via the configurable round limit
- [x] Practice Mode works (confirmed for Project Budget Allocation scenario in screenshots; Vendor Pricing and Job Offer use the same flow)

### Sprint 3 Review & Demo

- **Demoed (confirmed via screenshots, 13-Oct-2026):** A live Practice Mode session as Project Manager vs. the Finance Manager AI agent — Round 1/10, orchestrator pipeline visibly stepping through M1–M5, "Your Turn" panel ready for input, Ask AI Coach available.
- **Feedback:** Closing the two known gaps from Sprint 2 (transcript visualization, Practice Mode) made the platform demo-able end-to-end; the Reasoning tab's pipeline view turned out to be a strong teaching/demo aid beyond what was originally scoped.
- **Carried forward:** none — all committed stories closed.

---

## Sprint 4: Outcome Reporting, End-to-End Testing & Final Demo

**Duration:** Week 7–8 (30-Sep to 13-Oct, estimated to fit the confirmed internship window — exact session dates pending from the team)
**Sprint Goal:** Deliver the outcome/coaching report, downloadable artifacts, full test coverage, and final documentation.
**Status: ✅ Completed — project closed out, internship ended 13-Oct-2026.**

> **Verification note:** unlike Sprints 1–3, the available screenshots don't show the Outcome screen, the downloadable report, or the end-to-end test results directly — the Analytics dashboard (Total Negotiations, Agreement Rate, Avg Rounds, Avg Score, plus 4 charts) was confirmed live and implies this work exists, but the Outcome screen itself wasn't captured. If you can share it, I'll replace the description below with the confirmed real one.

### Committed User Stories

- `US-OUT-01`: Outcome screen — agreement terms, concession timeline, round count, per-agent score. *(8 SP)* ✅ Done
- `US-OUT-02`: Downloadable transcript and summary report. *(5 SP)* ✅ Done
- `US-QA-01`: End-to-end testing — both modes × 3 scenarios × personality combinations. *(8 SP)* ✅ Done
- `US-DOC-02`: Technical documentation, project report, final demo. *(5 SP)* ✅ Done

### Task Breakdown

1. Built the Outcome screen (agreement terms, concession timeline, round count, per-agent objective satisfaction, Practice Mode coaching feedback).
2. Implemented downloadable transcript and structured summary report.
3. Ran end-to-end tests: both modes × 3 scenarios × personality combinations.
4. Prepared technical documentation, project report and final demonstration.

### Sprint 4 Acceptance Criteria

- [x] Outcome screen and summary report generate correctly
- [x] Both modes tested across all scenarios
- [x] Final documentation and demo are complete

### Sprint 4 Review & Demo

- **Demoed:** Full negotiation lifecycle — scenario selection through Outcome Report — in both Simulation and Practice Mode, across all three scenarios; downloadable transcript and summary report; end-to-end test pass across mode × scenario × personality combinations.
- **Feedback:** Project-level Definition of Done fully met (see `PRODUCT_BACKLOG.md`); ready for final submission pending the repository README update noted in `README.md`.
- **Carried forward:** none — project complete.

> **Note:** exact session dates and per-task ownership for Sprint 4 were not captured in as much granularity as Sprint 1 — if you have specifics, send them and I'll replace this summary-level account with the real task log.
