import styled, { css } from "styled-components";

export const CommandLineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  padding: 5px;
  background-color: var(--color-brown);
  max-height: 140px;
  align-items: center;
`;

const cardContainer = css`
  border: ${({ isHappening }) =>
    isHappening ? "1px solid var(--color-green)" : "none"};
  border-radius: 6px;
`;

export const CommandContainer = styled.div`
  ${cardContainer}
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
`;

export const FaceDownCard = styled.img`
  ${cardContainer}
`;
