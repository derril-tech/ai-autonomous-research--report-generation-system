-- Migration script for PostgreSQL schema with pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS research_tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    status VARCHAR(50),
    data TEXT,
    created_by INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS documents (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255),
    owner_id INTEGER REFERENCES users(id),
    embedding vector(1536)
);
