import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';

describe('App Test', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    if (div) {
      ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App/>
        </BrowserRouter>,
        div,
      );
      ReactDOM.unmountComponentAtNode(div);
    }

    expect(div).not.toBeNull();
  });

});
