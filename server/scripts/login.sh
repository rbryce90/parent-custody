curl -X POST http://localhost:4000/api/user/login\
  -H "Content-Type: application/json" \
  -d '{"password": "password", "email": "brycerbond@gmail.com"}'