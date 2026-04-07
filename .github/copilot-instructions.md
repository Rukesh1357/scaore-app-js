# Cricket Score Dashboard - AI Agent Instructions

## Architecture Overview

Single-page cricket scoring dashboard with role-based access and Firebase-backed sync.

## Notes

- Keep `updateUI()` or equivalent render flow as the single source of truth.
- Preserve admin vs scorer permissions.
- Prefer non-destructive updates to match state and history.
