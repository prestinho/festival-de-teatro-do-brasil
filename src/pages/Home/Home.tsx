import React, { useEffect, useState } from "react";
import FiltersContainer from "../../components/Filters/FiltersContainer/FiltersContainer";
import PlaysGrid from "../../components/PlaysGrid/PlaysGrid";
import Banner from "./components/Banner/Banner";
import { PageContainer } from "../../styles/PageStyles";

import { db } from "../../apis/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

import { Play } from "../../models/Play/Play";
import playConverter from "../../models/Play/firestoreConverter";

const Home: React.FC = () => {
  const [allPlays, setAllPlays] = useState<Play[]>([]);
  const [plays, setPlays] = useState<Play[]>([]);
  const [filters, setFilters] = useState({ state: "" });
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetFilters = (filters: any) => {
    setFilters(filters);
  };

  useEffect(() => {
    const playsCollectionRef = collection(db, "plays").withConverter(playConverter);
    return onSnapshot(query(playsCollectionRef), (snapshot) => {
      const serverPlays: Play[] = [];

      snapshot.docs.forEach((document: any) => {
        serverPlays.push(document.data());
      });
      setAllPlays(serverPlays);
    });
  }, []);

  useEffect(() => {
    if (filters.state) setPlays(allPlays.filter((play) => play.state == filters.state));
    else setPlays(allPlays);

    setLoading(false);
  }, [filters, allPlays]);

  return (
    <PageContainer>
      <Banner />
      <FiltersContainer filters={filters} setFilters={handleSetFilters} />
      <PlaysGrid plays={plays} loading={loading} />
    </PageContainer>
  );
};

export default Home;
