import { render } from '@testing-library/react';

import PrimoUi from './PrimoUi';

describe('PrimoUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrimoUi />);
    expect(baseElement).toBeTruthy();
  });
});
