import React, { useContext } from "react";

import { DefaultContainer, PageContainer, Strong, P, H3 } from "../../styles/PageStyles";
import GoToSubscriptionButton from "./components/GoToSubscriptionButton/GoToSubscriptionButton";
import { User } from "@firebase/auth";
import { useAuthContext } from "../../hooks/useAuthContext";

export interface Props {}

const SubscriptionLogin: React.FC<Props> = () => {
  const auth: User | null = useAuthContext();

  return (
    <PageContainer>
      <DefaultContainer>
        <H3>Epa, que maravilha, mais um espetáculo para o festival!</H3>
        <P>
          Mas antes de realizar a inscrição
          <Strong>{auth && ` ${auth.displayName}`}</Strong>, dê uma lidinha aqui:
        </P>
        <P>
          Lembramos que o Festival será realizado de maneira
          <Strong> independente e coletiva</Strong>. Isto significa que toda a produção e
          o custeio do espetáculo será a <Strong>cargo das pessoas proponentes.</Strong>
        </P>
        <P>
          <Strong>Mas então, por que existe o festival</Strong> se ele não fornece nenhuma
          ajuda financeira?
        </P>
        <P>
          Boa pergunta! O festival será uma maneira de <Strong>resistirmos juntes</Strong>
          , realizando arte! Será nosso pequeno delírio comunista: ao longo de 3 dias, o{" "}
          <Strong>Nordeste inteiro</Strong> estará fazendo arte ao mesmo tempo!
        </P>
        <P>
          Tendo isso em mente, pode {!auth && `se logar em uma conta do google e `}
          <Strong>fazer a inscrição na próxima página</Strong>.
        </P>

        <P>*E se ficou alguma dúvida, pode perguntar pelo email ----------!</P>

        <GoToSubscriptionButton />
      </DefaultContainer>
    </PageContainer>
  );
};

export default SubscriptionLogin;
