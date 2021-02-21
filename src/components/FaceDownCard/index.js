import styled from "styled-components";

export default function FaceDownCard({ onDoubleClick, isDrawable }) {
  const borderColor = isDrawable ? "blue" : "black";

  return <Container borderColor={borderColor} onDoubleClick={onDoubleClick} />;
}

const Container = styled.div`
  height: 6em;
  width: 4em;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
`;
