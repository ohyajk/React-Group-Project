import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/ConfigureStore';
import Rockets from '../../Pages/Rockets';

describe('testing for rockets data', () => {
  it('test for component', () => {
    const test2 = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(test2).toMatchSnapshot();
  });
});
