import React, {
  MouseEvent,
  ChangeEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import LabeledInput from "../../../../components/Forms/LabeledInput/LabeledInput";
import { Place, Session, Time } from "../../../../models/Play/Play";
import { TrashOutline } from "@styled-icons/evaicons-outline/TrashOutline";

import { Container, H5 } from "./styles";

export interface Props {
  index: number;
  session: Session;
  onChange?: (index: number, session: Session | null) => void;
}

const SessionInputs: React.FC<Props> = ({ index, onChange, session }) => {
  const [myTime, setMyTime] = useState<Time>(session.time);
  const [myPlace, setMyPlace] = useState<Place>(session.place);

  // update father whenever internal states changes
  const updateFather = useCallback(() => {
    onChange?.(index, { time: myTime, place: myPlace });
  }, [index, myPlace, myTime, onChange]);

  useEffect(() => {
    updateFather();
  }, [myTime, myPlace, updateFather]);

  const sessionOnChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const name: string[] = e.target.name.split("-");
    if (name[0] === "time") {
      setMyTime((prev: Time) => ({ ...prev, [name[1]]: e.target.value }));
    } else {
      setMyPlace((prev: Place) => ({ ...prev, [name[1]]: e.target.value }));
    }
  };

  const handleDeleteSession = (e: MouseEvent<SVGSVGElement>) => {
    if (index > 0) {
      onChange?.(index, null);
    }
  };

  return (
    <Container>
      <H5>
        {`Sessão ${index + 1}`}{" "}
        {index > 0 && (
          <TrashOutline
            size="1rem"
            title="Remover Sessão"
            style={{ margin: "-3px 0 0 15px", cursor: "pointer", color: "red" }}
            onClick={handleDeleteSession}
          />
        )}{" "}
      </H5>
      <LabeledInput
        id={`session-day-${index}`}
        name="time-day"
        type="date"
        placeholder="Dia"
        style={{ paddingLeft: "4rem" }}
        min="2022-03-25"
        max="2022-03-27"
        value={myTime.day}
        onChange={sessionOnChangeHandler}
      />
      <LabeledInput
        id={`session-hour-${index}`}
        name="time-hour"
        type="time"
        placeholder="Horário"
        style={{ paddingLeft: "4rem" }}
        value={myTime.hour}
        onChange={sessionOnChangeHandler}
      />
      <LabeledInput
        id={`session-place-${index}`}
        name="place-name"
        type="input"
        placeholder="Local"
        value={myPlace.name}
        onChange={sessionOnChangeHandler}
      />
      <LabeledInput
        id={`session-address-${index}`}
        name="place-address"
        type="input"
        placeholder="Endereço"
        value={myPlace.address}
        onChange={sessionOnChangeHandler}
      />
    </Container>
  );
};

export default memo(SessionInputs);
