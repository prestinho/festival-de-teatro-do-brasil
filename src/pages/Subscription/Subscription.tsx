import React, { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from "react";

import {
  emptyImage,
  emptyPlay,
  emptySession,
  Image,
  Play,
  Session,
} from "../../models/Play/Play";

import { Sessions, AddButton, Row } from "./styles";
import { DefaultContainer, PageContainer, H3 } from "../../styles/PageStyles";
import { states } from "../../models/State/states";
import LabeledInput from "../../components/Forms/LabeledInput/LabeledInput";
import Select from "../../components/Forms/Select/Select";
import SessionInputs from "./components/SessionInputs/SessionInputs";

import ImageInput from "../../components/Forms/ImageInput/ImageInput";
import { StyledLoader, LoaderMsg } from "../../components/StyledLoading/StyledLoading";

import SaveButton from "./components/SaveButton/SaveButton";

export interface Props {}

const Subscription: React.FC<Props> = () => {
  const [play, setPlay] = useState<Play>(emptyPlay());
  const [poster, setPoster] = useState<Image>(emptyImage());
  const [sessions, setSessions] = useState<[number, Session][]>([[0, emptySession()]]);

  const [isLoading, setLoading] = useState<boolean>(false);
  const [forceValidation, setForceValidation] = useState<boolean>(false);

  useEffect(() => {
    setPlay((prev: Play) => ({
      ...prev,
      sessions: sessions.map(([i, s]: [number, Session]) => s),
    }));
  }, [sessions]);

  useEffect(() => {
    setPlay((prev: Play) => ({
      ...prev,
      poster: poster,
    }));
  }, [poster]);

  const onChangeHandler = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();
    setPlay((prev: Play) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeImageHandler = useCallback((image: Image) => {
    setPoster(image);
  }, []);

  const onChangeSessionHandler = useCallback((index: number, session: Session | null) => {
    if (session) {
      // update
      setSessions((prev) =>
        prev.map(([i, prevSession]: [number, Session]) => [
          i,
          i === index ? session : prevSession,
        ])
      );
    } else {
      // delete
      setSessions((prev) =>
        prev.filter(([i, prevSession]: [number, Session]) => i !== index)
      );
    }
  }, []);

  const addSessionHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const last: [number, Session] | undefined = sessions.at(-1);
    const index = (last && last[0] + 1) || 0;

    setSessions((prev: [number, Session][]) => [...prev, [index, emptySession()]]);
  };

  return (
    <StyledLoader
      active={isLoading}
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

            <SaveButton
              play={play}
              setPlay={setPlay}
              setLoading={setLoading}
              isLoading={isLoading}
              setForceValidation={setForceValidation}
            />
          </form>
        </DefaultContainer>
      </PageContainer>
    </StyledLoader>
  );
};

export default Subscription;
