import styled from "styled-components";

export const Container = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: none;
  margin-bottom: 3em;
  width: 100%;
  padding: 1em;
  font-family: "Domine", seriff;
  font-size: 1.3em;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  padding: 1em;
  border-radius: 5px;
  font-family: "Staatliches";
  font-size: 1.3em;
`;

export const Select = styled.select`
  margin-bottom: 3em;
  border-radius: 5px;
  border: none;
  padding: 1em;
  cursor: pointer;
  width: 100%;
  font-family: "Domine", seriff;
  font-size: 1.3em;
  color: ${({ value }) => (value === "" ? "grey" : "black")};
`;

export const SplitContainer = styled.div``;

export const Label = styled.label`
  width: 100%;
  font-size: 2em;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  margin-top: 1em;
`;

export const ApiErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.redOrange};
`;
