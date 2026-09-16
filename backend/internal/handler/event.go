package handler

import (
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
	"github.com/go-chi/chi/v5"
)

func EventRouter() http.Handler {
	r := chi.NewRouter()
	r.Get("/", listEvents)
	r.Get("/{slug}", getEvent)
	return r
}

func listEvents(w http.ResponseWriter, r *http.Request) {
	response.JSON(w, http.StatusOK, []any{})
}

func getEvent(w http.ResponseWriter, r *http.Request) {
	slug := chi.URLParam(r, "slug")
	_ = slug
	response.Error(w, http.StatusNotFound, "event not found")
}
