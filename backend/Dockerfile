# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM golang:1.23-alpine AS builder
WORKDIR /app

# Cache dependencies
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o bin/api ./cmd/api

# ─── Stage 2: Minimal runtime ────────────────────────────────────────────────
FROM gcr.io/distroless/static-debian12 AS runner
WORKDIR /app

COPY --from=builder /app/bin/api .

EXPOSE 8080
ENTRYPOINT ["/app/api"]
