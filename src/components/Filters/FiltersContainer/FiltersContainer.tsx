import React, { memo } from "react";
import StateFilter from "../StateFilter/StateFilter";

import { states } from "../../../models/State/states";

import { Container } from "./styles";
import { Filters } from "../../../models/Filters/Filters";

export interface Props {
  filters: Filters;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FiltersContainer: React.FC<Props> = ({ filters, handleChange }) => {
  return (
    <Container data-testid="filters">
      <StateFilter states={states} checked={filters.state} handleChange={handleChange} />
    </Container>
  );
};

export default memo(FiltersContainer);
