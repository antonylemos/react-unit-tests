import { Card, Container, Form, Participants } from "./styles";
import { useDashboard } from "./useDashboard";

export function Dashboard() {
  const {
    participants,
    newParticipant,
    handleAddParticipant,
    handleDeleteParticipant,
    setNewParticipant,
  } = useDashboard();

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
