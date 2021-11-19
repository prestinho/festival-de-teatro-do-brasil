import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Play } from "../../models/Play/Play";
import {
  DefaultContainer,
  PageContainer,
  H3,
  Strong,
  P,
  StyledLink,
} from "../../styles/PageStyles";

interface LocationState {
  play: Play;
}

const SubscriptionDone: React.FC = () => {
  const location = useLocation<LocationState>();
  const history = useHistory();
  const [play, setPlay] = useState<Play>();

  useEffect(() => {
    if (!location.state.play) history.push("/inscricao-aviso");
    setPlay(location.state.play);
  }, [location, history]);

  return (
    <PageContainer>
      <DefaultContainer>
        <H3>Inscrição realizada com sucesso!</H3>
        <P>
          Vamos validar as informações e logo depois confirmamos a sua participação no
          festival!
        </P>
        <P>Obrigade! Logo nos vemos nos palcos!!!</P>
        <P>
          <Strong>* Você poderá editar</Strong> qualquer coisa informação sobre seu
          espetáculo na página <StyledLink to="/inscricoes">Minhas inscrições</StyledLink>
        </P>
        {play && (
          <P>
            Espetáculo inscrito: <Strong>{play.name}</Strong>
            <br />
            Sobre: <Strong>{play.about}</Strong>
            <br />
            Ficha técnica: <Strong>{play.crew}</Strong>
          </P>
        )}
      </DefaultContainer>
    </PageContainer>
  );
};

export default SubscriptionDone;
