import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import TopNavBar from '../src/components/TopNavBar';

jest.mock('@react-navigation/native');

describe('<TopNavBar />', () => {
  test('should render the back button', () => {
    const { getByTestId } = render(<TopNavBar />);
    const backButton = getByTestId('back-button');
    expect(backButton).toBeDefined();
  });

  test('should call navigator.goBack() when the back button is pressed', () => {
    const mockGoBack = jest.fn();
    useNavigation.mockReturnValue({ goBack: mockGoBack });
    const { getByTestId } = render(<TopNavBar />);
    const backButton = getByTestId('back-button');
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalled();
  });
});
