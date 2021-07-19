import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  padding: 5px;
  border-radius: 6px;
  font-family: var(--font-sans-seriff);
  font-size: 1.2em;

  &:first-child {
    margin-bottom: 10px;
  }
`;

export const CancelButton = styled(Button)`
  background-color: var(--color-grey);
`;

export const ConfirmButton = styled(Button)`
  background-color: var(--color-blue);
`;

export const FightButton = styled(Button)`
  background-color: var(--color-redOrange);
  color: var(--color-white);
`;

export const BondButton = styled(Button)`
  background-color: var(--color-green);
  color: var(--color-white);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
