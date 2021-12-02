import React from "react";
import { useHistory } from "react-router";
import { Play, Session } from "../../../../models/Play/Play";
import { DefaultContainer, P, Strong } from "../../../../styles/PageStyles";

import { SessionDiv, Address, BackArrow } from "./styles";

export interface Props {
  play: Play;
}

const PlayDetailsBody: React.FC<Props> = ({ play }) => {
  const history = useHistory();

  return (
    <DefaultContainer style={{ marginTop: "60vh" }}>
      {play.name && (
        <>
          {play.year && (
            <>
              <Strong>Ano: </Strong>
              <P>{play.year}</P>
              <br />
            </>
          )}
          <Strong>Sobre: </Strong> <P>{play.about}</P>
          <br />
          <Strong>Ficha Técnica: </Strong> <P>{play.crew}</P>
          <br />
          <Strong>Sessões: </Strong>
          {play.sessions.map((session: Session, index: number) => (
            <SessionDiv key={index}>
              <P style={{ marginBottom: "0rem" }}>
                {`Dia ${session.time.day.split("-")[2]} - ${session.time.hour}h`}
              </P>
              <b>{session.place.name}</b>
              <Address>{session.place.address}</Address>
            </SessionDiv>
          ))}
        </>
      )}
      <BackArrow size="5rem" onClick={() => history.goBack()} />
    </DefaultContainer>
  );
};

export default PlayDetailsBody;
