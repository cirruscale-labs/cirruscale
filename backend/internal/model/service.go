package model

type Service struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Tagline     string   `json:"tagline"`
	Description string   `json:"description"`
	Image       string   `json:"image"`
	Deliverables []string `json:"deliverables"`
}
