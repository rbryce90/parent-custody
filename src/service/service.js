import axios from "axios";

const LOGIN_PATH = "/api/user/login";
const CREATE_USER_PATH = "/api/user/register";
const ADMIN_USERS_PATH = "/api/admin/users";

const getUserByIdPath = (id) => `/api/user/${id}`;

export async function loginRequest({ email, password }) {
  return await axios.post(LOGIN_PATH, { email, password });
}

export async function createUserRequest({
  password,
  phoneNumber,
  name,
  email,
}) {
  return await axios.post(CREATE_USER_PATH, {
    password,
    phoneNumber,
    name,
    email,
  });
}
export async function adminGetUsers() {
  return await axios.get(ADMIN_USERS_PATH);
}
export async function getUserById(id) {
  const path = getUserByIdPath(id);
  return await axios.get(path);
}
