import { render, screen } from '@testing-library/react';

import { router } from './route';
import { RouterProvider } from 'react-router-dom';

describe('Route', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouterProvider router={router} />);
    expect(baseElement).toBeTruthy();
    expect(screen.getByText(/Welcome Primo/));
  });
});
