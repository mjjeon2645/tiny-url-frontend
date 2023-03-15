import { render, screen } from '@testing-library/react';

import Header from './Header';

const context = describe;

describe('Header', () => {
  function renderHeader() {
    render(<Header />);
  }

  context('페이지가 로드되면', () => {
    it('Header가 렌더된다', () => {
      renderHeader();

      screen.getByText('Home');
      screen.getByText('Tiny URL');
      screen.getByText('로그인');
    });
  });
});
