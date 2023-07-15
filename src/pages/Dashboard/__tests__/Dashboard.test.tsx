import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { Dashboard } from '..';

describe('Dashboard Page', () => {
  it('should be able render Dashboard Page', () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText('Testes no Front-end'));
  });

  it('should be able add new participant', () => {
    const { getByPlaceholderText, getByRole, getByText } = render(<Dashboard />);

    const inputElement = getByPlaceholderText('Digite o nome do participante...');

    fireEvent.change(inputElement, { target: { value: 'Fulano' } });

    const formElement = getByRole('form');

    fireEvent.submit(formElement);

    expect(getByText('Fulano'));
  });

  it('should be able delete participant', () => {
    const { getByPlaceholderText, getByRole, getByText } = render(<Dashboard />);

    const inputElement = getByPlaceholderText('Digite o nome do participante...');

    fireEvent.change(inputElement, { target: { value: 'Fulano' } });

    const formElement = getByRole('form');

    fireEvent.submit(formElement);

    expect(getByText('Fulano'));

    const buttonElement = getByText('-');

    fireEvent.click(buttonElement);

    // const participant = queryByText('Fulano')

    // expect(participant).toBeNull()
  })
})
