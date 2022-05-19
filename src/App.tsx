import React, { FC, Fragment, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
      <Routes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
