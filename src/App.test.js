import React from 'react';
import App from './App';
import { Footer, Header } from './page-components';
import { Homepage } from './pages';
import { Banner } from './pages/homepage/Banner';

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
  <Banner />;
  <Homepage />;
});
