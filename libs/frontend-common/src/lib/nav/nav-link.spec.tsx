import React from 'react';
import { render } from '@testing-library/react';
import { NavLink } from './nav-link';

describe('Loading Stripe', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(<NavLink href="foo">Link Text</NavLink>);

    // Assert
    expect(baseElement).toBeTruthy();
  });

  it('should render the supplied href', () => {
    // Arrange
    const href = 'https://www.foo.com/';
    const linkText = 'link text';

    // Act
    const { getByText } = render(<NavLink href={href}>{linkText}</NavLink>);

    // Assert
    const link = getByText(linkText);
    expect(link).toHaveProperty('href', href);
  });

  it('should render the link text', () => {
    // Arrange
    const linkText = 'link text';

    // Act
    const { getByText } = render(
      <NavLink href="https://www.foo.com">{linkText}</NavLink>
    );

    // Assert
    expect(getByText(linkText)).toBeVisible();
  });
});
