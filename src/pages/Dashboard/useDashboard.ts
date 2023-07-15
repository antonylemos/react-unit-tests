import { FormEvent, useEffect, useState } from "react";
import { api } from "../../services/api";
import { Participant } from "./types";

export function useDashboard() {
  const [newParticipant, setNewParticipant] = useState('');
  const [participants, setParticipants] = useState([] as Participant[]);

  async function getAllParticipants() {
    const response = await api.get<Participant[]>('participants');

    setParticipants(response.data);
  }

  useEffect(() => {
    getAllParticipants();
  }, []);

  function handleAddParticipant(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!newParticipant) {
      return;
    }

    setParticipants([...participants, { id: Math.random(), name: newParticipant }]);
    setNewParticipant('');
  }

  function handleDeleteParticipant(
    participantId?: number,
  ) {
    const remainingParticipants = participants.filter(({ id }) => id !== participantId);

    setParticipants(remainingParticipants);
  }

  return { participants, newParticipant, handleAddParticipant, handleDeleteParticipant, setNewParticipant }
}
