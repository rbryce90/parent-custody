INSERT INTO users(name, email, password, phone_number)
VALUES ($1,
        $2,
        $3,
        $4) RETURNING id,
                      name,
                      email,
                      phone_number,
                      role;

