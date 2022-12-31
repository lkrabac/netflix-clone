import React from 'react';

import {Routes,Route} from 'react-router-dom';

import { Header, Footer } from './page-components';
import { Homepage } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;