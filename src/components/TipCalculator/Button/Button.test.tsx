import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  // 1. Rendering test
  it('renders correctly', () => {
    render(<Button label="render test" variant="primary" />);
    const button = screen.getByRole('button', { name: 'render test' });
    expect(button).toBeDefined();
  });

  // 2. Props test
  it('applies correct variant classes', () => {
    render(<Button label="primary button" variant="primary" />);
    const primaryButton = screen.getByRole('button', {
      name: 'primary button',
    });
    expect(primaryButton.className).toContain('text-white');
    expect(primaryButton.className).toContain('bg-very-dark-cyan');

    render(<Button label="secondary button" variant="secondary" />);
    const secondaryButton = screen.getByRole('button', {
      name: 'secondary button',
    });
    expect(secondaryButton.className).toContain('text-very-dark-cyan');
    expect(secondaryButton.className).toContain('bg-strong-cyan');
  });

  // 3. isButtonSelected prop test
  it('applies correct classes when selected', () => {
    render(
      <Button
        label="selected Button"
        variant="primary"
        isButtonSelected={true}
      />
    );
    const selectedButton = screen.getByRole('button', {
      name: 'selected Button',
    });
    expect(selectedButton.className).toContain('text-very-dark-cyan');
    expect(selectedButton.className).toContain('bg-strong-cyan');
  });

  // 4. Event test
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(
      <Button label="click test" variant="primary" onClick={handleClick} />
    );
    const button = screen.getByRole('button', { name: 'click test' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledOnce();
  });

  // 6. Hover state test
  it('has correct hover classes', () => {
    render(<Button label="hover test" variant="primary" />);
    const button = screen.getByRole('button', { name: 'hover test' });
    fireEvent.mouseOver(button);
    expect(button.className).toContain('bg-light-strong-cyan');
    expect(button.className).toContain('text-very-dark-cyan');
  });

  // 7. Disabled state test
  it('applies correct classes when disabled', () => {
    render(<Button label="disabled test" variant="primary" disabled />);
    const button = screen.getByRole('button', { name: 'disabled test' });
    expect(button.className).toContain('text-white');
    expect(button.className).toContain('bg-very-dark-cyan');
  });

  // 8. Accessibility test
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Button label="accessibility test" variant="primary" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 9. Snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Button label="snapshot test" variant="primary" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
