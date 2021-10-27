import React, { ChangeEventHandler, memo } from "react";

import { Container, LabeledRadio, Radio } from "./styles";

export interface Props {
  states: {key: any, value: string}[],
  checked: string,
  handleChange : ChangeEventHandler
}

const StateFilter: React.FC<Props> = ({ states, checked, handleChange }) => {
  return (
    <Container>
      {states.map((state: {key: any, value: string}) => (
        <LabeledRadio key={state.key}>
          <Radio
            type="radio"
            id={state.key}
            name="state"
            value={state.value}
            checked={checked === state.value}
            onChange={handleChange}
          />
          <label key={state.key} htmlFor={state.key}>
            {state.value}
          </label>
        </LabeledRadio>
      ))}
    </Container>
  );
};

export default memo(StateFilter);
