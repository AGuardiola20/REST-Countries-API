import styled from "styled-components";
import { Region } from "../types/types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
      <div>
        <h2>{name}</h2>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </Container>
  );
};

export default Card;
