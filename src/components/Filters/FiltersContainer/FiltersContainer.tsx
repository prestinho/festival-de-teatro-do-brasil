import React, { memo, useContext } from "react";
import StateFilter from "../StateFilter/StateFilter";

import { states } from "../../../models/State/states";

import { Container, ContainerFooter } from "./styles";

export interface Props {
  filters: { state: string };
  setFilters: Function;
}

const FiltersContainer: React.FC<Props> = ({ filters, setFilters }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: any) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container data-testid="filters">
      <StateFilter states={states} checked={filters.state} handleChange={handleChange} />
    </Container>
  );
};

export default memo(FiltersContainer);
