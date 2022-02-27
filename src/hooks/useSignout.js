import { useDispatch } from "react-redux";
import { signout } from "../app/features/userSlice";
import { auth } from "../firebase/config";

export const useSignout = () => {
  const dispatch = useDispatch();

  const signOut = async () => {
    await auth.signOut();
    dispatch(signout());
  };

  return { signOut };
};
