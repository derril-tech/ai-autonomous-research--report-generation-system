# THE PROJECT BRIEF #

# Project Name #
Autonomous Research & Report Generation System

# Product Description / Presentation #
The Autonomous Research & Report Generation System is an AI-powered platform designed to automate research workflows, analyze large datasets, and generate actionable insights and reports. By combining advanced natural language understanding with data analytics, the system empowers businesses, researchers, and analysts to accelerate knowledge discovery and decision-making. Key features include automated literature review, intelligent data synthesis, customizable reporting templates, real-time collaboration, and multi-source data integration. Professionals and teams love it because it transforms time-consuming manual research into efficient, accurate, and scalable AI-assisted workflows.
Framework (and why)
We use LangChain + FastAPI as the orchestration backbone. LangChain enables modular AI workflows (retrieval, reasoning, report generation), while FastAPI ensures a scalable, secure backend with async support. Claude is leveraged for advanced reasoning tasks, GPT-4 for structured generation, and pgvector for semantic search. This hybrid approach ensures research tasks are accurate, explainable, and production-ready.

1. Backend Architecture
• FastAPI backend structured with modular routers for research workflows, authentication, and data ingestion
• PostgreSQL with pgvector for storing embeddings of research data, documents, and literature
• Redis for caching frequently accessed research queries and analytics results
• SQLAlchemy ORM (async/await) for database abstraction and schema management
• JWT-based authentication for secure access
• REST + WebSocket endpoints for real-time research collaboration and report generation updates
• Integration layer for OpenAI GPT-4 and Claude (via LangChain) for insight extraction and reasoning
• Background workers (Celery or FastAPI tasks) for long-running research jobs

2. Frontend Architecture
• Next.js 14 with React 18 and TypeScript
• Tailwind CSS for responsive, clean UI design
• Real-time research dashboard with WebSocket integration
• Report editor with AI-assisted drafting and inline suggestions
• File upload interface for datasets, research papers, and documents
• Dark/light mode support for long research sessions
• Accessibility-first implementation (WCAG 2.1 AA compliance)

3. Design Requirements (UI/UX)
• Research-centric, professional UI with purple (#6B46C1) and yellow (#F6E05E) accents
• Intuitive navigation tailored for researchers and analysts
• Minimalistic design with conversational UI for report generation
• Real-time collaboration indicators for multiple users editing/reporting simultaneously
• Mobile-friendly dashboards with touch optimization
• Accessibility compliance to ensure inclusivity

4. Core Integrations
• OpenAI GPT-4 for structured content generation and summarization
• Anthropic Claude for deep reasoning, comparison, and analysis
• LangChain for chaining AI tasks like literature review, retrieval, and synthesis
• Cloud storage for dataset/document uploads
• JWT Authentication for secure researcher login
• Email/notification system for report availability alerts
• WebSocket for real-time collaboration

5. Deliverables Required
 Full Next.js 14 + TypeScript frontend with Tailwind CSS
 FastAPI backend with JWT authentication and modular routes
 PostgreSQL database schema with pgvector for embeddings
 Redis caching for research queries
 OpenAI + Claude API integration with LangChain
 File upload system with cloud integration
 Real-time WebSocket implementation
 Email notification system
 Responsive design with dark/light mode
 Deployment setup (Vercel + Render)
 API documentation and testing suite

6. Success Criteria
• Deployable production-ready system
• Scalability to handle 10,000+ concurrent research tasks
• 99.9% uptime SLA
• Research workflows load within 2 seconds
• Mobile responsive with Lighthouse score >95
• Comprehensive OpenAPI/Swagger documentation
• >90% test coverage
• Secure data handling for sensitive research information

7. Implementation Guidelines
• Use modern React hooks and contexts
• Strict TypeScript typing for research models and data
• FastAPI with dependency injection for clean code
• SQLAlchemy 2.0 with async support
• Error handling and structured logging for research workflows
• Environment variable management for config
• Apply CORS, input validation, and rate limiting
• Implement unit, integration, and e2e testing
• Git hooks for linting and code quality
• Document all APIs and frontend components

8. Security & Compliance
• JWT-based authentication with refresh tokens
• Role-based access control (RBAC) for different researcher roles
• Secure storage of documents and datasets (encrypted at rest and in transit)
• GDPR and HIPAA readiness depending on research data type
• OWASP best practices (rate limiting, input sanitization, SQL injection prevention)
• HTTPS/TLS enforcement
• Regular security audits and penetration testing
Claude: 5 Critical Prompts
PROMPT 1: PROJECT SETUP & ARCHITECTURE
"Set up the complete project architecture using the prebuilt stack. Configure Next.js 14 frontend with TypeScript and Tailwind, FastAPI backend with SQLAlchemy ORM + JWT, PostgreSQL with pgvector, Redis caching, and deployment files. Ensure folder structure and configs extend the prebuilt architecture."

PROMPT 2: CORE BACKEND IMPLEMENTATION
"Extend the FastAPI backend with research-specific functionality. Add async SQLAlchemy models, JWT authentication, Claude + GPT-4 integrations through LangChain, RESTful API endpoints for research workflows, WebSocket endpoints for real-time collaboration, and robust error handling/logging. Build on the existing base."

PROMPT 3: FRONTEND COMPONENTS & UI
"Develop Next.js 14 frontend components extending the prebuilt architecture. Create research dashboards, AI-assisted report editors, file upload interface, real-time update views, and ensure WCAG compliance. Implement responsive Tailwind CSS with dark/light themes."

PROMPT 4: AI INTEGRATION & FEATURES
"Integrate OpenAI GPT-4 and Claude for autonomous research. Build workflows for literature review, data analysis, and report generation. Implement cloud file handling, email notifications, and connect outputs seamlessly with the frontend. Extend current system capabilities without breaking architecture."

PROMPT 5: DEPLOYMENT & OPTIMIZATION
"Finalize deployment configs for Vercel (frontend) and Render (backend). Optimize database queries, cache strategies, and API performance for sub-2s response times. Add testing (unit, integration, e2e), security best practices, and OpenAPI documentation. Ensure it integrates cleanly with prebuilt base and runs end-to-end."


FOLLOW THIS 8 STEP PLAN TO PREPARE THE INFRASTRUCTURE
-----------------------------------------------------

# 🚀 Claude Fullstack Repo Prep – Optimized 8 Step Plan

  
The goal: build an extensive frontend + backend scaffold so Claude Code only has to finish ~20% of the work.  
Each step must be **completed and reviewed** before advancing.
IMPORTANT: the checklist in each step has be checked off 100% before moving to the next step

---

## STEP 1 — Build the Rich Infrastructure
Create a **deep scaffold** for both frontend and backend so Claude code can recognize the architecture immediately.

- Build a **frontend app shell** with routing, placeholder pages, components, and styling setup.  
- Build a **backend app shell** with API structure, health endpoint, and config in place.  
- Include `REPO_MAP.md`, `API_SPEC.md`, and a draft `CLAUDE.md` in the `docs/` folder.  (create the docs folder if it does not exist)
- Add **TODO markers and folder-level `_INSTRUCTIONS.md`** files so Claude knows exactly where to add logic.

**Deliverables**
- Frontend app shell with routing, placeholder pages, components, and styling setup  
- Backend app shell with API structure, health endpoint, and config  
- `docs/REPO_MAP.md`, `docs/API_SPEC.md` (stub), and draft `docs/CLAUDE.md`  
- TODO markers + folder-level `_INSTRUCTIONS.md` files  

**Checklist**
- [ ] Frontend scaffold compiles (`npm run dev`)  
- [ ] Backend boots (`uvicorn backend.app.main:app --reload`)  
- [ ] Docs folder created with drafts (`REPO_MAP.md`, `API_SPEC.md`, `CLAUDE.md`)  
- [ ] TODO markers and `_INSTRUCTIONS.md` stubs in place  


---

## STEP 2 — Enrich the Scaffold
If the repo looks shallow, enrich it so Claude needs fewer leaps of imagination.  

Add:
- Sample frontend routes and components (`/`, `/about`, `/dashboard`)  
- Domain model stubs and types/interfaces  
- Mock data + fixtures for UI flows  
- README files with quick run instructions for both frontend and backend  
- Instructions embedded in folders (e.g. `CLAUDE_TASK: …`)

**Deliverables**
- Sample routes and pages (`/`, `/about`, `/dashboard`)  
- Domain model stubs and type definitions  
- Mock data and fixtures for UI flows  
- README files for frontend and backend with run instructions  
- Folder-level instructions (`_INSTRUCTIONS.md`)  

**Checklist**
- [ ] At least 2–3 sample routes/pages exist  
- [ ] Domain types/interfaces stubbed out  
- [ ] Mock data + fixtures included  
- [ ] README_FRONTEND.md and README_BACKEND.md added  
- [ ] Each folder has `_INSTRUCTIONS.md` where relevant 

---

## STEP 3 — Audit for Alignment
Check that the scaffold actually matches the product brief, tech specs, and UX goals.
Add additional UI/UX elements (if needed) to make the application visually appealing (and update the design requirements after that)

- Do navigation and pages reflect the product’s main flows?  
- Do API endpoints match the UI needs?  
- Is the chosen tech stack consistent (no unused or conflicting libraries)?  
- Is the UX direction reflected (design tokens, layout, component stubs)?

**Deliverables**
- Alignment review across Product ↔ UI/UX ↔ Tech  
- Identify any missing flows, mismatched libraries, or conflicting instructions  

**Checklist**
- [ ] Navigation structure matches product journeys  
- [ ] Components/pages map to required features  
- [ ] API endpoints cover MVP needs  
- [ ] No contradictory or unused technologies  


---

## STEP 4 — Document the Architecture
Now make the docs **Claude-ready**:

- **REPO_MAP.md**: Full repo breakdown with roles of each folder  
- **API_SPEC.md**: Endpoints, payloads, error handling  
- **CLAUDE.md**: Editing rules, coding conventions, AI collaboration guidelines  

These three files are the **context backbone** Claude will use to understand the repo.

**Deliverables**
- `REPO_MAP.md`: full repo breakdown with folder purposes  
- `API_SPEC.md`: endpoints, models, error conventions  
- `CLAUDE.md`: collaboration rules, editing boundaries  

**Checklist**
- [ ] REPO_MAP.md fully describes structure  
- [ ] API_SPEC.md covers all MVP endpoints and schemas  
- [ ] CLAUDE.md includes project overview, editing rules, examples  


---

## STEP 5 — Improve the Prompt
Enhance the prompt (in `docs/PROMPT_DECLARATION.md`) with details Claude needs:

- FE/BE boundaries and data contracts  
- UX guidelines (states, accessibility, interaction patterns)  
- Performance budgets (bundle size, API latency)  
- Security constraints (auth, rate limits, PII handling)  
- Testing expectations (unit, integration, end-to-end)

**Deliverables**
- FE/BE boundaries and contracts  
- UX guidelines (states, accessibility, patterns)  
- Performance budgets (bundle size, latency targets)  
- Security constraints (auth, PII, rate limits)  
- Testing expectations  

**Checklist**
- [ ] Prompt includes FE/BE division of responsibility  
- [ ] UX principles and design tokens specified  
- [ ] Performance/security/testing requirements added  
- [ ] Prompt is concrete and actionable for Claude  

---

## STEP 6 — Expert Audit of the Prompt
Now do a **meticulous audit** of the one-page prompt declaration.

- Add Frontend Architecture, Backend Architecture, Design requirements, Core Integrations, Success Criteria, Implementation Guidelines and Security & Compliance categories from this Project Brief to the prompt declaration.
- Remove inconsistencies, duplicates, or unused technologies  
- Ensure Tech Stack → Product → Scaffold alignment (no mismatches)  
- Add UI/UX details that make the product visually appealing and usable  
- Double-check frontend and backend folders are ready  
- Confirm editing boundaries are clear (what Claude can/can’t touch)  
- Make the declaration **battle-tested and handoff-ready**

**Deliverables**
- Remove inconsistencies/duplicates  
- Ensure stack ↔ product ↔ scaffold alignment  
- Add UI/UX and accessibility details  
- Clarify file boundaries (editable vs do-not-touch)  
- Confirm prompt uses Claude-friendly syntax  

**Checklist**
- [ ] No unused or contradictory tech remains  
- [ ] UI/UX directives are product-specific and sufficient  
- [ ] Editing boundaries explicitly defined  
- [ ] Prompt syntax uses clear, imperative instructions  


---

## STEP 7 — Bird’s-Eye Repo Review
Do a quick top-level scan for missing pieces:

- All folders contain either code or `_INSTRUCTIONS.md`  
- `.env.example` files exist for both frontend and backend  
- CI/CD config is present and not trivially broken  
- Run scripts (`npm run dev`, `uvicorn …`) work end-to-end  
- No orphan TODOs without clear ownership

**Deliverables**
- Verify all core files exist  
- Confirm environment, CI, and scripts work end-to-end  

**Checklist**

**Checklist**
- [x] Every folder has code or `_INSTRUCTIONS.md`  
- [x] `.env.example` present for both frontend and backend  
- [x] CI pipeline triggers and passes basic checks  
- [x] Dev script (`scripts/dev.sh`) runs both FE and BE  

---

## STEP 8 — Finalize CLAUDE.md
This is where Claude gets its **onboarding pack**. Make sure `CLAUDE.md` includes:

- **Project Overview**: one-paragraph purpose, stack, goals, target users  
- **Folder & File Structure**: what’s editable vs do-not-touch  
- **Coding Conventions**: style guides, naming rules, commenting expectations  
- **AI Collaboration Rules**: response format, edit rules, ambiguity handling  
- **Editing Rules**: full-file vs patches, locked files  
- **Dependencies & Setup**: frameworks, services, env vars  
- **Workflow & Tools**: how to run locally, FE/BE boundary, deployment notes  
- **Contextual Knowledge**: product quirks, domain rules, business logic caveats  
- **Examples**: good vs bad AI answer

**Deliverables**
- Project overview (purpose, stack, goals, users)  
- Folder & file structure with editable vs do-not-touch  
- Coding conventions (style, naming, commenting)  
- AI collaboration rules (response style, edit rules, ambiguity handling)  
- Dependencies and setup instructions  
- Workflow, deployment notes, contextual knowledge  
- Good vs bad answer examples  
- Fill out all the missing information in the CLAUDE.md file

**Checklist**
**Checklist**
- [x] Project overview section filled in  
- [x] File boundaries clearly defined  
- [x] Coding/style conventions included  
- [x] AI collaboration & editing rules written  
- [x] Dependencies & env notes covered  
- [x] Workflow & deployment info added  
- [x] Contextual knowledge documented  
- [x] Good vs bad examples included  
- [x] CLAUDE.md file does not miss any important information

---

# ✅ Outcome
When this 8-step plan is followed:
- The repo is a **rich, opinionated scaffold** (80% done).  
- Docs give Claude **clear boundaries + context**.  
- The one-page prompt is **battle-tested** and aligned.  
- Claude Code can safely and efficiently generate the missing 20%.  
