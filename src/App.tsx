import styled from "styled-components";
import Card from "./components/Card";
import { useCountry } from "./hooks/useCountry";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
`;

function App() {
  const { data, error, loading } = useCountry("/alpha/USA");

  // TODO: Mejorar el estilo de los estados de error y loading
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No se encontraron datos.</p>;

  return (
    <Container>
      <Card
        name="Co"
        capital="a"
        imgSrc="sad"
        region="Europe"
        population={200}
      />
    </Container>
  );
}

export default App;
