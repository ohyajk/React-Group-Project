import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../Redux/ConfigureStore';
import Profile from '../../Pages/Profile';
import { BrowserRouter } from 'react-router-dom';

describe('Testing the Profile component', () => {
    test('Check rendering of the Profile component', () => {
      const { getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <Profile />
          </Provider>
        </BrowserRouter>,
      );
      expect(getByText('My Profile')).toBeInTheDocument();
    });
    test('Check rendering of the Profile component', () => {
        const { getByText } = render(
          <BrowserRouter>
            <Provider store={store}>
              <Profile />
            </Provider>
          </BrowserRouter>,
        );
        expect(getByText('My Rockets')).toBeInTheDocument();
      });
      test('Check rendering of the Profile component', () => {
        const { getByText } = render(
          <BrowserRouter>
            <Provider store={store}>
              <Profile />
            </Provider>
          </BrowserRouter>,
        );
        expect(getByText('Joined missions')).toBeInTheDocument();
      });
  });