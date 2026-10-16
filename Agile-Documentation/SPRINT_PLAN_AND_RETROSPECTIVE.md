# NegoSim — Sprint Plans, Reviews & Retrospectives

## Sprint Cadence & Team Roles
- **Sprint Length**: 2 Weeks per Sprint (4 Sprints total)
- **Scrum Team**:
  - **Arun M**: Lead Developer / Full-Stack & AI Engine
  - **Adarsha Sigirevu**: Scrum Master / Agile Tracker & Integration Testing
  - **Boddu Anusha**: Quality Assurance / Documentation & UI Review

---

## Sprint 1: Foundation & Architecture Setup
- **Goal**: Establish the repository, design token architecture, basic frontend wizard, and scenario data models.
- **Committed User Stories**: US-01, US-05 (10 Story Points)
- **Delivered User Stories**: US-01, US-05 (10 Story Points)
- **Sprint Review**:
  - Demonstrated interactive 4-step wizard shell with scenario cards.
  - Successfully validated scenario schemas (Vendor Pricing, Job Offer, Budget Allocation).
- **Sprint Retrospective**:
  - *What went well*: Early agreement on CSS design tokens (`base.css`, `theme.css`) and modular Vanilla JS without heavy build toolchain overhead.
  - *What could be improved*: Needed a standardized structure for agent profile constraints before integrating the LLM.
  - *Action Item*: Define strict numeric reservation floors and ceilings in scenario definitions.

---

## Sprint 2: Autonomous Engine & LLM Reasoning
- **Goal**: Implement Express + WebSocket server backend with turn-taking orchestrator and Google Gemini API integration.
- **Committed User Stories**: US-02, US-03, US-06 (21 Story Points)
- **Delivered User Stories**: US-02, US-03, US-06 (21 Story Points)
- **Sprint Review**:
  - Real-time turn-taking stream demonstrated over WebSockets.
  - LLM structured JSON outputs streamed into live chat timeline with reasoning parameters.
- **Sprint Retrospective**:
  - *What went well*: `RuleBasedDecisionProvider` ensures 100% demo continuity even when Gemini API limits are reached.
  - *What could be improved*: Gemini latency (2–3 seconds) required better user feedback during thinking intervals.
  - *Action Item*: Introduce an optimistic `agent_thinking` state indicator in the orchestrator pipeline.

---

## Sprint 3: Evaluation Engine & Concession Mechanics
- **Goal**: Develop Modules 1–4 (Offer Evaluation, Counteroffer Generation, Concession Velocity Tracking, Agreement Detection).
- **Committed User Stories**: US-04, US-07, US-08 (13 Story Points)
- **Delivered User Stories**: US-04, US-07, US-08 (13 Story Points)
- **Sprint Review**:
  - Automatic agreement detection when offers converge within 2% tolerance.
  - Real-time concession graphs tracking cumulative concessions and guarding against reversal moves.
- **Sprint Retrospective**:
  - *What went well*: Mathematical models for aggressive and collaborative concession curves behave deterministically.
  - *What could be improved*: Offer evaluation boundary clamping needed automated unit tests to catch regressions.
  - *Action Item*: Build automated unit test suites (`concessionTracking.test.js`, `counteroffer.test.js`, `offerEvaluation.test.js`).

---

## Sprint 4: Performance Dashboard, Authentication & Production Polish
- **Goal**: Add user authentication, session persistence, performance metrics dashboard, guest mode, and cloud deployment.
- **Committed User Stories**: US-09, US-10, US-11, US-12, US-13 (23 Story Points)
- **Delivered User Stories**: US-09, US-10, US-11, US-12, US-13 (23 Story Points)
- **Sprint Review**:
  - Successful dual deployment: Static frontend on GitHub Pages, Node.js backend on Render.
  - Full offline graceful degradation verified: entire platform operates seamlessly with in-memory stores if MongoDB is absent.
- **Sprint Retrospective**:
  - *What went well*: Complete end-to-end user journey from scenario configuration to transcript export.
  - *What could be improved*: Ensure evaluators have zero friction running the project from a fresh clone without environment setup.
  - *Action Item*: Implement instant "Continue as Guest (Demo Mode)" on the login gateway.
