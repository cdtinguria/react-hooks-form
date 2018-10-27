import React, { useState } from "react";

import TextInput from "./text-input";
import SelectInput from "./select-input";

export default function Form() {
  const [state, setState] = useState({
    salutation: "mr",
    name: "Chetan",
    surname: "Tinguria"
  });

  function handleChange(key, value) {
    setState({
      ...state,
      [key]: value
    });
  }

  return (
    <React.Fragment>
      <SelectInput
        value={state.salutation}
        id="salutation"
        onChange={handleChange}
      />
      <TextInput value={state.name} id="name" onChange={handleChange} />
      <TextInput value={state.surname} id="surname" onChange={handleChange} />
      <input
        type="submit"
        onClick={() =>
          window.alert(
            state.salutation + " " + state.name + " " + state.surname
          )
        }
      />
    </React.Fragment>
  );
}
