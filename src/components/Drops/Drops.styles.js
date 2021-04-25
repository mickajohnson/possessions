import styled from "styled-components";

export const CharacterImage = styled.img`
  width: 60%;
  position: absolute;
  left: 3px;
  top: 3px;
`;

export const Value = styled.p`
  color: ${({ value }) =>
    value > 0
      ? "var(--color-green)"
      : value < 0
      ? "var(--color-redOrange)"
      : "black"};
  font-family: var(--font-sans-seriff);
  width: 100%;
  text-align: right;
  font-size: 1.3rem;
  line-height: 1;s
`;

export const DropsContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 0 2px;
  max-height: 100px;
`;

export const DropContainer = styled.div`
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border-style: solid;
  border-width: ${({ isOption }) => (isOption ? "3px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  font-family: var(--font-seriff);
  font-size: 0.8rem;
  padding-right: 5px;
  padding-bottom: 2px;
  position: relative;
  height: 70%;
`;

export const EmptyDropGroup = styled.div`
  padding: 5px;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border-style: solid;
  border-width: ${({ isOption }) => (isOption ? "1px" : "0px")};
  border-color: ${({ borderColor }) => borderColor};
  flex: 1;
`;
