package model

type Event struct {
	Slug             string `json:"slug"`
	Title            string `json:"title"`
	Description      string `json:"description"`
	CoverImage       string `json:"cover_image"`
	Date             string `json:"date"`
	Location         string `json:"location"`
	RegistrationLink string `json:"registration_link,omitempty"`
}
