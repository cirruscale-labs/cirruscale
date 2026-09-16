package handler

import (
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
	"github.com/go-chi/chi/v5"
)

func MemberRouter() http.Handler {
	r := chi.NewRouter()
	r.Get("/", listMembers)
	return r
}

func listMembers(w http.ResponseWriter, r *http.Request) {
	response.JSON(w, http.StatusOK, []any{})
}
