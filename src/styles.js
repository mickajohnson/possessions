import styled from "styled-components";

export const Container = styled.div`
  padding: 3em;
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
  font-family: "Staatliches";
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
  height: 3em;
  margin-bottom: 3em;
  border-radius: 5px;
  border: none;
  padding: 1em;
  cursor: pointer;
  width: 100%;
  font-family: "Staatliches";
  font-size: 1.3em;
`;
