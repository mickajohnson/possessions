import styled, { css } from "styled-components";

export const Container = styled.div`
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
