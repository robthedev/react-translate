import React, { useContext } from "react";
import "./App.css";

import { Reacti18nContext } from "../../src";

const App = () => {
  const { translate, dispatch } = useContext(Reacti18nContext);
  return (
    <div className="wrapper">
      <h1>
        A react-translate demo based on create react app, using the context and
        hooks APIs.
      </h1>
      <p>Click a button to translate 'TEST'</p>
      <button onClick={() => dispatch({ type: "setLanguage", payload: "es" })}>
        ES
      </button>
      <button onClick={() => dispatch({ type: "setLanguage", payload: "en" })}>
        EN
      </button>
      <p>
        Translate me: <strong>{translate("")}</strong>
      </p>
      <p>
        Translate me: <strong>{translate("testt")}</strong>
      </p>
      <p>
        Translate me: <strong>{translate("test")}</strong>
      </p>
      <p>
        Translate me: <strong>{translate("common.test")}</strong>
      </p>
      <p>
        Translate me: <strong>{translate("common.nested.test")}</strong>
      </p>
    </div>
  );
};

export default App;
