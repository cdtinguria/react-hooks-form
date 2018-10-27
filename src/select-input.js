import React, { useState } from "react";

export default function SelectInput(props) {
  function handleChange(e) {
    props.onChange(props.id, e.target.value);
  }

  return (
    <select value={props.value} onChange={handleChange}>
      <option value="mr">Mr.</option>
      <option value="mrs">Mrs.</option>
    </select>
  );
}
