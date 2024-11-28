import styled from "styled-components";
import Card from "./components/Card";
import { useCountry } from "./hooks/useCountry";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textSecondary};
`;

const ErrorMessage = styled(Message)`
  color: ${({ theme }) => theme.error};
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.background};
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
`;

function App() {
  const { data, error, loading } = useCountry("/alpha/USA");

  if (loading)
    return (
      <LoadingMessage>
        <Spinner />
        <p>Cargando datos...</p>
      </LoadingMessage>
    );

  if (error) return <ErrorMessage>Error: {error}</ErrorMessage>;

  if (!data) return null;

  return (
    <Container>
      <Card country={data} />
    </Container>
  );
}

export default App;
