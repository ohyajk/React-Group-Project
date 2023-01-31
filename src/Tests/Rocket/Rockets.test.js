import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/ConfigureStore';
import Rockets from '../../Pages/Rockets';

describe('testing for rockets data', () => {
  it('test for component', () => {
    const test1 = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(test1).toMatchSnapshot();
  });
  test('Check if Rockets Component Renders properly', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(screen.queryByText(/Status/)).toBeNull();
    expect(screen.queryByText(/Description/)).toBeNull();
  });
});
