-- Migration: 001_create_blogs
-- Direction: UP

CREATE TABLE IF NOT EXISTS blogs (
    slug         TEXT PRIMARY KEY,
    title        TEXT        NOT NULL,
    excerpt      TEXT        NOT NULL,
    body         TEXT        NOT NULL,
    cover_image  TEXT        NOT NULL DEFAULT '',
    author       TEXT        NOT NULL,
    date         DATE        NOT NULL,
    tags         TEXT[]      NOT NULL DEFAULT '{}',
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- DOWN
-- DROP TABLE IF EXISTS blogs;
