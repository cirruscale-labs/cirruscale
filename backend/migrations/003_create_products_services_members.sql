-- Migration: 003_create_products_services_members
-- Direction: UP

CREATE TABLE IF NOT EXISTS products (
    id          TEXT PRIMARY KEY,
    name        TEXT        NOT NULL,
    tagline     TEXT        NOT NULL,
    description TEXT        NOT NULL,
    image       TEXT        NOT NULL DEFAULT '',
    features    TEXT[]      NOT NULL DEFAULT '{}',
    link        TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
    id           TEXT PRIMARY KEY,
    name         TEXT        NOT NULL,
    tagline      TEXT        NOT NULL,
    description  TEXT        NOT NULL,
    image        TEXT        NOT NULL DEFAULT '',
    deliverables TEXT[]      NOT NULL DEFAULT '{}',
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS members (
    id         TEXT PRIMARY KEY,
    name       TEXT        NOT NULL,
    role       TEXT        NOT NULL,
    bio        TEXT        NOT NULL,
    photo      TEXT        NOT NULL DEFAULT '',
    linkedin   TEXT,
    twitter    TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- DOWN
-- DROP TABLE IF EXISTS members;
-- DROP TABLE IF EXISTS services;
-- DROP TABLE IF EXISTS products;
