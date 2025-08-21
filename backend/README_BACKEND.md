# Backend Quick Start

## How to Run

1. Install dependencies: `pip install -r requirements.txt`
2. Start dev server: `uvicorn app.main:app --reload`

## Structure
- app/: FastAPI app, routers, models, schemas
- services/: business logic
- utils/: helpers

## TODO
- Implement API endpoints and business logic as per project brief.
- Stub out domain types/interfaces for backend models and schemas.
- Add mock data and fixtures for backend development.

## Alignment Review (STEP 3)
- API endpoints cover MVP needs (/research, /auth/login, /data/upload, /ws/collab)
- Tech stack is consistent and matches requirements
- No unused or contradictory technologies detected
