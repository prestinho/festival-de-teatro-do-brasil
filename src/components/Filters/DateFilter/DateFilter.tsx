import React, { ChangeEventHandler, memo } from "react";

import { Container, LabeledRadio, Radio } from "../styles";

export interface Props {
  dates: { key: any; value: string }[];
  checked: string;
  handleChange: ChangeEventHandler;
}

const DateFilter: React.FC<Props> = ({ dates, checked, handleChange }) => {
  return (
    <Container>
      <LabeledRadio>
        <Radio
          type="radio"
          id="all-date"
          name="date"
          value={""}
          checked={checked === ""}
          onChange={handleChange}
        />
        <label htmlFor="all-date">TODOS</label>
      </LabeledRadio>
      {dates.map((date: { key: any; value: string }) => (
        <LabeledRadio key={date.key}>
          <Radio
            type="radio"
            id={date.key}
            name="date"
            value={date.key}
            checked={checked === date.key}
            onChange={handleChange}
          />
          <label key={date.key} htmlFor={date.key}>
            {date.value}
          </label>
        </LabeledRadio>
      ))}
    </Container>
  );
};

export default memo(DateFilter);
