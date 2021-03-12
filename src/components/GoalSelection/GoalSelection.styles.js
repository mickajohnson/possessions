import styled, { css } from "styled-components";

import { Container, FormButton } from "../../styles";

export const GoalSelectionContainer = styled(Container)`
  padding: 5px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.div`
  height: 40px;
  width: 100%;
`;

export const RemoveButton = styled(FormButton)`
  width: fit-content;
  margin: auto;
  padding: 12px 90px;
`;

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

export const Directions = styled.h2`
  font-size: 1.1rem;
  font-family: "Domine", seriff;
  margin-bottom: 26px;
`;

export const FlavorText = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 7px;
`;

export const GoalsContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-content: center;
  margin: 0 0 48px;
`;

export const GoalCard = styled.div`
  height: 240px;
  width: 175px;
  border-radius: 10px;
  background-color: ${({ positive }) =>
    positive ? "var(--color-lightGreen)" : "var(--color-negativePink)"};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  cursor: ${({ selectable }) => (selectable ? "pointer" : "default")};
  padding-bottom: 10px;
  position: relative;

  &::after {
    ${({ selected }) =>
      selected
        ? css`
            content: "";
            position: absolute;
            height: 100%;
            width: 100%;
            border-radius: 10px;
            background: repeating-linear-gradient(
              -45deg,
              var(--color-green),
              var(--color-green) 5px,
              transparent 5px,
              transparent 18px
            );
            border-color: var(--color-green);
            border-width: 3px;
            border-style: solid;
          `
        : ""}
  }
`;

export const Description = styled.p`
  font-family: "Domine", seriff;
  text-align: center;
  line-height: 1.2;
`;

export const DescriptionContainer = styled.div`
  background: white;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 10px 5px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PeopleContainer = styled.div`
  display: flex;
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const PersonPicture = styled.img`
  transform ${({ tiltLeft }) => (tiltLeft ? "rotate(-10deg)" : "rotate(10deg)")}
`;

export const PersonName = styled.p`
  font-family: "Domine", seriff;
  text-align: center;
  font-size: 0.8rem;
`;
