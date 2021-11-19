import { useCallback, useContext } from "react";
import { PlaysContext } from "../../contexts/PlaysProvider";
import { emptyPlay, Play } from "../../models/Play/Play";

export const usePlaysContext = (): [
  () => Play[],
  (state: string) => Play[],
  (playId: string) => Play
] => {
  const serverPlays: Play[] = useContext(PlaysContext);

  const getAllPlays = useCallback((): Play[] => serverPlays, [serverPlays]);

  const getPlaysByState = useCallback(
    (state: string): Play[] => serverPlays.filter((play) => play.state === state),
    [serverPlays]
  );

  const getPlay = useCallback(
    (playId: string): Play =>
      serverPlays.find((play: Play) => play.id === playId) ?? emptyPlay(),
    [serverPlays]
  );

  return [getAllPlays, getPlaysByState, getPlay];
};
