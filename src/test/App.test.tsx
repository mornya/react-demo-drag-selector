import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReduxMockStore } from '@mornya/react-helper';
import App from '../App';

// Redux 미들웨어 설정 및 초기 상태 등을 설정
const store = ReduxMockStore.create();

describe('App Test', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    if (div) {
      ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App/>
          </BrowserRouter>
        </Provider>,
        div,
      );
      ReactDOM.unmountComponentAtNode(div);
    }

    expect(div).not.toBeNull();
  });

});
