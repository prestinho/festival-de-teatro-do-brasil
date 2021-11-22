import React, { ChangeEvent, useEffect, useState, useCallback } from "react";

import {
  CustomInput,
  FloatingLabel,
  FloatingLabelText,
  TextArea,
  ErrorLabel,
  RefDiv,
} from "./styles";

import { FormField } from "../styles";
import { isValidLink } from "../../../services/util/util";

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
  link?: boolean;
  required?: boolean;
  errorMsg?: string;
  forceValidation?: boolean;
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
  link,
  required,
  errorMsg,
  forceValidation,
}) => {
  const [error, setError] = useState<boolean>(false);

  const validate = useCallback(
    (val: string): boolean => {
      let valid = true;
      const setInvalid = (isInvalid: boolean) => {
        if (isInvalid) valid = false;
      };

      if (required) setInvalid(val === "");
      if (link) setInvalid(val !== "" && !isValidLink(val));

      if (type === "number") {
        if (min) setInvalid(parseInt(val) < min);
        if (max) setInvalid(parseInt(val) > max);
        if (max && max) setInvalid(parseInt(val) < min || parseInt(val) > max);
        if ((min || max) && isNaN(parseInt(val))) setInvalid(true);
      } else if (type === "date") {
        const d = new Date(val);
        if (min) setInvalid(d < new Date(min));
        if (max) setInvalid(d > max);
        if (min && max) setInvalid(d < new Date(min) || d > new Date(max));
        if ((min || max) && isNaN(d.getTime())) setInvalid(true);
      }

      setError(!valid);
      return valid;
    },
    [link, max, min, required, type]
  );

  const validateAndChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    validate(e.target.value);
    onChange?.(e);
  };

  useEffect(() => {
    if (forceValidation) {
      validate(value);
    }
  }, [forceValidation, value, validate]);

  const mask = type === "phone" ? "(99) 9 9999.9999" : "";

  return (
    <FormField>
      {error && <RefDiv className="error-ref" />}
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
            onChange={validateAndChange}
            data-testid={testId ?? id}
            className={error ? "error" : ""}
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
            onChange={validateAndChange}
            mask={mask}
            data-testid={testId ?? id}
            className={error ? "error" : ""}
          />
        )}
        <FloatingLabelText className={error ? "error" : ""}>
          {placeholder}
        </FloatingLabelText>
        {error && <ErrorLabel>{errorMsg}</ErrorLabel>}
      </FloatingLabel>
    </FormField>
  );
};

export default LabeledInput;
