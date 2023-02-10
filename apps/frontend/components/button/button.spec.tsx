import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Button>Foobar</Button>);

    // Assert
    expect(baseElement).toBeTruthy();
  });

  it('should render the button text', () => {
    // Arrange
    const text = 'Foobar';

    // Act
    const { getByText } = render(<Button>{text}</Button>);

    // Assert
    expect(getByText(text)).toBeTruthy();
  });

  it('should call the clickHandler on click', () => {
    // Arrange
    const handler = jest.fn();
    const text = 'foobar';
    const { getByText } = render(
      <Button clickHandler={handler}>{text}</Button>
    );
    const button = getByText(text);

    // Act
    fireEvent.click(button);

    // Assert
    expect(handler).toHaveBeenCalled();
  });

  it('should call the clickHandler the appropriate number of times', () => {
    // Arrange
    const handler = jest.fn();
    const text = 'foobar';
    const { getByText } = render(
      <Button clickHandler={handler}>{text}</Button>
    );
    const button = getByText(text);

    // Act
    fireEvent.click(button);
    fireEvent.click(button);

    // Assert
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
