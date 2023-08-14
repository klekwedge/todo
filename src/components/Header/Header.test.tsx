import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Header>
        <div>Child 1</div>
        <div>Child 2</div>
      </Header>,
    );

    const child1 = getByText('Child 1');
    const child2 = getByText('Child 2');

    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
});
