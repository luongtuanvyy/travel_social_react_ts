import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { store } from './app/store.ts';
import './index.css';
import { InitFlowbiteProvider } from './utils/FlowbiteInitAction.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <InitFlowbiteProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </InitFlowbiteProvider>
    </BrowserRouter>
  // </React.StrictMode>, 
);
