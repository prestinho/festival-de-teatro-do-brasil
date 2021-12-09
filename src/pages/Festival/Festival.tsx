import React from "react";
import {
  DefaultContainer,
  PageContainer,
  H1,
  P,
  Strong,
  Ul,
  Li,
} from "../../styles/PageStyles";

import { Link } from "react-router-dom";

import { StyledStrong } from "./styles";

export interface Props {}

const Festival: React.FC<Props> = () => {
  return (
    <PageContainer>
      <DefaultContainer>
        <H1>I Festival de Teatro do Brasil</H1>
        <P>
          O <Strong>I Festival de Teatro do Brasil</Strong> é uma ação
          política/artística que tem como objetivo primeiro demarcar a luta de
          combate a censura, a criminalização dos artistas e ao desmonte que o
          governo federal vem promovendo contra a cultura brasileira.
        </P>
        <P>
          Para participar e gritar o seu PROTESTO contra os atos do GOVERNO
          FEDERAL, referente à cultura, você precisa:
        </P>
        <Ul>
          <Li>
            <StyledStrong>1.</StyledStrong> Aderir ao Festival com sua atividade
            teatral <Strong>presencial</Strong>
          </Li>
          <Li>
            <StyledStrong>2.</StyledStrong> Ter a atividade teatral já
            programada
          </Li>
          <Li>
            <StyledStrong>3.</StyledStrong> Que a atividade aconteça no período
            <Strong> de 25 a 27 de março de 2022</Strong>.
          </Li>
          <Li>
            <StyledStrong>4.</StyledStrong> Que a atividade aconteça em qualquer
            espaço do <Strong>Nordeste</Strong>
          </Li>
          <Li>
            <StyledStrong>5.</StyledStrong> Que o grupo ou artista que aderir ao
            Festival seja <Strong>responsável pela sua própria produção</Strong>
            .
          </Li>
          <Li>
            <StyledStrong>6.</StyledStrong> Preencher a{" "}
            <Link to="/inscricao-aviso" href="/inscricao-aviso">
              <Strong>ficha de inscrição</Strong>
            </Link>{" "}
            (ao enviar, concorda com os termos aqui explicitados)
          </Li>
          <Li>
            <StyledStrong>7.</StyledStrong> Ler o <Strong>manifesto</Strong>{" "}
            para o público antes, durante ou após a sua apresentação
          </Li>
          <Li>
            <StyledStrong>8.</StyledStrong> Inserir a logomarca do{" "}
            <Strong>I Festival de Teatro do Brasil</Strong>, em todo o material
            de divulgação. Assim como difundir a programação completa do
            Festival que reunirá atrações de todo o Nordeste e demais
            aderências, em suas divulgações para imprensa e redes sociais.
          </Li>
        </Ul>
        {/*TODO: pegar cidades automaticamente */}* Este primeiro Festival
        acontecerá, de forma <Strong>independente e coletiva</Strong>, nos
        teatros, nas sedes dos grupos culturais e nas ruas. Já aderiram ao “I
        Festival de Teatro do Brasil”{" "}
        <Strong>21 cidades, dos 9 estados do Nordeste</Strong>. O Teatro do
        Brasil não só resiste, <Strong>o Teatro do Brasil vai à luta!</Strong>
      </DefaultContainer>
    </PageContainer>
  );
};

export default Festival;
