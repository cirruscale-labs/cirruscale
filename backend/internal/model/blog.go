package model

type Blog struct {
	Slug        string   `json:"slug"`
	Title       string   `json:"title"`
	Excerpt     string   `json:"excerpt"`
	Body        string   `json:"body"`
	CoverImage  string   `json:"cover_image"`
	Author      string   `json:"author"`
	Date        string   `json:"date"`
	Tags        []string `json:"tags"`
}
