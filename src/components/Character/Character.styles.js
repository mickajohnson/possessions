import styled from "styled-components";

export const CharacterContainer = styled.div`
  border-style: none;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  max-width: 25%;
  border-radius: 90px;
  padding: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CharacterImage = styled.img``;
