import styled from "styled-components";
import Card from "./components/Card";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
`;

function App() {
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
