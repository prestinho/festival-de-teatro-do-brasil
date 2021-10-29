import { ChangeEvent, MouseEvent, useCallback, useEffect, useState } from "react";
import {
  emptyImage,
  emptyPlay,
  emptySession,
  Image,
  Play,
  Session,
} from "../../../models/Play/Play";

export const usePlaySubscriptionForm = (): [
  Play,
  [number, Session][],
  (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => void,
  (image: Image) => void,
  (index: number, session: Session | null) => void,
  (e: MouseEvent<HTMLAnchorElement>) => void
] => {
  const [play, setPlay] = useState<Play>(emptyPlay());
  const [poster, setPoster] = useState<Image>(emptyImage());
  const [sessions, setSessions] = useState<[number, Session][]>([[0, emptySession()]]);

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

  return [
    play,
    sessions,
    onChangeHandler,
    onChangeImageHandler,
    onChangeSessionHandler,
    addSessionHandler,
  ];
};
