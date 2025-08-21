# Autonomous Research & Report Generation System API Documentation

## Overview
This API enables research workflows, data ingestion, report generation, and real-time collaboration.

## Endpoints
- `/research` (GET): Fetch research tasks
- `/auth/login` (POST): Authenticate user and return JWT
- `/data/upload` (POST): Upload research data
- `/ws/collab` (WebSocket): Real-time collaboration

## Models
- **User**: id, name, email, role
- **ResearchTask**: id, title, status, data, created_by
- **Document**: id, filename, owner_id, embedding

## Auth
JWT-based authentication required for protected endpoints.

## Error Handling
All errors return structured JSON with `detail` field.
