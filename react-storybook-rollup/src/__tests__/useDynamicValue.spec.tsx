import { useDynamicValue } from '@hooks/useDynamicValue';
import { render } from '@testing-library/react';
import React from 'react';

const TestComponent: React.FC = ({}) => {
  const getValue = useDynamicValue([480, 960]);
  const currentHeight = getValue([10, 20, 30]);
  return <div style={{ height: currentHeight }}></div>;
};

describe('Test useDynamicValue hook', () => {
  test('Value should change on different window width', () => {
    document.documentElement.style.width = '400px';
    const { container } = render(<TestComponent />);
    expect(container.firstChild).toHaveStyle('height: 10px');
    Object.defineProperty(window.HTMLHtmlElement.prototype, 'clientWidth', { value: 500 });
    render(<TestComponent />, { container }); // Rerender/Update current component
    expect(container.firstChild).toHaveStyle('height: 20px');
  });
});
