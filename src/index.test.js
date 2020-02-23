import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { Reacti18nProvider, useReacti18n } from './index';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

// a functional component that calls for our tests
const Component = () => {
  useReacti18n();
  return <div />;
};

describe('Reacti18nProvider', () => {
  test('useReacti18n should throw an error when not wrapped in useReacti18n', () => {
    expect(() => {
      shallow(<Component />);
    }).toThrow('useReacti18n must be used within a Reacti18nProvider');
  });
  test('useReacti18n should not throw an error when wrapped in useReacti18n', () => {
    const translations = {};
    expect(() => {
      shallow(
        <Reacti18nProvider translations={translations}>
          <Component />
        </Reacti18nProvider>
      );
    }).not.toThrow();
  });
});

describe('useReacti18n', () => {
  const EN = { example: 'ejemplo' };
  const translations = {
    es: EN
  };
  const TestComponent = () => {
    const { translate } = useReacti18n();
    return <div>{translate('example')}</div>;
  };
  const wrapper = mount(
    <Reacti18nProvider translations={translations} defaultLanguage={'es'}>
      <TestComponent />
    </Reacti18nProvider>
  );
  test('it should translate text correctly based on a given key', () => {
    expect(wrapper.text()).toBe('ejemplo');
  });
});
