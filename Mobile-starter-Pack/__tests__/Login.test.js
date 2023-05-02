import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/screens/Login';

test('renders email and password inputs', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
  const emailInput = getByTestId('Email');
  const passwordInput = getByTestId('Password');
  expect(emailInput).toBeTruthy();
  expect(passwordInput).toBeTruthy();
});

test('updates email input correctly', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
  const emailInput = getByTestId('Email');
  fireEvent.changeText(emailInput, 'test@example.com');
  expect(emailInput.props.value).toBe('test@example.com');
});

test('updates password input correctly', () => {
  const { getByTestId } = render(
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
  const passwordInput = getByTestId('Password');
  fireEvent.changeText(passwordInput, 'testpassword');
  expect(passwordInput.props.value).toBe('testpassword');
});

test('calls handleLogin when login button is pressed', () => {
  const mockNavigation = { navigate: jest.fn() };
  const { getByTestId } = render(
    <NavigationContainer>
      <Login navigation={mockNavigation} />
    </NavigationContainer>
  );  
  const emailInput = getByTestId('Email');
  const passwordInput = getByTestId('Password');
  const loginButton = getByTestId('login-button');
  fireEvent.changeText(emailInput, 'test@example.com');
  fireEvent.changeText(passwordInput, 'testpassword');
  fireEvent.press(loginButton);
  expect(mockNavigation.navigate).toHaveBeenCalledWith('Main', { email: 'test@example.com' });
});
