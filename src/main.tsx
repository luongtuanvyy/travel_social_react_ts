import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { InitFlowbiteProvider } from './utils/FlowbiteInitAction.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <InitFlowbiteProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </InitFlowbiteProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
