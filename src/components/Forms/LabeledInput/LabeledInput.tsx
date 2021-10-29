import React, { ChangeEvent } from "react";

import { CustomInput, FloatingLabel, FloatingLabelText, TextArea } from "./styles";

import { FormField } from "../styles";

export interface PropsLabeledInput {
  id: string;
  name?: string;
  placeholder: string;
  type: string;
  value?: any;
  rows?: number;
  cols?: number;
  style?: any;
  min?: any;
  max?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => any;
  testId?: string;
}
const LabeledInput: React.FC<PropsLabeledInput> = ({
  id,
  name,
  placeholder,
  type,
  value,
  rows,
  cols,
  style,
  min,
  max,
  onChange,
  testId,
}) => {
  return (
    <FormField>
      <FloatingLabel>
        {type === "textarea" ? (
          <TextArea
            id={id}
            name={name || id}
            required
            rows={rows}
            cols={cols}
            style={style}
            value={value}
            onChange={onChange}
            data-testid={testId}
          />
        ) : (
          <CustomInput
            id={id}
            name={name || id}
            type={type}
            required
            style={style}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            data-testid={testId}
          />
        )}
        <FloatingLabelText>{placeholder}</FloatingLabelText>
      </FloatingLabel>
    </FormField>
  );
};

export default LabeledInput;
