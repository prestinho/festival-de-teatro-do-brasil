import React, { MouseEvent, useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";
import { usePlaysContext } from "../../hooks/usePlaysContext/usePlaysContext";
import { getStatusName, Play } from "../../models/Play/Play";
import { DefaultContainer, PageContainer } from "../../styles/PageStyles";
import { Edit2Outline } from "@styled-icons/evaicons-outline";

import { Table, THead, TBody, Tr, Th, Td } from "./styles";

export interface Props {}

const SubscriptionsManager: React.FC<Props> = () => {
  const [, , , getPlaysByUserId] = usePlaysContext();
  const auth = useAuthContext();
  const history = useHistory();

  const [plays] = useState<Play[]>(getPlaysByUserId(auth?.uid));

  const handleNavigateToPlay = (play : Play) => {
    if (play.status !== 'R')
        history.push("/espetaculo/" + play.id);
  }

  return (
    <PageContainer>
      <DefaultContainer>
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
                <Td onClick={() => handleNavigateToPlay(play)}>
                  {play.name}
                </Td>
                <Td
                  onClick={{() => handleNavigateToPlay(play)}}
                  className={`status-${play.status}`}
                >
                  {getStatusName(play.status)}
                </Td>
                <Td>
                  <Edit2Outline
                    size="2rem"
                    color="red"
                    title="Editar"
                    onClick={() => alert(`editar ${play.id}`)}
                  />
                </Td>
              </Tr>
            ))}
          </TBody>
        </Table>
      </DefaultContainer>
    </PageContainer>
  );
};

export default SubscriptionsManager;
