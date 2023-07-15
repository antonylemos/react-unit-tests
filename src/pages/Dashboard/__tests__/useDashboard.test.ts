import MockAdapter from 'axios-mock-adapter';
import { act, renderHook } from '@testing-library/react-hooks';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { api } from '../../../services/api';
import { useDashboard } from '../useDashboard';

const mockAPI = new MockAdapter(api);

describe('useDashboard Hook', () => {
  beforeEach(() => {
    mockAPI
      .onGet('http://localhost:3000/participants')
      .reply(200, [{ id: 1, "name": "Antony Lemos" }]);
  });

  afterEach(() => {
    mockAPI.reset();
  });

  it('should be able to list participants', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDashboard());

    await waitForNextUpdate();

    expect(result.current.participants.length).toBeGreaterThan(0);
  });

  it('should be able delete participant', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useDashboard());

    await waitForNextUpdate();

    act(() => result.current.handleDeleteParticipant(1));

    expect(result.current.participants.length).toBe(0);
  });
})
