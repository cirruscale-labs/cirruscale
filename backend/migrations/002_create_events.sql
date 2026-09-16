-- Migration: 002_create_events
-- Direction: UP

CREATE TABLE IF NOT EXISTS events (
    slug              TEXT PRIMARY KEY,
    title             TEXT        NOT NULL,
    description       TEXT        NOT NULL,
    cover_image       TEXT        NOT NULL DEFAULT '',
    date              DATE        NOT NULL,
    location          TEXT        NOT NULL,
    registration_link TEXT,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- DOWN
-- DROP TABLE IF EXISTS events;
