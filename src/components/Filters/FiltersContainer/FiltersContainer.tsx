import React from "react";
import StateFilter from "../StateFilter/StateFilter";
import TextFilter from "../TextFilter/TextFilter";

import { states } from "../../../models/State/states";

import { Container, ContainerFooter } from "./styles";

export interface Props {}

const FiltersContainer: React.FC<Props> = () => {
  return (
    <Container data-testid="filters">
      <StateFilter states={states} />
    </Container>
  );
};

export default FiltersContainer;
