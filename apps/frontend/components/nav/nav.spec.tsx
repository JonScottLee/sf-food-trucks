import React from 'react';
import { render } from '@testing-library/react';
import { Nav } from './nav';

describe('Loading Stripe', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Nav />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
