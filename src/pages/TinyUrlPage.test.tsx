import { render, screen } from '@testing-library/react';

import TinyUrlPage from './TinyUrlPage';

const context = describe;

describe('TinyUrlPage', () => {
  function renderTinyUrlPage() {
    render(<TinyUrlPage />);
  }

  context('페이지가 로드되면', () => {
    it('TinyUrl Page가 렌더된다', () => {
      renderTinyUrlPage();

      screen.getByText('URL을 입력하세요');
    });
  });
});
