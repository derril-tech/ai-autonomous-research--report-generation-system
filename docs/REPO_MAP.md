# REPO_MAP.md

## Folder Structure Overview

- frontend/: Next.js 14 app, React 18 components, Tailwind CSS styling
  - pages/: Main routes (Home, About, Dashboard)
  - components/: Reusable UI components, domain stubs, mock data
  - styles/: Tailwind CSS config and custom styles
  - utils/: Helper functions
- backend/: FastAPI app, modular routers, SQLAlchemy ORM, JWT, integrations
  - app/: Main FastAPI codebase
    - routers/: API endpoints (research, auth, data ingestion)
    - models/: SQLAlchemy models
    - schemas/: Pydantic schemas
    - services/: Business logic
    - utils/: Logging, Redis, etc.
- docs/: Documentation, API specs, prompt declarations, Claude rules
  - REPO_MAP.md: Repo breakdown
  - API_SPEC.md: API endpoints, models, error conventions
  - CLAUDE.md: Collaboration rules, editing boundaries
- ...other folders as needed

## Purpose
This file maps the repo structure and explains the role of each folder for Claude Code and developers.

## Alignment Review (STEP 3)
- Navigation structure: Home, About, Dashboard pages present
- Components/pages: Stubs for dashboard, domain models, mock data included
- API endpoints: /research, /auth/login, /data/upload, /ws/collab match UI needs
- Tech stack: Next.js 14, React 18, FastAPI, Tailwind CSS, SQLAlchemy, pgvector, Redis
- No unused or contradictory technologies detected

## Updated Design Requirements
- Research-centric, professional UI with purple (#6B46C1) and yellow (#F6E05E) accents
- Gradient backgrounds, rounded corners, and shadow effects for modern look
- Real-time collaboration indicators (animated, accessible)
- Minimalistic, conversational UI for report generation
- Mobile-friendly, responsive layouts using Tailwind CSS
- Accessibility-first: color contrast, keyboard navigation, ARIA labels
