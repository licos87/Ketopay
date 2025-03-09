
import { createRoot } from 'react-dom/client';
import { App } from './app/app.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(

    <Provider store={store}>
      <App />
    </Provider>

);
