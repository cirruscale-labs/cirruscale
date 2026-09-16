package handler

import (
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
	"github.com/go-chi/chi/v5"
)

func ProductRouter() http.Handler {
	r := chi.NewRouter()
	r.Get("/", listProducts)
	r.Get("/{id}", getProduct)
	return r
}

func listProducts(w http.ResponseWriter, r *http.Request) {
	// TODO: inject ProductService and call service.List()
	response.JSON(w, http.StatusOK, []any{})
}

func getProduct(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	// TODO: call service.GetByID(id)
	_ = id
	response.Error(w, http.StatusNotFound, "product not found")
}
