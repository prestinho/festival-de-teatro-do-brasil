import React, { memo } from "react";

import { KeyboardArrowRight } from "@styled-icons/material-rounded/KeyboardArrowRight";

import { Card, Poster, Title, Info, PlaySession, Actions } from "./styles";

import { Play } from "../../models/Play/Play";
import { imgPathProvider } from "../../services/imgPathProvider";

export interface Props {
  play: Play;
}

const PlayCard: React.FC<Props> = ({ play }) => {
  return (
    <Card>
      <div>
        <Poster
          bgImg={imgPathProvider.getPath(
            play.poster.image,
            process.env.REACT_APP_CARD_WIDTH
          )}
        />
        <Title>
          <h3>{play.name}</h3>
          <span>
            {play.group ? `${play.group} - ` : ""}
            {play.state}
          </span>
        </Title>
      </div>
      <Info>
        {play.sessions.map((session, key) => (
          <PlaySession key={key}>
            <div>
              Dia {session.time?.day?.split("-")[2]} - {session.time?.hour}
            </div>
            {session.place && session.place.name && (
              <div>
                <b>{session.place.name}</b>
              </div>
            )}
          </PlaySession>
        ))}
      </Info>
      <Actions>
        <KeyboardArrowRight size="4rem" />
      </Actions>
    </Card>
  );
};

export default memo(PlayCard);
