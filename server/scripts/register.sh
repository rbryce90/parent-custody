# curl -X POST http://localhost:4000/api/user/register \
#   -H "Content-Type: application/json" \
#   -d '{ "name": "Richard B Bond", "password": "newpassword", "email": "brycerbond@gmail.com", "phoneNumber": "409-555-7520"}'

  
curl -X POST http://localhost:4000/api/user/register \
  -H "Content-Type: application/json" \
  -d '{ "name": "John B Smith", "password": "newpassword", "email": "test3@gmail.com", "phoneNumber": "409-555-7520"}'

