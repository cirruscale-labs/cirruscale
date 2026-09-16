.PHONY: dev dev-frontend dev-backend build build-frontend build-backend \
        test test-frontend test-backend lint clean deploy-staging deploy-prod

# ─── Local Development ────────────────────────────────────────────────────────
dev:
	docker compose up --build

dev-detach:
	docker compose up --build -d

dev-frontend:
	cd frontend && npm run dev

dev-backend:
	cd backend && air

# ─── Build ────────────────────────────────────────────────────────────────────
build:
	docker compose build

build-frontend:
	cd frontend && npm run build

build-backend:
	cd backend && go build -o bin/api ./cmd/api

# ─── Test ─────────────────────────────────────────────────────────────────────
test: test-frontend test-backend

test-frontend:
	cd frontend && npm run test

test-backend:
	cd backend && go test ./... -coverprofile=coverage.out

# ─── Lint ─────────────────────────────────────────────────────────────────────
lint:
	cd frontend && npm run lint
	cd backend && golangci-lint run ./...

# ─── Database Migrations ──────────────────────────────────────────────────────
migrate-up:
	migrate -path backend/migrations -database "$(DATABASE_URL)" up

migrate-down:
	migrate -path backend/migrations -database "$(DATABASE_URL)" down

# ─── Docker cleanup ───────────────────────────────────────────────────────────
clean:
	docker compose down -v --remove-orphans
	docker system prune -f

# ─── Kubernetes Deploy ────────────────────────────────────────────────────────
deploy-staging:
	helm upgrade --install cirruscale ./infra/helm/cirruscale \
		-f ./infra/helm/cirruscale/values.staging.yaml \
		--namespace cirruscale-staging --create-namespace

deploy-prod:
	helm upgrade --install cirruscale ./infra/helm/cirruscale \
		-f ./infra/helm/cirruscale/values.prod.yaml \
		--namespace cirruscale-prod --create-namespace
