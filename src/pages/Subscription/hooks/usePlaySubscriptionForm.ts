import { doc, setDoc } from "@firebase/firestore";
import {
  ChangeEvent,
  MouseEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { db, storage } from "../../../apis/firebase";
import playConverter from "../../../models/Play/firestoreConverter";
import slugify from "react-slugify";

import {
  emptyImage,
  emptyPlay,
  emptySession,
  Image,
  Play,
  Session,
} from "../../../models/Play/Play";
import { isValidLink, waitFor } from "../../../services/util";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { imgPathProvider } from "../../../services/imgPathProvider";

export const usePlaySubscriptionForm = (
  pageRef: any
): [
  Play,
  boolean,
  [number, Session][],
  (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => void,
  (image: Image) => void,
  (index: number, session: Session | null) => void,
  (e: MouseEvent<HTMLAnchorElement>) => void,
  (e: MouseEvent<HTMLButtonElement>) => void,
  boolean
] => {
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

  //<input ref={input => input && input.focus()}/>
  const isPlayInvalid = () => {
    return (
      play.name === "" ||
      play.year === "" ||
      play.about === "" ||
      play.crew === "" ||
      play.poster.image === "" ||
      play.poster.caption === "" ||
      play.sessions[0].time.day === "" ||
      play.sessions[0].time.hour === "" ||
      play.sessions[0].place.address === "" ||
      (play.teaser && !isValidLink(play.teaser))
    );
  };

  const handleSave = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setForceValidation(false);
    if (isLoading) return;

    // validate form
    setForceValidation(true);

    // validate play object
    if (isPlayInvalid()) {
      const scrollToError = () => {
        document
          .getElementsByClassName("error-ref")?.[0]
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        if (!document.getElementsByClassName("error-ref")) throw "not yet";
      };

      waitFor(scrollToError);
      //getAttribute('ref')?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      // window.scrollTo({
      //   top: document.getElementsByClassName("error-msg")?.[0]?.getBoundingClientRect()
      //     .top,
      //   behavior: "smooth",
      // });
      return;
    }

    // everything ok, lets save!
    setLoading(true);

    // not sync with server, but i'll take my chances ;-)
    const id = slugify(play.name + "-" + new Date().getTime());

    // now we first upload our image, then we get its URL and set to a auxiliar play object
    // after that we upload the auxiliar play and if it goes well, we set our original play
    const imageRef = ref(storage, `plays/${id}/poster`);

    await uploadString(imageRef, play.poster.image, "data_url")
      .then(async (snapshot) => {
        const downloadUrl = imgPathProvider.cleanBasePath(await getDownloadURL(imageRef));
        const playToBeSaved = play;
        playToBeSaved.poster.image = downloadUrl;

        await setDoc(doc(db, "plays", id).withConverter(playConverter), playToBeSaved);
        setPlay(playToBeSaved);
      })
      .catch((reason) => {
        console.error(reason);
        // TODO: treat this error
      })
      .finally(() => setLoading(false));
  };

  return [
    play,
    isLoading,
    sessions,
    onChangeHandler,
    onChangeImageHandler,
    onChangeSessionHandler,
    addSessionHandler,
    handleSave,
    forceValidation,
  ];
};
