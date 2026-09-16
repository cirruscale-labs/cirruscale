.PHONY: run build test lint tidy

run:
	go run ./cmd/api

build:
	go build -o bin/api ./cmd/api

test:
	go test ./... -coverprofile=coverage.out

lint:
	golangci-lint run ./...

tidy:
	go mod tidy

# Live reload (requires: go install github.com/cosmtrek/air@latest)
dev:
	air
