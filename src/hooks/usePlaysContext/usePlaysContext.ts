import { useContext } from "react";
import { PlaysContext } from "../../contexts/PlaysProvider";
import { emptyPlay, Play } from "../../models/Play/Play";

export const usePlaysContext = (): [
  () => Play[],
  (state: string) => Play[],
  (playId: string) => Play
] => {
  const serverPlays: Play[] = useContext(PlaysContext);

  const getAllPlays = (): Play[] => serverPlays;

  const getPlaysByState = (state: string): Play[] =>
    serverPlays.filter((play) => play.state === state);

  const getPlay = (playId: string): Play =>
    serverPlays.find((play: Play) => play.id === playId) ?? emptyPlay();

  return [getAllPlays, getPlaysByState, getPlay];
};
