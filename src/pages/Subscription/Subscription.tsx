import React from "react";

import { Container, H3, Sessions, AddButton } from "./styles";
import { PageContainer } from "../../styles/PageStyles";
import { states } from "../../models/State/states";
import LabeledInput from "../../components/Forms/LabeledInput/LabeledInput";
import Select from "../../components/Forms/Select/Select";
import SessionInputs from "./components/SessionInputs/SessionInputs";
import { Session } from "../../models/Play/Play";
import ImageInput from "./components/ImageInput/ImageInput";
import { usePlaySubscriptionForm } from "./hooks/usePlaySubscriptionForm";

export interface Props {}

const Subscription: React.FC<Props> = () => {
  const [
    play,
    sessions,
    onChangeHandler,
    onChangeImageHandler,
    onChangeSessionHandler,
    addSessionHandler,
  ] = usePlaySubscriptionForm();

  return (
    <PageContainer style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <H3>Inscrever Espetáculo no Festival</H3>
        <form>
          <LabeledInput
            id="name"
            type="text"
            placeholder="Nome do espetáculo"
            value={play.name}
            onChange={onChangeHandler}
          />
          <LabeledInput
            id="group"
            type="text"
            placeholder="Grupo (se houver)"
            value={play.group}
            onChange={onChangeHandler}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <LabeledInput
              id="year"
              type="number"
              placeholder="Ano de criação do espetáculo"
              value={play.year}
              onChange={onChangeHandler}
            />
            <Select
              id="state"
              label="Estado"
              options={states}
              onChange={onChangeHandler}
            />
          </div>

          <LabeledInput
            id="about"
            type="textarea"
            placeholder="Sobre o espetáculo"
            value={play.about}
            onChange={onChangeHandler}
          />

          <LabeledInput
            id="crew"
            type="textarea"
            placeholder="Ficha técnica"
            value={play.crew}
            onChange={onChangeHandler}
          />

          <LabeledInput
            id="teaser"
            type="text"
            placeholder="Link com teaser do espetáculo"
            value={play.teaser}
            onChange={onChangeHandler}
          />

          <ImageInput
            image={play.poster}
            onChange={onChangeImageHandler}
            placeholderCaption="Legenda para o poster (para acessibilidade)"
            placeholderImage="Link para imagem com poster do espetáculo"
          />

          <Sessions>
            {sessions.map(([index, session]: [number, Session]) => (
              <SessionInputs
                key={index}
                index={index}
                session={session}
                onChange={onChangeSessionHandler}
              />
            ))}
            <AddButton onClick={addSessionHandler}>Adicionar nova sessão</AddButton>
          </Sessions>
        </form>
      </Container>
    </PageContainer>
  );
};

export default Subscription;
