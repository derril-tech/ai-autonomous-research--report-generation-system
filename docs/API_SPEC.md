# API_SPEC.md

## MVP Endpoints
- /research (GET): Fetch research tasks
- /auth/login (POST): Authenticate user
- /data/upload (POST): Upload research data
- /ws/collab (WebSocket): Real-time collaboration

## Models
- User: id, name, email, role
- ResearchTask: id, title, status, data, created_by
- Document: id, filename, owner_id, embedding

## Error Handling
All errors return structured JSON with a `detail` field.

## Example Response
{
  "detail": "Error message here."
}
