package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/cirruscale/backend/internal/config"
	"github.com/cirruscale/backend/internal/handler"
	"github.com/cirruscale/backend/internal/middleware"
	"github.com/go-chi/chi/v5"
	chimiddleware "github.com/go-chi/chi/v5/middleware"
)

func main() {
	cfg := config.Load()

	r := chi.NewRouter()

	// Global middleware
	r.Use(chimiddleware.Logger)
	r.Use(chimiddleware.Recoverer)
	r.Use(chimiddleware.RequestID)
	r.Use(middleware.CORS(cfg.CORSOrigin))

	// Health check
	r.Get("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"ok"}`))
	})

	// API v1 routes
	r.Route("/api/v1", func(r chi.Router) {
		r.Mount("/products", handler.ProductRouter())
		r.Mount("/services", handler.ServiceRouter())
		r.Mount("/members",  handler.MemberRouter())
		r.Mount("/blogs",    handler.BlogRouter())
		r.Mount("/events",   handler.EventRouter())
		r.Mount("/contact",  handler.ContactRouter())
	})

	addr := fmt.Sprintf(":%s", cfg.Port)
	log.Printf("Server starting on %s (env: %s)", addr, cfg.AppEnv)
	if err := http.ListenAndServe(addr, r); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
