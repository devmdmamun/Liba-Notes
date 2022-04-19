import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useDocument = (collection, id) => {
  const ref = doc(db, collection, id);

  const update = async (documents) => {
    await updateDoc(ref, {
      ...documents,
    });
  };

  const getDocument = async () => {
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData;
    } else {
      console.log("document not found");
    }
  };
  return { update, getDocument };
};
