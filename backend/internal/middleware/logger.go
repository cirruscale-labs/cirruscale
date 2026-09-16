package middleware

import (
	"log"
	"net/http"
	"time"
)

// StructuredLogger wraps requests with timing and status logging.
// chi/middleware.Logger is used in main.go; this file is reserved
// for a custom structured logger (e.g. zerolog) when needed.
func StructuredLogger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s %s", r.Method, r.URL.Path, time.Since(start))
	})
}
