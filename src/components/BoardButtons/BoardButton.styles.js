import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  padding: 5px;
  border-radius: 6px;
  font-family: "Staatliches";
  font-size: 1.2em;

  &:first-child {
    margin-bottom: 10px;
  }
`;

export const CancelButton = styled(Button)`
  background-color: ${({ theme }) => "grey"};
`;

export const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const FightButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.redOrange};
`;

export const BondButton = styled(Button)`
  background-color: ${({ theme }) => "green"};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
