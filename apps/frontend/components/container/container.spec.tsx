import React from 'react';
import { render } from '@testing-library/react';
import { Container } from './container';

describe('Container', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<Container>Foobar</Container>);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
