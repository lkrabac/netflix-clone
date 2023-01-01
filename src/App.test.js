import React from 'react';
import App from './App';
import { Footer, Header } from './page-components';
import { Homepage } from './pages';

test('App rendered', () => {
  <App />
});

test("Header rendered", () => {
  <Header />;
});

test("Footer rendered", () => {
  <Footer />;
});

test("Homepage rendered", () => {
  <Homepage />;
});
