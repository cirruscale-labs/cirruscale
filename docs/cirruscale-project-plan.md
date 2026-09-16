---
title: "Cirruscale Portfolio — Project Plan"
author: "Engineering Team"
date: "September 2026"
geometry: "margin=2.5cm"
fontsize: 11pt
---

# Cirruscale Portfolio — Project Plan

## 1. Overview

This document describes the architecture, folder structure, tech stack decisions, and phased migration roadmap for the Cirruscale company portfolio website.

The site launches as a fully static frontend. All structural decisions are made upfront to ensure zero-rewrite migration to a dynamic full-stack application with a Go backend, Docker containers, GitHub CI/CD, and Kubernetes.

---

## 2. Tech Stack

| Layer         | Technology                          | Reason                                                   |
|---------------|--------------------------------------|----------------------------------------------------------|
| Frontend      | Next.js 14 (TypeScript)              | Static export now; SSR + API routes later, zero rewrite  |
| Styling       | Tailwind CSS                         | Utility-first, design system friendly                    |
| Backend       | Go (chi router)                      | Performant, simple, excellent for REST APIs              |
| Database      | PostgreSQL 16                        | Relational, production-grade, Go/Next.js support         |
| Cache         | Redis                                | Session management, rate limiting (Phase 3+)             |
| Containers    | Docker (multi-stage builds)          | Consistent local and production environments             |
| Orchestration | Kubernetes + Helm                    | Auto-scaling, rolling deploys, environment management    |
| CI/CD         | GitHub Actions                       | Monorepo path-based triggers, GHCR image registry        |

---

## 3. Repository Strategy — Monorepo

A single Git repository with independent service folders. Frontend and backend are fully decoupled but share the same repo for:

- Atomic commits across services
- Single source of truth for CI/CD
- Shared infrastructure configuration

```
cirruscale/
├── frontend/       # Next.js (TypeScript)
├── backend/        # Go REST API
├── infra/          # Kubernetes manifests + Helm charts
├── .github/        # GitHub Actions pipelines
├── docker-compose.yml
├── Makefile
└── .env.example
```

---

## 4. Frontend Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router (pages)
│   │   ├── layout.tsx          # Root layout: Navbar + Footer
│   │   ├── page.tsx            # Homepage
│   │   ├── works/products/     # Products page
│   │   ├── works/services/     # Services page
│   │   ├── company/about/      # About Us page
│   │   ├── company/members/    # Team Members page
│   │   ├── resources/blogs/    # Blog listing + [slug] detail
│   │   ├── resources/events/   # Events listing + [slug] detail
│   │   └── contact/            # Contact Us page
│   ├── components/             # UI components by domain
│   │   ├── layout/             # Navbar, Footer, DropdownMenu
│   │   ├── home/               # Hero, FeaturedProducts, CTASection
│   │   ├── works/              # ProductCard, ServiceCard
│   │   ├── company/            # MemberCard, AboutHero
│   │   ├── resources/          # BlogCard, EventCard
│   │   ├── contact/            # ContactForm
│   │   └── ui/                 # Button, Card, Badge, SectionHeader
│   ├── data/                   # Static JSON (Phase 1 — replaced by API in Phase 2)
│   ├── types/                  # TypeScript interfaces (shared contract with Go models)
│   ├── lib/                    # Data fetchers (the swap layer)
│   └── styles/
├── public/images/              # Static assets
├── Dockerfile                  # Multi-stage: node build → node runtime
└── next.config.ts              # output: 'export' for Phase 1 static build
```

### Navigation Structure

```
Logo (→ Homepage)
├── Our Works
│   ├── Products          /works/products
│   └── Services          /works/services
├── Company
│   ├── About Us          /company/about
│   └── Members           /company/members
├── Resources
│   ├── Blogs             /resources/blogs
│   └── Events            /resources/events
└── Contact Us            /contact
```

---

## 5. Backend Structure (Go)

```
backend/
├── cmd/api/main.go             # Entry point, router setup
├── internal/
│   ├── handler/                # HTTP handlers (one file per resource)
│   ├── model/                  # Data structs (mirrors frontend types/)
│   ├── repository/             # Database queries (interface for easy swapping)
│   ├── service/                # Business logic layer
│   ├── middleware/             # CORS, logger, JWT auth
│   └── config/                 # Environment config loader
├── pkg/
│   ├── response/               # Standard JSON response helpers
│   └── validator/              # Input validation
├── migrations/                 # SQL migration files (numbered)
├── Dockerfile                  # Multi-stage: go build → distroless runtime
└── go.mod
```

### API Routes (v1)

| Method | Route                  | Description              |
|--------|------------------------|--------------------------|
| GET    | /health                | Health check             |
| GET    | /api/v1/products       | List all products        |
| GET    | /api/v1/products/:id   | Single product           |
| GET    | /api/v1/services       | List all services        |
| GET    | /api/v1/members        | List team members        |
| GET    | /api/v1/blogs          | List all blogs           |
| GET    | /api/v1/blogs/:slug    | Single blog post         |
| GET    | /api/v1/events         | List all events          |
| GET    | /api/v1/events/:slug   | Single event             |
| POST   | /api/v1/contact        | Submit contact form      |

---

## 6. Migration Path — Static to Dynamic

The `lib/` layer is the key abstraction. Swapping one file migrates a resource to the API with zero component changes.

**Phase 1 (Static):**
```typescript
// lib/getBlogs.ts
import { blogs } from "@/data/blogs"
export const getBlogs = () => blogs
```

**Phase 2 (Dynamic):**
```typescript
// lib/getBlogs.ts  — only this file changes
export const getBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs`)
  return res.json()
}
```

Frontend components remain completely unchanged.

---

## 7. Docker Setup

### Multi-Stage Builds

**Frontend Dockerfile:**
- Stage 1 (builder): `node:20-alpine` — runs `npm run build`
- Stage 2 (runner): `node:20-alpine` — serves `.next/` output

**Backend Dockerfile:**
- Stage 1 (builder): `golang:1.23-alpine` — compiles single static binary
- Stage 2 (runner): `gcr.io/distroless/static` — minimal image, no shell, no OS attack surface

### Local Development

```bash
make dev          # docker compose up --build (all services)
make dev-frontend # Next.js hot reload only
make dev-backend  # Go with air hot reload only
```

Services and ports:

| Service   | Port |
|-----------|------|
| frontend  | 3000 |
| backend   | 8080 |
| postgres  | 5432 |
| redis     | 6379 |

---

## 8. GitHub Actions CI/CD

### Pipelines

| Workflow                | Trigger                        | Purpose                          |
|-------------------------|--------------------------------|----------------------------------|
| frontend-ci.yml         | push/PR touching frontend/     | Lint, type-check, build, push    |
| backend-ci.yml          | push/PR touching backend/      | Lint, test, build, push          |
| deploy-staging.yml      | push to develop branch         | Auto-deploy to staging via Helm  |
| deploy-production.yml   | push to main branch            | Manual-approval deploy to prod   |

### Pipeline Flow

```
Push code
  → Lint + Type Check
  → Run Tests
  → Build Docker Image
  → Push to GHCR (ghcr.io/cirruscale/*)
  → Deploy to Staging (auto on develop)
  → Manual Approval Gate
  → Deploy to Production
```

### Required GitHub Secrets

| Secret             | Used In          | Description                     |
|--------------------|------------------|---------------------------------|
| KUBECONFIG_STAGING | deploy-staging   | Base64-encoded kubeconfig       |
| KUBECONFIG_PROD    | deploy-production| Base64-encoded kubeconfig       |

---

## 9. Kubernetes Infrastructure

```
infra/
├── k8s/
│   ├── namespace.yml                     # cirruscale namespace
│   ├── frontend/
│   │   ├── deployment.yml                # 2 replicas, rolling update
│   │   ├── service.yml                   # ClusterIP → port 80
│   │   └── hpa.yml                       # Scale 2–10 pods at 70% CPU
│   ├── backend/
│   │   ├── deployment.yml                # 2 replicas, health probe on /health
│   │   ├── service.yml                   # ClusterIP → port 8080
│   │   └── hpa.yml                       # Scale 2–20 pods at 70% CPU
│   ├── postgres/
│   │   ├── statefulset.yml               # Single replica StatefulSet
│   │   └── service.yml                   # Headless service
│   ├── ingress/
│   │   └── ingress.yml                   # / → frontend, /api → backend, TLS via cert-manager
│   └── configmaps/
│       ├── frontend-config.yml
│       └── backend-config.yml
└── helm/cirruscale/
    ├── Chart.yaml
    ├── values.yaml           # Local defaults
    ├── values.staging.yaml   # Staging overrides
    └── values.prod.yaml      # Production overrides
```

### Ingress Routing

```
cirruscale.com/api/*  →  backend service  (port 8080)
cirruscale.com/*      →  frontend service (port 80)
```

---

## 10. Environment Strategy

| Environment | Runtime              | Config source               |
|-------------|----------------------|-----------------------------|
| local       | docker-compose       | .env.local                  |
| staging     | Kubernetes           | GitHub Secrets + values.staging.yaml |
| production  | Kubernetes           | GitHub Secrets + values.prod.yaml    |

---

## 11. Branch Strategy

```
main          → production deployments (protected, requires PR + approval)
develop       → staging auto-deploy on every merge
feature/*     → developer branches, PR into develop
hotfix/*      → urgent fix, PR into main + backmerge to develop
```

---

## 12. Phased Roadmap

| Phase | Description                               | Deployment                          |
|-------|-------------------------------------------|-------------------------------------|
| 1     | Static Next.js, JSON data, no backend     | Vercel or Netlify (free)            |
| 2     | Add Go backend + docker-compose           | Single VPS or Railway               |
| 3     | Add GitHub Actions CI/CD + GHCR           | Automated build + push              |
| 4     | Kubernetes + Helm                         | Managed K8s (GKE / EKS / DOKS)     |
| 5     | Redis, CDN, Prometheus + Grafana          | Full production scale               |

---

## 13. Content Handoff Checklist

The following content is needed to replace all placeholders in the site:

- [ ] Company logo (SVG preferred)
- [ ] Brand colors (primary, accent, background)
- [ ] Hero headline, subheadline, tagline
- [ ] Products: name, description, features, image, link (per product)
- [ ] Services: name, description, deliverables, image (per service)
- [ ] About Us: company story, mission, vision, founding year
- [ ] Team members: name, role, bio, photo, LinkedIn (per member)
- [ ] Blogs: title, excerpt, body, cover image, author, date, tags (per post)
- [ ] Events: title, description, date, location, cover image, registration link (per event)
- [ ] Contact details: email, phone, address, social media links

---

*Document generated: September 2026*
