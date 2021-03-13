import styled, { css } from "styled-components";

export const CommandLineContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.brown};
  max-height: 140px;
  align-items: center;
`;

export const CommandContainer = styled.div`
  border: ${({ isHappening }) =>
    isHappening ? "1px solid var(--color-green)" : "none"};
  border-radius: 6px;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${({ isFaceDown }) =>
    isFaceDown
      ? css`
          background-image: url(/card_back.png);
        `
      : ""}
  background-color: white;
`;

export const FaceDownCard = styled.img`
  border: ${({ isHappening }) =>
    isHappening ? "1px solid var(--color-green)" : "none"};
  border-radius: 6px;
`;
