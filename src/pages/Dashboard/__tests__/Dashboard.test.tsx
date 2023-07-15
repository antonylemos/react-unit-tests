import { describe, it, expect, vitest, Mock, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { useDashboard } from '../useDashboard';
import { Dashboard } from '..';

vitest.mock('../useDashboard');

describe('Dashboard Page', () => {
  beforeEach(() => {
    (useDashboard as Mock).mockReturnValue({
      participants: [],
      newParticipant: '',
      handleAddParticipant: vitest.fn,
      handleDeleteParticipant: vitest.fn,
      setNewParticipant: vitest.fn,
    });
  });

  it('should be able render Dashboard Page', () => {
    const { getByText } = render(<Dashboard />);

    expect(getByText('Testes no Front-end'));
  });

  it('should be able render Dashboard Page with participants', () => {
    (useDashboard as Mock).mockReturnValue({
      participants: [{ id: 1, name: 'Antony' }],
    });

    const { getByText } = render(<Dashboard />);

    expect(getByText('Antony'));
  });

  it('should be able add new participant', () => {
    const setNewParticipantMock = vitest.fn();
    const handleAddParticipantMock = vitest.fn();

    (useDashboard as Mock).mockReturnValue({
      participants: [],
      handleAddParticipant: handleAddParticipantMock,
      setNewParticipant: setNewParticipantMock,
    });

    const { getByPlaceholderText, getByRole } = render(<Dashboard />);

    const inputElement = getByPlaceholderText('Digite o nome do participante...');

    fireEvent.change(inputElement, { target: { value: 'Fulano' } });

    expect(setNewParticipantMock).toHaveBeenCalledWith('Fulano');

    const formElement = getByRole('form');

    fireEvent.submit(formElement);

    expect(handleAddParticipantMock).toHaveBeenCalled();
  });

  it('should be able delete participant', () => {
    const handleDeleteParticipantMock = vitest.fn();

    (useDashboard as Mock).mockReturnValue({
      participants: [{ id: 1, name: 'Antony' }],
      handleDeleteParticipant: handleDeleteParticipantMock,
    });

    const { getByText } = render(<Dashboard />);

    const buttonElement = getByText('-');

    fireEvent.click(buttonElement);

    expect(handleDeleteParticipantMock).toHaveBeenCalledWith(1);
  })
})
