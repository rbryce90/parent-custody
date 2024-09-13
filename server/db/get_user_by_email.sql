select password,
       id,
       email,
       phone_number,
       role
from users
where email = $1