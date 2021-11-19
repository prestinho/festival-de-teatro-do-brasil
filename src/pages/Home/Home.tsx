import React, { useEffect, useState } from "react";
import FiltersContainer from "../../components/Filters/FiltersContainer/FiltersContainer";
import PlaysGrid from "../../components/PlaysGrid/PlaysGrid";
import Banner from "./components/Banner/Banner";
import { PageContainer } from "../../styles/PageStyles";

import { Play } from "../../models/Play/Play";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";

const Home: React.FC = () => {
  const [plays, setPlays] = useState<Play[]>([]);
  const [filters, setFilters] = useState({ state: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const [getAllPlays, getPlaysByState] = usePlaysContext();

  const handleSetFilters = (filters: any) => {
    setFilters(filters);
  };

  useEffect(() => {
    if (filters.state) setPlays(getPlaysByState(filters.state));
    else setPlays(getAllPlays());

    setLoading(false);
  }, [filters, getPlaysByState, getAllPlays]);

  return (
    <PageContainer style={{ display: "block" }}>
      <Banner />
      <FiltersContainer filters={filters} setFilters={handleSetFilters} />
      <PlaysGrid plays={plays} loading={loading} />
    </PageContainer>
  );
};

export default Home;
