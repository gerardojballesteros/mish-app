import React from 'react';
import ReactDOM from 'react-dom/client';
import { Mish }from './Mish';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './styles/GlobalStyle';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Mish />
    </BrowserRouter>
  </React.StrictMode>
);


