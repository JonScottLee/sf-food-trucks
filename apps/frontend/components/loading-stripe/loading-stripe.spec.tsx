import React from 'react';
import { render } from '@testing-library/react';
import { LoadingStripe } from './loading-stripe';

describe('Loading Stripe', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<LoadingStripe />);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
