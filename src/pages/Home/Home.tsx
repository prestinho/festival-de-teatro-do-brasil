import React, { useEffect, useState } from "react";
import FiltersContainer from "../../components/Filters/FiltersContainer/FiltersContainer";
import PlaysGrid from "../../components/PlaysGrid/PlaysGrid";
import Banner from "./components/Banner/Banner";
import { PageContainer } from "../../styles/PageStyles";

import { db } from "../../apis/firebase";
import { collection, query, onSnapshot, where } from "firebase/firestore";

import { Play } from "../../models/Play/Play";
import playConverter from "../../models/Play/firestoreConverter";

const Home: React.FC = () => {
  const [plays, setPlays] = useState<Play[]>([]);
  const [filters, setFilters] = useState({ state: "PE" });

  const handleSetFilters = (filters: any) => {
    setFilters(filters);
  };

  useEffect(() => {
    const playsCollectionRef = collection(db, "plays").withConverter(playConverter);
    return onSnapshot(
      query(playsCollectionRef, where("state", "==", filters.state)),
      (snapshot) => {
        const allPlays: Play[] = [];

        snapshot.docs.forEach((document: any) => {
          allPlays.push(document.data());
        });
        setPlays(allPlays);
      }
    );
  }, [filters]);

  return (
    <PageContainer>
      <Banner />
      <FiltersContainer filters={filters} setFilters={handleSetFilters} />
      <PlaysGrid plays={plays} />
    </PageContainer>
  );
};

export default Home;
