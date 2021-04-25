import styled from "styled-components";

export * from "../../styles";

export const Select = styled.select`
  margin-bottom: 3em;
  border-radius: 5px;
  border: none;
  padding: 1em;
  cursor: pointer;
  width: 100%;
  font-family: var(--font-seriff);
  font-size: 1.3em;
  color: ${({ value }) => (value === "" ? "grey" : "black")};
  appearance: none;
  margin-bottom: 1em;
  outline-color: black;
`;
