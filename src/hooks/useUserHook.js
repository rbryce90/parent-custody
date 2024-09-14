import { useState } from "react";

const useUserHook = () => {
  const [user, setUser] = useState(null);
  return { user, setUser };
};
export default useUserHook;
