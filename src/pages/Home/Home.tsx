import React, { useEffect, useState, useCallback } from "react";
import FiltersContainer from "../../components/Filters/FiltersContainer/FiltersContainer";
import PlaysGrid from "../../components/PlaysGrid/PlaysGrid";
import Banner from "./components/Banner/Banner";
import { PageContainer } from "../../styles/PageStyles";

import { Play } from "../../models/Play/Play";
import { Filters } from "../../models/Filters/Filters";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";
import FiltersService from "../../services/FiltersService/FiltersService";

const Home: React.FC = () => {
  const [plays, setPlays] = useState<Play[]>([]);
  const [filters, setFilters] = useState<Filters>(FiltersService.getFilters());
  const [loading, setLoading] = useState<boolean>(false);

  const [getAllPlays, getPlaysByState] = usePlaysContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: Filters) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const getPlaysVisiblePlays = useCallback(() => {
    if (filters.state) setPlays(getPlaysByState(filters.state));
    else setPlays(getAllPlays());
  }, [filters, getAllPlays, getPlaysByState]);

  useEffect(() => {
    getPlaysVisiblePlays();
    setLoading(false);
  }, [getPlaysVisiblePlays]);

  useEffect(() => {
    FiltersService.setFilters(filters);
  }, [filters]);

  return (
    <PageContainer style={{ display: "block" }}>
      <Banner />
      <FiltersContainer filters={filters} handleChange={handleChange} />
      <PlaysGrid plays={plays} loading={loading} />
    </PageContainer>
  );
};

export default Home;
