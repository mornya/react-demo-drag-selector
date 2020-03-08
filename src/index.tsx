import { Ignite } from '@mornya/react-helper';

declare var module: Ignite.IHotNodeModule;

const option: Ignite.IOption = {
  application: {
    component: () => import('./App'),
    rootElementId: 'app',
    onHotReload: next => module.hot && module.hot.accept('./App', next),
  },
  router: {
    isUseBrowserRouter: true,
    basename: process.env.PUBLIC_URL,
  },
  serviceWorker: {
    isUse: process.env.NODE_ENV === 'production',
    config: {
      url: './',
      file: 'service-worker.js',
    },
  },
};

Ignite.init(option);
