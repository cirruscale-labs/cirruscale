package handler

import (
	"encoding/json"
	"net/http"

	"github.com/cirruscale/backend/pkg/response"
	"github.com/cirruscale/backend/pkg/validator"
	"github.com/go-chi/chi/v5"
)

func ContactRouter() http.Handler {
	r := chi.NewRouter()
	r.Post("/", submitContact)
	return r
}

type contactInput struct {
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

func submitContact(w http.ResponseWriter, r *http.Request) {
	var input contactInput
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		response.Error(w, http.StatusBadRequest, "invalid request body")
		return
	}

	v := validator.New()
	v.NotBlank(input.Name, "name")
	v.NotBlank(input.Email, "email")
	v.NotBlank(input.Message, "message")

	if !v.Valid() {
		response.JSON(w, http.StatusUnprocessableEntity, v.Errors)
		return
	}

	// TODO: send email / store in DB
	response.Message(w, http.StatusOK, "message received")
}
