DROP TABLE IF EXISTS interferences;


DROP TABLE IF EXISTS documents;


DROP TABLE IF EXISTS users;


CREATE TABLE users(id serial PRIMARY KEY, -- Optional: Auto-incrementing ID
 name varchar(255) NOT NULL,
                   email varchar(255) UNIQUE NOT NULL,
                                             phone_number varchar(20),
                                                          date_of_creation timestamp DEFAULT CURRENT_TIMESTAMP,
                                                                                             is_reviewed boolean DEFAULT FALSE,
                                                                                                                         role varchar(255) DEFAULT 'user',
                                                                                                                                                   password TEXT NOT NULL);


CREATE TABLE interferences(id serial PRIMARY KEY, -- Optional: Auto-incrementing ID for the interference record
 date varchar(64), -- Store date as a string
 summary text, -- Summary with a length limit (approx 500 words)
 location text, -- Location as a string
 law_enforcement_contacted boolean DEFAULT FALSE, -- Boolean indicating if law enforcement was contacted
 criminal_report boolean DEFAULT FALSE, -- Boolean indicating if a criminal report was filed
 user_id integer REFERENCES users(id) -- Foreign key reference to the users table
);


CREATE TABLE documents(id serial PRIMARY KEY, -- Unique identifier for the document record
 user_id integer NOT NULL REFERENCES users(id), -- Foreign key to the users table
 document_url text NOT NULL, -- URL of the document file in S3
 upload_date timestamp DEFAULT CURRENT_TIMESTAMP, -- Date and time when the document was uploaded
 description text -- Optional field for additional information about the document
);


INSERT INTO users(name, email, password, phone_number, role)
VALUES ('Richard B Bond',
        'brycerbond@gmail.com',
        '$2b$10$oK4mib6q8C6/5UaZqzVX9.gyzABk.vx.VIBGIF3Uf5YTROafykdWG',
        '409-338-7520',
        'admin')