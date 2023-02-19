import React from 'react';
import { render } from '@testing-library/react';
import { Card } from './card';

describe('Card Grid', () => {
  it('should render successfully', () => {
    // Act
    const { baseElement } = render(
      <Card title="title" body="body" action={<button>Action</button>} />
    );

    // Assert
    expect(baseElement).toBeTruthy();
  });

  it('should render the title prop', () => {
    // Arrange
    const title = 'title';

    // Act
    const { getByText } = render(
      <Card title={title} body="body" action={<button>Action</button>} />
    );

    // Assert
    expect(getByText(title)).toBeVisible();
  });

  it('should render the body prop', () => {
    // Arrange
    const body = 'body';

    // Act
    const { getByText } = render(
      <Card title="title" body={body} action={<button>Action</button>} />
    );

    // Assert
    expect(getByText(body)).toBeVisible();
  });

  it('should render the action prop', () => {
    // Arrange
    const actionText = 'action';
    const Action = () => <button>{actionText}</button>;

    // Act
    const { getByText } = render(
      <Card title="title" body="body" action={<Action />} />
    );

    // Assert
    expect(getByText(actionText)).toBeVisible();
  });
});
