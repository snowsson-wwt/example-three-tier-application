================================================================================
EXAMPLE THREE-TIER APPLICATION
================================================================================

PROJECT OVERVIEW
A reference implementation of a modern three-tier web application demonstrating
best practices for containerized deployments and infrastructure as code.

TECHNOLOGY STACK
- Frontend: Next.js 16, React 19, Tailwind CSS (port 3000)
- Backend API: Express 5, Node.js 22 (port 3001)
- Database: PostgreSQL 17
- Infrastructure: Terraform (for GCP deployment)
- Containerization: Docker & Docker Compose
- CI/CD: GitHub Actions

ARCHITECTURE
The application follows a classic three-tier architecture:
  Browser → Web (Next.js) → API (Express) → PostgreSQL Database

APPLICATION
A simple task manager (to-do list) that demonstrates how the three tiers
communicate with each other.

QUICK START
1. Ensure Docker Desktop is installed
2. Run: docker compose up --build
3. Open: http://localhost:3000
4. Stop with: docker compose down

KEY DIRECTORIES
- src/web/          Next.js frontend application
- src/api/          Express REST API backend
- src/db/           Database migrations (node-pg-migrate)
- src/infrastructure Terraform configuration for GCP deployment

API ENDPOINTS
- GET  /health      Health check
- GET  /tasks       List all tasks
- POST /tasks       Create a new task (JSON: {"title": "..."})
- PATCH /tasks/:id  Update a task (JSON: {"completed": true} or {"title": "..."})

DEPLOYMENT
Production deployment to Google Cloud Platform (GCP) is configured via
Terraform in src/infrastructure/, which provisions:
- VPC network and private subnet
- Cloud SQL PostgreSQL instance
- Cloud Run services for API and web frontend
- Integrated secret management

For deployment details, see README.md and src/infrastructure/ files.

DATABASE MIGRATIONS
Migrations are managed by node-pg-migrate in src/db/migrations/.
The 'migrate' Docker service applies pending migrations on startup.

DOCUMENTATION
- README.md       Main project documentation with detailed setup and deployment
- directory.md    Complete repository structure overview
- .github/        GitHub Actions CI/CD configuration

LICENSE
See LICENSE file for licensing information.

================================================================================
