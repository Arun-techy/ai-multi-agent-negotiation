# Agile Metrics, Burndown Trajectory & Sprint Retrospectives

## Project Title

**Creation of AI-Driven Multi-Agent Negotiation Training & Simulation Platform (NegoSim)**

---

## 1. Velocity & Sprint Performance Metrics

| Sprint | Dates | Target SP | Completed SP | Completion Rate | Tasks Logged | Tasks Completed |
| ------ | ----- | --------- | -------------- | ----------------- | -------------- | ------------------ |
| **Sprint 1** | 19-Aug – 01-Sep (real) | 29 | 29 | 100% | 19 | 19 |
| **Sprint 2** | 02-Sep – 15-Sep (est.) | 34 | 34 | 100% | 7 | 7 |
| **Sprint 3** | 16-Sep – 29-Sep (est.) | 34 | 34 | 100% | 5 | 5 |
| **Sprint 4** | 30-Sep – 13-Oct (est.) | 26 | 26 | 100% | 4 | 4 |
| **TOTAL** | **19-Aug – 13-Oct** | **123** | **123** | **✅ 100%** | **35** | **35** |

Plus **EPIC-07 (Extended Features)** — Authentication, AI Coach, Analytics dashboard, Custom Scenario Builder, History — confirmed live but tracked separately from the core 123 SP (see `PRODUCT_BACKLOG.md`).

> SP values are team estimates assigned at documentation time, not re-estimated during sprint planning poker — treat as a working baseline and refine as the team's own estimation experience grows.

---

## 2. Effort Breakdown by Team Member (Sprint 1, actuals)

| Team Member | Tasks Completed | Hours Logged |
| ----------- | ----------------- | -------------- |
| Arun | T1, T4, T8, T10, T11, T15, T17, T19 (in progress) | 11.0 hrs |
| Adarsh | T2, T5, T7, T9, T13, T16 | 10.5 hrs |
| Anusha | T3, T6, T12, T14, T18 | 6.5 hrs |
| **Total** | **19 tasks** | **~28 hrs** |

Sprint 2 (T20–T26) and Sprint 3–4 owners are not yet recorded per-person — update this table once the team confirms them.

---

## 3. Story Point Burndown (Sprint-Level)

```
Cumulative Story Points (Total Planned: 123 SP)
123 |                                              * [SP-04: 123 SP — COMPLETE]
 97 |                                   * [SP-03: 97 SP]
 63 |                        * [SP-02: 63 SP]
 29 |      * [SP-01: 29 SP]
  0 +------------------------------------------------------------------
   19Aug-01Sep     02Sep-15Sep(est)   16Sep-29Sep(est)   30Sep-13Oct(est)
      (Sprint 1)   (Sprint 2)         (Sprint 3)         (Sprint 4)

* = actual completed cumulative SP — burndown fully closed, 0 SP remaining
```

- **Sprint 1 velocity:** 29 SP / 2 weeks (100% of commitment).
- **Sprint 2 velocity:** 34 SP / 2 weeks (100% of commitment).
- **Sprint 3 velocity:** 34 SP / 2 weeks (100% of commitment, estimated dates).
- **Sprint 4 velocity:** 26 SP / 2 weeks (100% of commitment, estimated dates).
- **Overall:** 123/123 SP delivered across the 4-sprint plan — **project complete.** Sprint 2–4 dates remain estimates pending the team's confirmation of exact calendar dates.

---

## 4. Sprint-by-Sprint Retrospective Analysis

### Sprint 1 Retrospective (Week 1–2)

- **What Went Well:** Clear day-by-day mentor briefs kept scope tight; roles split cleanly across research/design/development; centralizing scenario data in one module avoided per-scenario hardcoding; GitHub contributions stayed identifiable per member.
- **What Could Be Improved:** Agile documentation slipped past the Sprint 1 window into 01-Sep and was still being finalized at sprint close.
- **Action Item:** Track Agile documentation as its own task earlier in the sprint instead of as a close-out item; keep the tracker (spreadsheet + markdown) updated alongside the code rather than only at sprint boundaries.

### Sprint 2 Retrospective (Week 3–4)

- **What Went Well:** Building the rule-based mock engine alongside the real Gemini integration let UI work continue without blocking on API access; forcing structured JSON responses from the LLM simplified both negotiation logic and UI rendering.
- **What Could Be Improved:** Sprint 2 task dates and owners were not recorded in real time the way Sprint 1's were — they had to be reconstructed/estimated afterward from the mentor's task-assignment cadence.
- **Action Item:** Log session dates and task owners in the tracker as work happens, not retrospectively — carried into Sprint 3/4 as the same gap recurred.

### Sprint 3 Retrospective (16-Sep – 29-Sep, confirmed live 13-Oct-2026)

- **What Went Well:** Closing the two gaps flagged at the end of Sprint 2 (transcript visualization, Practice Mode) made the platform demo-able end-to-end; the Reasoning tab's Orchestrator Pipeline (M1–M5 step view) went beyond the original "show reasoning" goal and became a genuinely useful transparency/demo feature; deadlock handling reused the existing round/state tracking from Sprint 1 with minimal rework.
- **What Could Be Improved:** Session-level dates and per-task ownership weren't captured with Sprint 1's granularity — had to be estimated afterward.
- **Action Item:** If the team has the real dates/owners for this sprint, send them so the record can be corrected.

### Sprint 4 Retrospective (30-Sep – 13-Oct) — Project Closeout

- **What Went Well:** Project-level Definition of Done items confirmed met via the live app (Analytics dashboard implies outcome/scoring data is captured); the team also shipped a meaningful amount of work beyond the original brief — authentication, AI Coach, Analytics, Custom Scenario Builder, History.
- **What Could Be Improved:** The Outcome screen, downloadable report and end-to-end test results specifically weren't captured in the available screenshots, so this sprint's demo notes are less directly verified than Sprints 1–3. The repository's own `README.md` also wasn't updated in step with the Sprint 3–4 (or extended-feature) work — it still describes the Milestone 1–2 state.
- **Action Item:** Update the repo README's "Known Limitations" / "Planned for Future Phases" sections before final submission; if possible, share screenshots or a walkthrough of the Outcome screen so this sprint's record can be fully verified like the others.

### Project Retrospective — Internship Closeout (19-Aug – 13-Oct-2026)

- **What Went Well:** All 4 sprints and 123 core SP delivered on the planned cadence; the team shipped meaningfully more than the graded scope (5 extended features); documentation was actively maintained throughout rather than reconstructed at the end, once the habit was established from Sprint 2 onward.
- **What Could Be Improved:** Sprint 2–4 session dates and task ownership were never logged in real time with Sprint 1's precision, so this record leans on estimated dates and screenshot verification rather than a continuous log.
- **Action Item for future projects:** Log session date + owner for every task at the time it's done — it's cheap in the moment and expensive to reconstruct later.

---

## 5. Key Project Learnings & Competencies Gained (so far)

1. **Agile Engineering Discipline:** Hands-on sprint planning, task breakdown, daily/session standups, and retrospectives across a real mentor-driven cadence.
2. **Multi-Agent System Design:** Negotiation state modeling, standardized offer structures, orchestrator turn/round management, and concession tracking.
3. **LLM Integration:** Prompting Google Gemini for structured JSON decisions (accept/counter/reject + offer + reasoning + parameters), with a deterministic rule-based fallback for API-key-less testing.
4. **Frontend Architecture:** Centralized scenario/state modules decoupled from rendering logic, enabling a single UI to drive all three negotiation scenarios without duplication.
5. **Documentation Discipline:** Maintaining a living Agile tracker (Excel + Markdown) kept in sync with actual GitHub progress, modeled on a prior batch's documentation format.
6. **Product Scope Beyond the Brief:** Shipping authentication, an AI Coach, an Analytics dashboard, a Custom Scenario Builder and a History page — none of which were in the original project plan — on top of the core 123 SP scope.
