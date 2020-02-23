import React from 'react';
import { useReacti18n } from 'reacti18n-translate';

import ENsvg from './323310.svg';
import ESsvg from './323365.svg';

const App = () => {
  const { translate, dispatch } = useReacti18n();
  return (
    <div className={'wrapper'}>
      <h1>
        <span aria-label={'globe'} role={'img'}>
          🌎
        </span>
        Reacti18n-translate is a wrapper for your React application that
        simplifies internationalization and localization using React Context and
        React Hooks.{' '}
        <span aria-label={'globe'} role={'img'}>
          🌎
        </span>
      </h1>
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'en' })}
      >
        {' '}
        <img src={ENsvg} alt={'EN'} width={25} />
      </span>
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'es' })}
      >
        {' '}
        <img src={ESsvg} alt={'ES'} width={25} />
      </span>
      <p>
        <small>Click a button to translate the text.</small>
      </p>
      <h3>Single word:</h3>
      <p>
        This is an{' '}
        <strong>
          <em>{translate('example')}</em>
        </strong>{' '}
        of reacti18n-translate in action.
      </p>
      <small style={{ display: 'flex' }}>
        <pre style={{ borderRight: '1px solid #fff', padding: '0 1rem' }}>
          <p>// en.json</p>
          {JSON.stringify(
            {
              example: 'example'
            },
            null,
            2
          )}
        </pre>
        <pre style={{ padding: '0 1rem' }}>
          <p>// es.json</p>
          {JSON.stringify(
            {
              example: 'ejemplo'
            },
            null,
            2
          )}
        </pre>
      </small>
      <hr />
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'en' })}
      >
        {' '}
        <img src={ENsvg} alt={'EN'} width={25} />
      </span>
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'es' })}
      >
        {' '}
        <img src={ESsvg} alt={'ES'} width={25} />
      </span>
      <p>
        <small>Click a button to translate the text.</small>
      </p>
      <h3>Entire sentence:</h3>
      <p>{translate('short_desc')}</p>
      <small style={{ display: 'flex' }}>
        <pre style={{ borderRight: '1px solid #fff', padding: '0 1rem' }}>
          <p>// en.json</p>
          {JSON.stringify(
            {
              short_desc:
                'I can give you some examples of methods that have worked for me.'
            },
            null,
            2
          )}
        </pre>
        <pre style={{ padding: '0 1rem' }}>
          <p>// es.json</p>
          {JSON.stringify(
            {
              short_desc:
                'Puedo darte ejemplos de los métodos que me han dado resultado.'
            },
            null,
            2
          )}
        </pre>
      </small>
      <hr />
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'en' })}
      >
        {' '}
        <img src={ENsvg} alt={'EN'} width={25} />
      </span>
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'es' })}
      >
        {' '}
        <img src={ESsvg} alt={'ES'} width={25} />
      </span>
      <p>
        <small>Click a button to translate the text.</small>
      </p>
      <h3>CTA:</h3>
      <button>{translate('learn_more')}</button>
      <small style={{ display: 'flex' }}>
        <pre style={{ borderRight: '1px solid #fff', padding: '0 1rem' }}>
          <p>// en.json</p>
          {JSON.stringify(
            {
              learn_more: 'Learn More'
            },
            null,
            2
          )}
        </pre>
        <pre style={{ padding: '0 1rem' }}>
          <p>// es.json</p>
          {JSON.stringify(
            {
              learn_more: 'Aprende Más'
            },
            null,
            2
          )}
        </pre>
      </small>
      <hr />
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'en' })}
      >
        {' '}
        <img src={ENsvg} alt={'EN'} width={25} />
      </span>
      <span
        className={'flag'}
        onClick={() => dispatch({ type: 'setLanguage', payload: 'es' })}
      >
        {' '}
        <img src={ESsvg} alt={'ES'} width={25} />
      </span>
      <p>
        <small>Click a button to translate the text.</small>
      </p>
      <h3>Support for nested translations: </h3>
      <button>{translate('common.form.submit')}</button>
      <small style={{ display: 'flex' }}>
        <pre style={{ borderRight: '1px solid #fff', padding: '0 1rem' }}>
          <p>// en.json</p>
          {JSON.stringify(
            {
              common: {
                form: {
                  submit: 'Submit'
                }
              }
            },
            null,
            2
          )}
        </pre>
        <pre style={{ padding: '0 1rem' }}>
          <p>// es.json</p>
          {JSON.stringify(
            {
              common: {
                form: {
                  submit: 'Enviar'
                }
              }
            },
            null,
            2
          )}
        </pre>
      </small>
    </div>
  );
};

export default App;
