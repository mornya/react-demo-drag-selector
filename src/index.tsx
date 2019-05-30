import ReduxThunk from 'redux-thunk';
import { Ignite } from '@mornya/react-helper';
import reducers from './reducers';

declare var module: Ignite.IHotNodeModule;

const option: Ignite.IOption = {
  application: {
    component: () => import('./App'),
    rootElementId: 'app',
    onHotReload: next => module.hot && module.hot.accept('./App', next),
  },
  store: {
    middlewares: [ReduxThunk],
    reducers,
    initialState: {},
  },
};

Ignite.init(option);
