import styled from "styled-components";

export const RoomName = styled.p`
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  text-align: center;
  padding: 2px 0;
`;

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 150px;
  cursor: ${({ isOption }) => (isOption ? "pointer" : "default")};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : null};
  padding-top: 10px;
  background-image: url("/dining_room.png");
  background-color: ${({ theme }) =>
    theme.colors.gray} /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;
