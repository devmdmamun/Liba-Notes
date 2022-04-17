import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useUpdateDoc = (collection, id) => {
  const ref = doc(db, collection, id);

  const update = async (documents) => {
    await updateDoc(ref, {
      ...documents,
    });
  };
  return { update };
};
