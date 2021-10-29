import React, { ChangeEventHandler } from "react";

import { CustomSelect, Label } from "./styles";

import { FormField } from "../styles";

export interface PropsSelect {
  id: string;
  selected?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options: { key: any; value: string }[];
  label: string;
}

const Select: React.FC<PropsSelect> = ({ id, options, label, selected, onChange }) => {
  return (
    <FormField
      style={{
        borderBottomWidth: "2px",
        borderBottomColor: "var(--light-gray",
        borderBottomStyle: "solid",
      }}
    >
      <Label htmlFor={id}>{label}</Label>
      <CustomSelect id={id} name={id} defaultValue={selected} onChange={onChange}>
        {options.map((option: { key: any; value: string }) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </CustomSelect>
    </FormField>
  );
};

export default Select;
