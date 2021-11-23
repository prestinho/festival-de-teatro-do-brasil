import React, { MouseEvent } from "react";

import { doc, setDoc } from "@firebase/firestore";
import { db, storage } from "../../../../apis/firebase";
import playConverter from "../../../../models/Play/firestoreConverter";
import slugify from "react-slugify";

import { Play } from "../../../../models/Play/Play";
import { isValidLink, waitFor } from "../../../../services/util/util";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";
import { imgPathProvider } from "../../../../services/imgPathProvider/imgPathProvider";
import { useHistory } from "react-router";
import { User } from "@firebase/auth";
import { useAuthContext } from "../../../../hooks/useAuthContext";

import { Container } from "./styles";

export interface Props {
  play: Play;
  setPlay: (arg0: Play) => void;
  setLoading: (arg0: boolean) => void;
  isLoading: boolean;
  setForceValidation: (arg0: boolean) => void;
}

const SaveButton: React.FC<Props> = ({
  play,
  setPlay,
  setLoading,
  isLoading,
  setForceValidation,
}: Props) => {
  const history = useHistory();
  const auth: User | null = useAuthContext();

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
        if (!document.getElementsByClassName("error-ref"))
          throw Error("No error ref found yet");
      };

      waitFor(scrollToError);
      return;
    }

    // everything ok, lets save!
    setLoading(true);

    // not sync with server, but i'll take my chances ;-)
    const id = slugify(play.name + "-" + new Date().getTime());

    // now we first upload our image, then we get its URL and set to a auxiliar play object
    // after that we upload the auxiliar play and if it goes well, we set our original play
    const imageRef = ref(storage, `plays/${id}/poster`);

    const userId = auth?.uid;

    await uploadString(imageRef, play.poster.image, "data_url")
      .then(async (snapshot) => {
        const downloadUrl = imgPathProvider.cleanBasePath(await getDownloadURL(imageRef));
        const playToBeSaved = play;
        playToBeSaved.poster.image = downloadUrl;
        playToBeSaved.userId = userId;
        playToBeSaved.status = "P";

        await setDoc(doc(db, "plays", id).withConverter(playConverter), playToBeSaved);
        setPlay(playToBeSaved);

        history.push({
          pathname: "/inscricao-realizada",
          state: { play: play },
        });
      })
      .catch((reason) => {
        console.error(reason);
        // TODO: treat this error
      })
      .finally(() => setLoading(false));
  };

  return <Container onClick={handleSave}>Realizar Inscrição</Container>;
};

export default SaveButton;
