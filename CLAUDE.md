# CLAUDE.md

Instructions for Claude Code sessions opened in this repo. Review rules live
in [`REVIEW.md`](./REVIEW.md).

## Track problems in GitHub Issues

GitHub Issues is where bugs and planned work for `@pliosoft/sites-sdk` are
tracked. When you hit a bug, a public-surface question, or follow-up work
that's out of scope for the current change, **file an issue** instead of only
mentioning it in chat or leaving a TODO:

- Search open issues first; comment on an existing one rather than filing a
  duplicate.
- Use the templates (Bug, or Feature or task) and include evidence.
- Problems in the hosting platform itself belong in `pliosoft/sites-app`.
- Reference the issue from the PR that fixes it (`Fixes #123`).

## Dependency updates

Dependencies are bumped monthly by a scheduled Claude run (procedure in
`pliosoft/sites-app` at `.claude/skills/dependency-update/SKILL.md`):
everything to latest, skipping versions published in the last 7 days. This
package must stay peer-only, so that run never adds `dependencies`.
