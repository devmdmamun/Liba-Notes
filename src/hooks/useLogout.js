import { useDispatch } from "react-redux";
import { signout } from "../app/features/userSlice";
import { auth } from "../firebase/config";

export const useLogout = () => {
  const dispatch = useDispatch();

  const logOut = async () => {
    await auth.signOut();
    dispatch(signout());
  };

  return { logOut };
};
