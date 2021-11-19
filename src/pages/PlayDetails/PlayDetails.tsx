import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeroTitle from "../../components/HeroTitle/HeroTitle";
import { LoaderMsg, StyledLoader } from "../../components/StyledLoading/StyledLoading";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";
import { emptyPlay, Play } from "../../models/Play/Play";
import { PageContainer } from "../../styles/PageStyles";
import PlayDetailsBody from "./components/PlayDetailsBody/PlayDetailsBody";

import {} from "./styles";

export interface Props {}

const PlayDetails: React.FC<Props> = () => {
  const { playId } = useParams<{ playId: string }>();
  const [play, setPlay] = useState<Play>(emptyPlay());
  const [loading, setLoading] = useState<boolean>(false);

  const [, , getPlay] = usePlaysContext();

  useEffect(() => {
    //setLoading(true);
    setPlay(getPlay(playId));
    //setLoading(false);
  }, [playId, getPlay]);

  return (
    <StyledLoader active={loading} text={<LoaderMsg>Carregando...</LoaderMsg>} spinner>
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
    </StyledLoader>
  );
};

export default PlayDetails;
