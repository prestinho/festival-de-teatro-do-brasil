import React from "react";

import { Sessions, AddButton, Row, SaveButton } from "./styles";
import { DefaultContainer, PageContainer, H3 } from "../../styles/PageStyles";
import { states } from "../../models/State/states";
import LabeledInput from "../../components/Forms/LabeledInput/LabeledInput";
import Select from "../../components/Forms/Select/Select";
import SessionInputs from "./components/SessionInputs/SessionInputs";
import { Session } from "../../models/Play/Play";
import ImageInput from "../../components/Forms/ImageInput/ImageInput";
import { usePlaySubscriptionForm } from "./hooks/usePlaySubscriptionForm";
import { StyledLoader, LoaderMsg } from "../../components/StyledLoading/StyledLoading";
import { useAuthContext } from "../../hooks/useAuthContext";
import { User } from "@firebase/auth";

export interface Props {}

const Subscription: React.FC<Props> = () => {
  const auth: User | null = useAuthContext();
  const [
    play,
    loading,
    sessions,
    onChangeHandler,
    onChangeImageHandler,
    onChangeSessionHandler,
    addSessionHandler,
    handleSave,
    forceValidation,
  ] = usePlaySubscriptionForm(auth);

  return (
    <StyledLoader
      active={loading}
      text={<LoaderMsg>Enviando inscrição...</LoaderMsg>}
      spinner
    >
      <PageContainer>
        <DefaultContainer>
          <H3>Inscrever Espetáculo no Festival</H3>
          <form autoComplete="off">
            <LabeledInput
              id="name"
              type="text"
              placeholder="Nome do espetáculo"
              value={play.name}
              onChange={onChangeHandler}
              required
              errorMsg={"Eita, o nome ficou em branco."}
              forceValidation={forceValidation}
            />
            <LabeledInput
              id="group"
              type="text"
              placeholder="Grupo (se houver)"
              value={play.group}
              onChange={onChangeHandler}
              forceValidation={forceValidation}
            />

            <Row>
              <LabeledInput
                id="year"
                type="number"
                placeholder="Ano de criação do espetáculo"
                value={play.year}
                onChange={onChangeHandler}
                required
                errorMsg={"O ano ficou errado, bença."}
                min={1950}
                max={2022}
                forceValidation={forceValidation}
              />
              <Select
                id="state"
                label="Estado"
                options={states}
                selected={play.state}
                onChange={onChangeHandler}
              />
            </Row>

            <LabeledInput
              id="phone"
              type="phone"
              placeholder="Telefone da pessoal responsável pela produção"
              required
              value={play.phone}
              onChange={onChangeHandler}
              errorMsg={"É meio old school, mas queria pedir seu telefone :-S"}
              forceValidation={forceValidation}
            />

            <LabeledInput
              id="teaser"
              type="text"
              placeholder="Link com teaser do espetáculo"
              value={play.teaser}
              onChange={onChangeHandler}
              link
              errorMsg={"Deu ruim no formato desse link. Checa se é um link mesmo."}
              forceValidation={forceValidation}
            />

            <ImageInput
              image={play.poster}
              onChange={onChangeImageHandler}
              placeholderCaption="Legenda para o poster (para acessibilidade)"
              errorMsg="Escreve um pouquinho sobre a imagem para quem usa leitor de tela"
              forceValidation={forceValidation}
              maxSize={5}
            />

            <LabeledInput
              id="about"
              type="textarea"
              placeholder="Sobre o espetáculo"
              value={play.about}
              onChange={onChangeHandler}
              required
              errorMsg={
                "De uma adiantada de sobre o que é o espetáculo, to doida para saber :-)"
              }
              forceValidation={forceValidation}
            />

            <LabeledInput
              id="crew"
              type="textarea"
              placeholder="Ficha técnica"
              value={play.crew}
              onChange={onChangeHandler}
              required
              errorMsg={"Faltou a ficha! Pra dar os créditos"}
              forceValidation={forceValidation}
            />

            <Sessions>
              {sessions.map(([index, session]: [number, Session]) => (
                <SessionInputs
                  key={index}
                  index={index}
                  session={session}
                  onChange={onChangeSessionHandler}
                  forceValidation={forceValidation}
                />
              ))}
              <AddButton onClick={addSessionHandler}>Adicionar nova sessão</AddButton>
            </Sessions>

            <SaveButton onClick={handleSave}>Realizar Inscrição</SaveButton>
          </form>
        </DefaultContainer>
      </PageContainer>
    </StyledLoader>
  );
};

export default Subscription;
