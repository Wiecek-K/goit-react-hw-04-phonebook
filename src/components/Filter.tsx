import React from "react";

import css from "./Filter.module.css";

interface FilterProps {
  onInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Filter = ({ onInputChange }: FilterProps) => (
  <>
    <p>Find contact by name</p>
    <input
      className={css.input}
      type="text"
      name="filter"
      onChange={onInputChange}
    />
  </>
);
