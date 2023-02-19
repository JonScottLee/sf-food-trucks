import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Footer />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
