CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    gender TEXT,
    hair_color TEXT,
    eye_color TEXT,
    hobby TEXT,
    birthday_day TEXT,
    birthday_month TEXT,
    birthday_year TEXT,
    auth_id TEXT
);