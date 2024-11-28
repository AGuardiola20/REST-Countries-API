import styled from "styled-components";
import { Region } from "../types/types";

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
  imgSrc: string;
  name: string;
  population: number;
  region: Region;
  capital: string;
};

const Card = ({ capital, population, region, name, imgSrc }: CardProps) => {
  return (
    <Container>
      <img src={imgSrc} alt={`${name} flag image`} />
      <InfoContainer>
        <Name>{name}</Name>
        <Text>
          <TitleText>Population: </TitleText>
          {population}
        </Text>
        <Text>
          <TitleText>Region: </TitleText>
          {region}
        </Text>
        <Text>
          <TitleText>Capital: </TitleText>
          {capital}
        </Text>
      </InfoContainer>
    </Container>
  );
};

export default Card;
