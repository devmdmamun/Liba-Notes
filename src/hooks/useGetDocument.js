import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useGetDocument = (cravedCollection, cravedId) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  // getting realtime document
  useEffect(() => {
    const docRef = doc(db, cravedCollection, cravedId);

    const unSub = onSnapshot(
      docRef,
      (doc) => {
        setDocument({ ...doc.data() });
        setError(null);
      },
      (error) => {
        console.log(error.message);
        setError("Failed to get document");
      }
    );
    return () => unSub();
  }, [cravedCollection, cravedId]);

  return { document, error };
};
