import { AllTrucks } from './all-trucks.page';
import { mockAPIResponse } from './__mocks__/food-trucks-api-response';
import { render, waitFor } from '@testing-library/react';
import axios from '../../../axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('All Trucks Page', () => {
  it('should initially render the loading skeleton', () => {
    // Arrange
    mock.onGet('/food-trucks').reply(200, mockAPIResponse);

    // Act
    const { getAllByRole } = render(<AllTrucks />);

    // Assert
    expect(getAllByRole('img')).toHaveLength(8);

    mock.reset();
  });

  it('show initially render no more than 50 items', async () => {
    // Arrange
    mock.onGet('/food-trucks').reply(200, mockAPIResponse);

    // Act
    const { getAllByRole } = render(<AllTrucks />);

    // Assert
    await waitFor(() => {
      expect(getAllByRole('heading', { level: 2 })).toHaveLength(50);
    });

    mock.reset();
  });
});
