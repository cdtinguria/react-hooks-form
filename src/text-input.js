import React, { useState } from "react";

export default function TextInput(props) {
  function handleChange(e) {
    props.onChange(props.id, e.target.value);
  }

  return <input value={props.value} onChange={handleChange} />;
}
