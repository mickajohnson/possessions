import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  border: ${({ isPlayable }) =>
    isPlayable ? `1px solid var(--color-green)` : "none"};
  cursor: ${({ isPlayable }) => (isPlayable ? "pointer" : "cursor")}}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
