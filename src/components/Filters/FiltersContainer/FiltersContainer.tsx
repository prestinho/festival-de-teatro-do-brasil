import React, { memo } from "react";
import StateFilter from "../StateFilter/StateFilter";

import { states } from "../../../models/State/states";
import { dates } from "../../../models/Date/dates";

import { Container } from "./styles";
import { Filters } from "../../../models/Filters/Filters";
import DateFilter from "../DateFilter/DateFilter";

export interface Props {
  filters: Filters;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FiltersContainer: React.FC<Props> = ({ filters, handleChange }) => {
  return (
    <Container data-testid="filters">
      <StateFilter states={states} checked={filters.state} handleChange={handleChange} />
      <DateFilter dates={dates} checked={filters.date} handleChange={handleChange} />
    </Container>
  );
};

export default memo(FiltersContainer);
