package validator

import "strings"

type Validator struct {
	Errors map[string]string
}

func New() *Validator {
	return &Validator{Errors: make(map[string]string)}
}

func (v *Validator) Valid() bool {
	return len(v.Errors) == 0
}

func (v *Validator) Check(ok bool, field, message string) {
	if !ok {
		v.Errors[field] = message
	}
}

func (v *Validator) NotBlank(value, field string) {
	v.Check(strings.TrimSpace(value) != "", field, field+" must not be blank")
}
