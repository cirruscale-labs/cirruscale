package middleware

import (
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
)

// JWTAuth validates Bearer tokens on protected routes.
// Phase 1: not used (all routes are public).
// Phase 2: mount this on admin/private route groups.
func JWTAuth(jwtSecret string) func(http.Handler) http.Handler {
	return func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// TODO: parse and validate JWT from Authorization header
			token := r.Header.Get("Authorization")
			if token == "" {
				response.Error(w, http.StatusUnauthorized, "missing authorization token")
				return
			}
			next.ServeHTTP(w, r)
		})
	}
}
