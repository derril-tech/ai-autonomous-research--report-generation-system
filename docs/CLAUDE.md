# CLAUDE.md

## Project Overview
Autonomous Research & Report Generation System: AI-powered platform for research automation, data analysis, and report generation. Stack: Next.js 14, React 18, FastAPI, LangChain, Claude, GPT-4, PostgreSQL, Redis.

## Editing Rules
- Use patches for file edits unless full-file replacement is required
- Follow coding conventions and style guides
- Only edit files marked as editable

## AI Collaboration Guidelines
- Respond with clear, modular code
- Use imperative instructions
- Handle ambiguity by asking for clarification

## Editing Boundaries
- Editable: All files except those marked as do-not-touch
- Do-not-touch: Deployment configs, environment files, locked documentation

## Dependencies & Setup
- Frontend: Next.js 14, React 18, Tailwind CSS
- Backend: FastAPI, SQLAlchemy, pgvector, Redis, LangChain, Claude, GPT-4
- Install dependencies and use provided run scripts

## Workflow & Tools
- Run frontend: `npm run dev`
- Run backend: `uvicorn backend.app.main:app --reload`
- Use `.env.example` files for environment variables

## Contextual Knowledge
- Product is research-centric, professional, and accessibility-first
- UI/UX uses purple/yellow accents, gradients, rounded corners, and real-time indicators
- Business logic centers on research automation, data analysis, and report generation

## Examples

### Good AI Answer
```tsx
// Accessible, modular React component
export default function Button({ label, onClick }) {
  return (
    <button
      className="px-4 py-2 rounded bg-primary text-accent font-semibold shadow focus:outline-none focus:ring"
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

### Bad AI Answer
```tsx
// Monolithic, inaccessible code
export default function Button(props) {
  return <button>{props.text}</button>;
}
```
