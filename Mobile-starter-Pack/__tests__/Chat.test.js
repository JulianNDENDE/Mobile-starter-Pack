import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Chat from '../src/screens/Chat';

describe('Chat', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Chat />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('adds a new message when input is not empty', () => {
    const { getByPlaceholderText, getByText, queryByTestId } = render(<Chat />);
    const input = getByPlaceholderText('Type a message');
    const sendButton = getByText('Send');

    fireEvent.changeText(input, 'Hello, world!');
    fireEvent.press(sendButton);

    expect(queryByTestId('14')).not.toBeNull();
  });

  it('does not add a new message when input is empty', () => {
    const { getByPlaceholderText, getByText, queryByTestId } = render(<Chat />);
    const input = getByPlaceholderText('Type a message');
    const sendButton = getByText('Send');

    fireEvent.changeText(input, '');
    fireEvent.press(sendButton);

    expect(queryByTestId('1')).toBeNull();
  });
});
