import React from "react";
import PlayCard from "../PlayCard/PlayCard";
import { Play } from "../../models/Play/Play";

import { Container } from "./styles";

export interface Props {
   plays : Play[]
}

const PlaysGrid: React.FC<Props> = ({ plays }) => {
  return (
    <Container>
      {plays.map((play: Play) => (
        <PlayCard key={play.id} play={play} />
      ))}
    </Container>
  );
};

export default PlaysGrid;
