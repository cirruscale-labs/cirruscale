package handler

import (
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
	"github.com/go-chi/chi/v5"
)

func ServiceRouter() http.Handler {
	r := chi.NewRouter()
	r.Get("/", listServices)
	r.Get("/{id}", getService)
	return r
}

func listServices(w http.ResponseWriter, r *http.Request) {
	response.JSON(w, http.StatusOK, []any{})
}

func getService(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	_ = id
	response.Error(w, http.StatusNotFound, "service not found")
}
