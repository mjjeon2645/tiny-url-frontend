import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

const context = describe;

describe('HomePage', () => {
  function renderHomePage() {
    render(<HomePage />);
  }

  context('페이지가 로드되면', () => {
    it('Home Page가 렌더된다', () => {
      renderHomePage();

      screen.getByText('Home Page');
    });
  });
});
