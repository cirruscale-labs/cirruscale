package model

type Product struct {
	ID          string   `json:"id"`
	Name        string   `json:"name"`
	Tagline     string   `json:"tagline"`
	Description string   `json:"description"`
	Image       string   `json:"image"`
	Features    []string `json:"features"`
	Link        string   `json:"link,omitempty"`
}
