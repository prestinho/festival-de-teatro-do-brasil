import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroTitle from "../../components/HeroTitle/HeroTitle";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";
import { emptyPlay, Play } from "../../models/Play/Play";
import { PageContainer } from "../../styles/PageStyles";
import PlayDetailsBody from "./components/PlayDetailsBody/PlayDetailsBody";

export interface Props {}

const PlayDetails: React.FC<Props> = () => {
  const { playId } = useParams<{ playId: string }>();
  const [play, setPlay] = useState<Play>(emptyPlay());

  const [, , getPlay] = usePlaysContext();

  useEffect(() => {
    setPlay(getPlay(playId));
  }, [playId, getPlay]);

  return (
    <PageContainer>
      {play.name && (
        <>
          <HeroTitle
            title={play.name}
            src={play.poster.image}
            caption={play.poster.caption}
            subTitle={`${play.group ? `${play.group} -` : ``} ${play.state}`}
          />
          <PlayDetailsBody play={play} />
        </>
      )}
    </PageContainer>
  );
};

export default PlayDetails;
