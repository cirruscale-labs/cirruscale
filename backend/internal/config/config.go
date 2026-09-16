package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	Port        string
	DatabaseURL string
	RedisURL    string
	JWTSecret   string
	CORSOrigin  string
	AppEnv      string
}

func Load() *Config {
	// Load .env only in local dev; in containers env vars are injected directly
	if err := godotenv.Load("../../.env"); err != nil {
		log.Println("No .env file found — using environment variables")
	}

	return &Config{
		Port:        getEnv("PORT", "8080"),
		DatabaseURL: getEnv("DATABASE_URL", ""),
		RedisURL:    getEnv("REDIS_URL", ""),
		JWTSecret:   getEnv("JWT_SECRET", "change-me"),
		CORSOrigin:  getEnv("CORS_ORIGIN", "http://localhost:3000"),
		AppEnv:      getEnv("APP_ENV", "local"),
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
