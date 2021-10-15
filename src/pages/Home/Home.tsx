import React from "react";
import FiltersContainer from "../../components/Filters/FiltersContainer/FiltersContainer";
import PlaysGrid from "../../components/PlaysGrid/PlaysGrid";
import Banner from "./components/Banner/Banner";
import { PageContainer } from "./styles";


const Home: React.FC = () => {
  return (
    <PageContainer>
      <Banner/>
      <FiltersContainer>

      </FiltersContainer>
      <PlaysGrid />
    </PageContainer>
  );
}

export default Home;
