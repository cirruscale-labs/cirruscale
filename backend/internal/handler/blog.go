package handler

import (
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
	"github.com/go-chi/chi/v5"
)

func BlogRouter() http.Handler {
	r := chi.NewRouter()
	r.Get("/", listBlogs)
	r.Get("/{slug}", getBlog)
	return r
}

func listBlogs(w http.ResponseWriter, r *http.Request) {
	// TODO: inject BlogService and call service.List()
	response.JSON(w, http.StatusOK, []any{})
}

func getBlog(w http.ResponseWriter, r *http.Request) {
	slug := chi.URLParam(r, "slug")
	_ = slug
	response.Error(w, http.StatusNotFound, "blog not found")
}
