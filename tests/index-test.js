import expect from "expect";
import React, { useContext } from "react";
import { render, unmountComponentAtNode } from "react-dom";

import { ReactTranslateProvider, ReactTranslateContext } from "src/";

const TestApp = () => {
  const { translate, dispatch } = useContext(ReactTranslateContext);
  return (
    <div>
      <p></p>
      <button>EN</button>
      <button>ES</button>
    </div>
  );
};

const Index = () => (
  <ReactTranslateProvider translations={translations} defaultLanguage="en">
    <TestApp />
  </ReactTranslateProvider>
);

describe("TestApp", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it("", () => {});
});
