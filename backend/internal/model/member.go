package model

type Member struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Role     string `json:"role"`
	Bio      string `json:"bio"`
	Photo    string `json:"photo"`
	LinkedIn string `json:"linkedin,omitempty"`
	Twitter  string `json:"twitter,omitempty"`
}
