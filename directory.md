# Repository Directory Structure

```
example-three-tier-application/
│
├── .git/                          # Git repository metadata
├── .github/                       # GitHub configuration
│   └── workflows/
│       └── deploy.yml             # CI/CD deployment workflow
│
├── src/                           # Source code directory
│   ├── api/                       # Backend API service (Node.js)
│   │   ├── .dockerignore
│   │   ├── Dockerfile
│   │   ├── index.js               # Main API entry point
│   │   ├── db.js                  # Database connection
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── db/                        # Database service (PostgreSQL)
│   │   ├── .dockerignore
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── migrations/            # Database migration scripts
│   │       ├── 1718500000000_initial-schema.js
│   │       └── 1718500001000_create-tasks.js
│   │
│   ├── infrastructure/            # Terraform IaC configuration
│   │   ├── .gitignore
│   │   ├── main.tf                # Main Terraform configuration
│   │   ├── migration.tf           # Migration resources
│   │   ├── outputs.tf             # Output values
│   │   ├── variables.tf           # Variable definitions
│   │   └── terraform.tfvars.example # Example terraform variables
│   │
│   └── web/                       # Frontend web service (Next.js)
│       ├── .dockerignore
│       ├── .gitignore
│       ├── Dockerfile
│       ├── README.md
│       ├── AGENTS.md              # AI agents documentation
│       ├── CLAUDE.md              # Claude documentation
│       ├── eslint.config.mjs       # ESLint configuration
│       ├── next.config.ts         # Next.js configuration
│       ├── postcss.config.mjs      # PostCSS configuration
│       ├── tsconfig.json          # TypeScript configuration
│       ├── package.json
│       ├── package-lock.json
│       ├── app/                   # Next.js app directory
│       │   ├── favicon.ico
│       │   ├── globals.css        # Global styles
│       │   ├── layout.tsx         # Root layout component
│       │   ├── page.tsx           # Home page component
│       │   └── actions.ts         # Server actions
│       └── public/                # Static assets
│           ├── file.svg
│           ├── globe.svg
│           ├── next.svg
│           ├── vercel.svg
│           └── window.svg
│
├── .gitignore                     # Git ignore rules
├── LICENSE                        # Project license
├── README.md                      # Main project documentation
├── agents.md                      # Agents documentation
├── docker-compose.yml             # Docker Compose configuration
└── directory.md                   # This file - Repository structure
```

## Directory Overview

### Three-Tier Application Architecture

This repository contains a **three-tier application** consisting of:

1. **Frontend (Web Tier)**: Next.js-based React application located in `src/web/`
2. **Backend (API Tier)**: Node.js Express API located in `src/api/`
3. **Database Tier**: PostgreSQL database with migrations in `src/db/`

### Key Components

- **Docker**: Each service has a `Dockerfile` for containerization
- **Infrastructure as Code**: Terraform configurations in `src/infrastructure/`
- **CI/CD**: GitHub Actions workflow in `.github/workflows/`
- **Configuration**: Docker Compose orchestration at root level
