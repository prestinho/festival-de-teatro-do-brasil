import { createContext, useEffect, useState } from "react";
import { comparator, Play } from "../models/Play/Play";
import playConverter from "../models/Play/firestoreConverter";

import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../apis/firebase";

export const PlaysContext = createContext<Play[]>([]);

export const PlaysProvider: React.FC = (props) => {
  const [plays, setPlays] = useState<Play[]>([]);

  useEffect(() => {
    const playsCollectionRef = collection(db, "plays").withConverter(playConverter);
    return onSnapshot(query(playsCollectionRef), (snapshot) => {
      const serverPlays: Play[] = [];

      snapshot.docs.forEach((document: any) => {
        serverPlays.push(document.data());
      });

      setPlays(serverPlays.sort(comparator));
    });
  }, []);

  return <PlaysContext.Provider value={plays}>{props.children}</PlaysContext.Provider>;
};

export default PlaysProvider;
