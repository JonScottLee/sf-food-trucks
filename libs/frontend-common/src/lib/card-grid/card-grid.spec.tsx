import React from 'react';
import { render } from '@testing-library/react';
import { CardGrid } from './card-grid';

describe('Card Grid', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<CardGrid>Foobar</CardGrid>);

    // Assert
    expect(baseElement).toBeTruthy();
  });
});
