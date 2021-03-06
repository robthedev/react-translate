[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]

[build-badge]: https://travis-ci.org/robthedev/react-translate.svg?branch=master
[build]: https://travis-ci.org/robthedev/react-translate
[npm-badge]: https://img.shields.io/npm/v/reacti18n-translate.png?style=flat-square
[npm]: https://www.npmjs.com/package/reacti18n-translate
[coveralls-badge]: https://coveralls.io/github/robthedev/react-translate/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/robthedev/react-translate?branch=master

## Reacti18n-translate is a wrapper for your react application that simplifies internationalization.

### Follow the step-by-step instructions below:

#### Install

```bash
npm i reacti18n-translate
# or
yarn add reacti18n-translate
```

#### CDN

```javascript
<script src="https://unpkg.com/reacti18n-translate/umd/reacti18n-translate.js"></script>
```

In your src directory, create another directory for your translations

1.  Create a .json file for each supported lanuage in this directory ( i.e. en.json, es.json).
2.  Create an index.js file inside this directory to export your supported languages as a JavaScript object.

```javascript
// index.js file
import EN from './en.json';
import ES from './es.json';
import DE from './de.json';

const translations = {
  en: EN,
  es: ES,
  de: DE
};

export default translations;
```

Wrap your appliction with **Reacti18nProvider**, while also providing a default language, and your translations. The defaultLanguage prop is optional, 'en' will be used if defaultLanguage is not provided.

```javascript
// In your application file
import React from 'react';
import { Reacti18nProvider } from 'reacti18n-translate';
// Import your translations
import translations from './i18n';

<Reacti18nProvider translations={translations} defaultLanguage="en">
  <App />
</Reacti18nProvider>;
```

React-i18n-translate provides a **_translate_** function that you can destructure from **_useReacti18n_** to use when translating content. Pass in a string that represents the key from your translation file. Current support is for objects with a maximum depth level of 3.

```json
// In your translation file en.json
{
  "example": "example",
  "common": {
    "form": {
      "submit": "submit"
    }
  }
}
```

```javascript
// In your component file
import React from "react";
import { useReacti18n } from "reacti18n-translate";

const ExampleComponent = () => {
    const { translate } = useReacti18n();
    return (
        <div>
            <p>Translated content: {translate('example')}</p>
            <p>Translated content: {translate('common.form.submit')}</p>
        </div>
    );
};
...
```

React-i18n-translate also provides a **_dispatch_** function that you can destructure (as the second argument if also using translate) from **_useReacti18n_** to set the language you want to use. It accepts a type _'setLanguage'_, and a payload which represents the desired language code.

```javascript
// In your component file
import React from "react";
import { useReacti18n } from "reacti18n-translate";
const ExampleComponent = () => {
    const { translate, dispatch } = useReacti18n();

    const handleLanguageChange = e =>
    dispatch({ type: "setLanguage", payload: e.target.value  });

    return (
        // Example using a select
       <select onChange={handleLanguageChange}>
        <option value="en"></option>
        <option value="es"></option>
       </select>

       // Example using a button
    <button onClick={() => dispatch({ type: "setLanguage" payload: "en" })}>
        EN
      </button>
        </div>
    );
};
...
```

Congratulations! Your react application is now internationalized. :sweat_smile:
