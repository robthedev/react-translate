# react-i18n

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

[build-badge]: https://travis-ci.org/robthedev/react-translate.svg?branch=master
[build]: https://travis-ci.org/robthedev/react-translate
[npm-badge]: https://img.shields.io/npm/v/react-notepad.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-notepad
[coveralls-badge]: https://coveralls.io/github/robthedev/react-translate/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/robthedev/react-translate?branch=master

# react-i18n is a wrapper for your react application that simplifies internationalization.

### Follow the step-by-step instructions below:

1. Create a directory for your translations (it's common practice to name this directory i18n)

   1. Create a .json file for each supported lanuage ( i.e. en.json, en-US.json).
   2. Create an index.js file inside this directory to export your supported languages as a JavaScript object.

   ```javascript
   // index.js file
   import EN from "./en.json";
   import ES from "./es.json";
   import DE from "./de.json";

   const translations = {
     en: EN,
     es: ES,
     de: DE
   };
   export default translations;
   ```

   3. Wrap your appliction with **ReactTranslateProvider**, while also providing a default language, and your translations. The defaultLanguage prop is optional, 'en' will be used if defaultLanguage is not provided.

   ```javascript
   // In your application file
   import React from "react";
   import { Reacti18nProvider } from "reacti18n-translate";
   import translations from "./i18n";

   <Reacti18nProvider translations={translations} defaultLanguage="en">
     <App />
   </Reacti18nProvider>;
   ```

2. react-i18n provides a **translate** function to use when translating content. Pass in a string that represents the key from your translation file. Current support is for objects with a maximum depth level of 3.

```json
// In your translation file en.json
{
  "example": "example",
  "common": {
    "nested_example": "nested example"
  }
}
```

```javascript
// In your component file
import React, { useContext } from "react";
import { Reacti18nContext } from "reacti18n-translate";

const ExampleComponent = () => {
    const { translate } = useContext(Reacti18nContext);
    return (
        <div>
            <p>Translated content: {translate('example')}</p>
            <p>Translated content: {translate('common.nested_example')}</p>
        </div>
    );
};
...
```

3. react-i18n also provides a **dispatch** function to set the language you want to use. It accepts a type _'setLanguage'_, and a payload which represents the desired language code.

```javascript
// In your component file
import React, { useContext } from "react";
import { Reacti18nContext } from "reacti18n-translate";
const ExampleComponent = () => {
    const { dispatch } = useContext(Reacti18nContext);

    const handleLanguageChange = e => dispatch({ type: "setLanguage", payload: e.target.value });

    return (
        // Example using a select
       <select onChange={handleLanguageChange}>
        <option value="en"></option>
        <option value="es"></option>
       </select>

       // Example using a button
      <button onClick={() => dispatch({ type: "setLanguage", payload: "en" })}>
        EN
      </button>
        </div>
    );
};
...
```

4. Congratulations! Your react application is now internationalized. :sweat_smile:
