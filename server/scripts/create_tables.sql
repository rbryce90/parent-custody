DROP TABLE IF EXISTS interferences;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id serial PRIMARY KEY, -- Optional: Auto-incrementing ID
    name varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    phone_number varchar(20),
    date_of_creation timestamp DEFAULT CURRENT_TIMESTAMP,
    is_reviewed boolean DEFAULT FALSE,
    user_role varchar(255),
    password TEXT NOT NULL
);

CREATE TABLE interferences(
    id serial PRIMARY KEY, -- Optional: Auto-incrementing ID for the interference record
    date varchar(64), -- Store date as a string
    summary text, -- Summary with a length limit (approx 500 words)
    location text, -- Location as a string
    law_enforcement_contacted boolean DEFAULT FALSE, -- Boolean indicating if law enforcement was contacted
    criminal_report boolean DEFAULT FALSE, -- Boolean indicating if a criminal report was filed
    user_id integer REFERENCES users(id) -- Foreign key reference to the users table
);

