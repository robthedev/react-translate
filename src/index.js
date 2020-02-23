import React, { createContext, useReducer, useContext } from 'react';
import { PropTypes } from 'prop-types';

export const Reacti18nContext = createContext();

/**
 * @function Reacti18nProvider
 *
 * @param {object} {
 *   {JSX.Element} children,
 *   {object} translations,
 *   {string} defaultLanguage
 * }
 * @returns {JSX.Element} Provider component
 */
export const Reacti18nProvider = ({
  children,
  translations,
  defaultLanguage
}) => {
  const language = defaultLanguage || 'en';

  const getTranslateCode = languageCode => key => {
    const languagekey = translations[languageCode];
    const [...keys] = key.split('.');
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
      case 'setLanguage':
        return {
          ...state,
          languageCode: payload,
          translate: getTranslateCode(payload)
        };
      default:
        return { ...initialState };
    }
  };
  // create state and dispatch that will be used within the provider
  const [state, dispatch] = useReducer(reducer, initialState);
  // Return a Provider component with the { ...state, dispatch } as the value
  return (
    <Reacti18nContext.Provider value={{ ...state, dispatch }}>
      {children}
    </Reacti18nContext.Provider>
  );
};

/**
 * @function useReacti18n
 * @returns {object} Reacti18nContext value of {translate, dispatch}
 *
 */
export const useReacti18n = () => {
  // useContext is a hook that returns the context value
  // In this case, the context value is { c-  , dispatch } for this context
  const context = useContext(Reacti18nContext);
  if (!context)
    // throw an error if the context doesn't exist -- means we aren't in a provider
    throw new Error('useReacti18n must be used within a Reacti18nProvider');
  return context;
};

Reacti18nProvider.propTypes = {
  children: PropTypes.element.isRequired,
  translations: PropTypes.object.isRequired,
  defaultLanguage: PropTypes.string
};
