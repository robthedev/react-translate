# React-Translate

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[build-badge]: https://travis-ci.org/robthedev/react-translate.svg?branch=master
[build]: https://travis-ci.org/robthedev/react-translate

[npm-badge]: https://img.shields.io/npm/v/react-notepad.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-notepad
[coveralls-badge]: https://coveralls.io/repos/github/robthedev/react-notepad/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/robthedev/react-notepad?branch=master

# React-Translate is a wrapper for your react application that simplifies internationalization.

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
   import translations from "./i18n";

   <ReactTranslateProvider translations={translations} defaultLanguage="en">
     <App />
   </ReactTranslateProvider>;
   ```

2. React-Translate provides a **translate** function to use when translating content. Pass in a string that represents the key from your translation file. Current support is for objects with a maximum depth level of 3.

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
import { ReactTranslateContext } from "react-tranlate";

const ExampleComponent = () => {
    const { translate } = useContext(ReactTranslateContext);
    return (
        <div>
            <p>Translated content: {translate('example')}</p>
            <p>Translated content: {translate('common.nested_example')}</p>
        </div>
    );
};
...
```

3. React-Translate also provides a **dispatch** function to set the language you want to use. It accepts a type _'setLanguage'_, and a payload which represents the desired language code.

```javascript
// In your component file
import React, { useContext } from "react";
const ExampleComponent = () => {
    const { dispatch } = useContext(ReactTranslateContext);

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

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
