import { useCallback, useContext } from "react";
import { PlaysContext } from "../../contexts/PlaysProvider";
import { Filters } from "../../models/Filters/Filters";
import { emptyPlay, Play } from "../../models/Play/Play";

export const usePlaysContext = (): [
  () => Play[],
  (filters: Filters) => Play[],
  (playId: string) => Play,
  (userId: string | undefined | null) => Play[],
  (filters: Filters, status: string[]) => Play[]
] => {
  const serverPlays: Play[] = useContext(PlaysContext);

  const getAllPlays = useCallback((): Play[] => serverPlays, [serverPlays]);

  const getPlays = useCallback(
    (filters: Filters): Play[] => {
      let result: Play[] = serverPlays;
      if (filters.state) result = result.filter((play) => play.state === filters.state);

      if (filters.date)
        result = result.filter((play) =>
          play.sessions.map((session) => session.time.day).includes(filters.date)
        );

      return result;
    },
    [serverPlays]
  );

  const getPlay = useCallback(
    (playId: string): Play =>
      serverPlays.find((play: Play) => play.id === playId) ?? emptyPlay(),
    [serverPlays]
  );

  const getPlaysByUserId = useCallback(
    (userId: string | undefined | null): Play[] =>
      serverPlays.filter((play) => play.userId === userId),
    [serverPlays]
  );

  const getPlaysWithStatus = useCallback(
    (filters: Filters, status: string[]): Play[] => {
      let result: Play[] = getPlays(filters);
      result = result.filter((play) => status.includes(play.status));
      return result;
    },
    [getPlays]
  );

  return [getAllPlays, getPlays, getPlay, getPlaysByUserId, getPlaysWithStatus];
};
