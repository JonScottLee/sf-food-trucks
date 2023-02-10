import React from 'react';
import { render } from '@testing-library/react';
import { routes } from '../../routes';
import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Breadcrumb routes={routes} pathName="all-trucks" />
    );
    expect(baseElement).toBeTruthy();
  });
});
