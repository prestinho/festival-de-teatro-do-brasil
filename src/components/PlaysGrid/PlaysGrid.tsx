import React from "react";
import PlayCard from "../PlayCard/PlayCard";
import { Play } from "../../models/Play/Play";

import { Container } from "./styles";
import { StyledLoader } from "../StyledLoading/StyledLoading";

export interface Props {
  plays: Play[];
  loading: boolean;
}

const PlaysGrid: React.FC<Props> = ({ plays, loading }) => {
  return (
    <StyledLoader active={loading} spinner>
      <Container>
        {plays.map((play: Play) => (
          <PlayCard key={play.id} play={play} />
        ))}
      </Container>
    </StyledLoader>
  );
};

export default PlaysGrid;
