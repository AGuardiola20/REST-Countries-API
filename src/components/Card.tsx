import styled from "styled-components";
import { Country } from "../types/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.primary};
  width: fit-content;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  max-width: fit-content;
`;
const Name = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
`;

const TitleText = styled.span`
  font-weight: 800;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  margin: 1rem 0;
`;

type CardProps = {
  country: Country;
};

const Card = ({ country }: CardProps) => {
  return (
    <Container>
      <img src={country.flags.png} alt={`${country.name} flag`} />
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
