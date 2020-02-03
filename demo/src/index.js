import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ReactTranslateProvider } from "../../src";
import translations from "./i18n";

const Demo = () => (
  <ReactTranslateProvider translations={translations} defaultLanguage="en">
    <App />
  </ReactTranslateProvider>
);

ReactDOM.render(<Demo />, document.querySelector("#demo"));
