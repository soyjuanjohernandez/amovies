import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';

import './app.scss';

const App = () => {
  return (
    <div>
      <Header>
        <Navbar />
        <div>
          <h1>Hello from App wuju</h1>
        </div>
      </Header>

    </div>
  );
};

export default App;
