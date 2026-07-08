import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this for custom matchers
import Shimmer from '../Shimmer';

describe('Shimmer Component', () => {
  test('renders Shimmer component', () => {
    render(<Shimmer />);
    const noDataElement = screen.getByText(/No data/i);
    expect(noDataElement).toBeInTheDocument();
  });
});