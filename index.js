import React from "react";
import { render } from "react-dom";

import Form from './src/form';

const Hello = ({ name }) => <h1>Hello, {name}</h1>;

render(<Form />, document.getElementById("root"));
