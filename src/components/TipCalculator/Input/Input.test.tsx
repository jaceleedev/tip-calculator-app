import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Input from './Input';

expect.extend(toHaveNoViolations);

describe('Input', () => {
  // 1. Rendering test
  it('renders correctly', () => {
    render(
      <Input
        id="rendering-test"
        placeholder="rendering test"
        isValid={true}
        errorMessage="rendering message"
      />
    );
    const input = screen.getByPlaceholderText('rendering test');
    expect(input).toBeDefined();
  });

  // 2. Props test
  it('applies correct attributes', () => {
    render(
      <Input
        id="props-test"
        placeholder="props test"
        type="text"
        isValid={true}
        errorMessage="props test"
      />
    );
    const input = screen.getByPlaceholderText('props test');
    expect(input).toHaveProperty('id', 'props-test');
    expect(input).toHaveProperty('type', 'text');
    expect(input).toHaveProperty('placeholder', 'props test');
  });

  // 3. Styles test
  it('applies the correct styles', () => {
    render(
      <Input
        id="styles test"
        placeholder="styles test"
        isValid={true}
        errorMessage="styles message"
      />
    );
    const input = screen.getByPlaceholderText('styles test');
    expect(input.className).toContain('text-primary');
    expect(input.className).toContain('text-very-dark-cyan');
    expect(input.className).toContain('w-full');
    expect(input.className).toContain('h-12');
  });

  // 4. Error styles test
  it('applies invalid styles when isValid prop is false', () => {
    render(
      <Input
        id="error styles test"
        placeholder="error styles test"
        isValid={false}
        errorMessage="error styles message"
      />
    );
    const input = screen.getByPlaceholderText('error styles test');
    expect(input.className).toContain('focus:border-strong-orange-red');
    expect(input.className).toContain('caret-strong-orange-red');
    expect(screen.getByText('error styles message')).toBeDefined();
  });

  // 5. State change test
  it('shows error message when invalid', () => {
    render(
      <Input
        id="invalid test"
        placeholder="invalid test"
        isValid={false}
        errorMessage="invalid message"
      />
    );
    const errorMessage = screen.getByText('invalid message');
    expect(errorMessage).toBeDefined();
  });

  // 6. Behavior test
  it('calls onChange when input value changes', () => {
    const handleChange = vi.fn();
    render(
      <Input
        id="behavior test"
        placeholder="behavior test"
        isValid={true}
        errorMessage="behavior message"
        onChange={handleChange}
      />
    );
    const input = screen.getByPlaceholderText('behavior test');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledOnce();
  });

  // 7. Accessibility test
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Input
        id="accessibility"
        placeholder="accessibility test"
        isValid={true}
        errorMessage="accessibility message"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // 8. Snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Input
        id="snapshot"
        placeholder="snapshot test"
        isValid={true}
        errorMessage="snapshot message"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
