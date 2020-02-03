import React, { createContext, useReducer } from "react";

export const Reacti18nContext = createContext();

export const Reacti18nProvider = ({
  children,
  translations,
  defaultLanguage
}) => {
  const language = defaultLanguage || "en";

  const getTranslateCode = languageCode => key => {
    const languagekey = translations[languageCode];
    const [...keys] = key.split(".");
    switch ([...keys].length) {
      case 3:
        return languagekey[keys[0]][keys[1]][keys[2]];
      case 2:
        return languagekey[keys[0]][keys[1]];
      default:
        return languagekey[key] || key;
    }
  };

  const initialState = {
    languageCode: language,
    translate: getTranslateCode(language)
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "setLanguage":
        return {
          ...state,
          languageCode: payload,
          translate: getTranslateCode(payload)
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Reacti18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </Reacti18nContext.Provider>
  );
};
