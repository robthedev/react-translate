import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Reacti18nProvider } from "../../src";
import translations from "./i18n";

const Demo = () => (
  <Reacti18nProvider translations={translations} defaultLanguage="en">
    <App />
  </Reacti18nProvider>
);

ReactDOM.render(<Demo />, document.querySelector("#demo"));
