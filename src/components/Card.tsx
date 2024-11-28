import styled from "styled-components";
import { Country } from "../types/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  width: fit-content;
`;

const InfoContainer = styled.div`
  padding: 1cap;
`;
const Name = styled.h2`
  color: ${({ theme }) => theme.text};
`;

const TitleText = styled.span`
  font-weight: 800;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
`;

type CardProps = {
  country: Country | null;
};

const Card = ({ country }: CardProps) => {
  if (!country || !country.name || !country.name.common) {
    return <Container>No country data available</Container>;
  }

  return (
    <Container>
      <InfoContainer>
        <Name>{country.name.common}</Name>
        <Text>
          <TitleText>Population: </TitleText>
          {country.population}
        </Text>
        <Text>
          <TitleText>Region: </TitleText>
          {country.region}
        </Text>
        <Text>
          <TitleText>Capital: </TitleText>
          {country.capital}
        </Text>
      </InfoContainer>
    </Container>
  );
};

export default Card;
