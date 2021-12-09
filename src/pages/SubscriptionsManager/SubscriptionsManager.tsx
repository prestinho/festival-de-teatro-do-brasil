import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";
import { getStatusName, Play } from "../../models/Play/Play";
import {
  DefaultContainer,
  H1,
  P,
  PageContainer,
  Strong,
  Table,
  THead,
  TBody,
  Tr,
  Th,
  Td,
} from "../../styles/PageStyles";
import { Edit2Outline } from "@styled-icons/evaicons-outline";

import { NewSubscriptionButton } from "./styles";

export interface Props {}

const SubscriptionsManager: React.FC<Props> = () => {
  const [, , , getPlaysByUserId] = usePlaysContext();
  const auth = useAuthContext();
  const history = useHistory();

  const [plays] = useState<Play[]>(getPlaysByUserId(auth?.uid));

  const handleNavigateToPlay = (play: Play) => {
    if (play.status !== "R") history.push("/espetaculo/" + play.id);
  };

  return (
    <PageContainer>
      <DefaultContainer>
        <H1>Minhas Inscrições</H1>
        <P>
          Bem vinde <Strong>{auth?.displayName}</Strong>! Aqui nessa página você
          pode realizar uma nova inscrição e acompanhar as inscrições que já
          fez!
        </P>
        <P>
          Lembramos que você pode editar as inscrições que enviou até elas serem
          validadas. Se tiver qualquer problema, envie um email para nós:{" "}
          <Strong>EMAIL@EMAIL.COM</Strong>
        </P>

        <Table>
          <THead>
            <Tr>
              <Th>Espetáculo</Th>
              <Th>Status</Th>
              <Th>Ações</Th>
            </Tr>
          </THead>
          <TBody>
            {plays.map((play: Play) => (
              <Tr key={play.id}>
                <Td onClick={() => handleNavigateToPlay(play)}>{play.name}</Td>

                <Td
                  className={`status-${play.status}`}
                  onClick={() => handleNavigateToPlay(play)}
                >
                  {getStatusName(play.status)}
                </Td>

                <Td>
                  {play.status === "P" && (
                    <Edit2Outline
                      size="2rem"
                      color="red"
                      title="Editar"
                      onClick={() =>
                        history.push(`/editar-inscricao/${play.id}`)
                      }
                    />
                  )}
                </Td>
              </Tr>
            ))}
            <Tr>
              <Td colSpan={3}>
                <NewSubscriptionButton
                  onClick={() => history.push("/inscricao-aviso")}
                >
                  Enviar nova inscrição
                </NewSubscriptionButton>
              </Td>
            </Tr>
          </TBody>
        </Table>
      </DefaultContainer>
    </PageContainer>
  );
};

export default SubscriptionsManager;
