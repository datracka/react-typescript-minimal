import * as React from "react";
import { render } from "react-dom";

const App = () => <div>hello world</div>;

const rootElement = document.getElementById("root");
render(<App />, rootElement);
