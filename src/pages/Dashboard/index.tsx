import { FormEvent, useEffect, useState } from "react";
import { Card, Container, Form, Participants } from "./styles";
import { Participant } from "./types";
import { api } from "../../services/api";

export function Dashboard() {
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
    const remainingParticipants = participants.filter(({id}) => id !== participantId);

    setParticipants(remainingParticipants);
  }

  return (
    <Container>
      <section>
        <header>
          <h1>Testes no Front-end</h1>

          <span>Sejam bem-vindos!</span>
        </header>

        <Form name="form" onSubmit={handleAddParticipant}>
          <input type="text" placeholder="Digite o nome do participante..." value={newParticipant} onChange={e => setNewParticipant(e.target.value)} />

          <button type="submit">+</button>
        </Form>

        <Participants>
          <h2>Participantes</h2>

          {participants.map(({ id, name }) => (
            <Card key={id}>
              <div>
                <strong>{name}</strong>
              </div>

              <button onClick={() => handleDeleteParticipant(id)}>-</button>
            </Card>
          ))}
        </Participants>
      </section>
    </Container>
  )
}
