import styled from "styled-components";
import {
  DINING_ROOM,
  KITCHEN,
  GRANDPAS_ROOM,
  DAUGHTERS_ROOM,
  PARENTS_ROOM,
  OFFICE,
  BATHROOM,
  GARAGE,
  LIVING_ROOM,
} from "../../constants";

const roomKeysToImage = {
  [DINING_ROOM]: "/dining_room.png",
  [KITCHEN]: "/kitchen.png",
  [GRANDPAS_ROOM]: "/grandpas_room.png",
  [DAUGHTERS_ROOM]: "/daughters_room.png",
  [PARENTS_ROOM]: "/parents_room.png",
  [OFFICE]: "/office.png",
  [BATHROOM]: "/bathroom.png",
  [GARAGE]: "/garage.png",
  [LIVING_ROOM]: "/living_room.png",
};

const roomBannerColors = {
  [DINING_ROOM]: "#393280",
  [KITCHEN]: "#217AFF",
  [GRANDPAS_ROOM]: "#D0A303",
  [DAUGHTERS_ROOM]: "#6515A4",
  [PARENTS_ROOM]: "#F45F31",
  [OFFICE]: "#73470C",
  [BATHROOM]: "#75A313",
  [GARAGE]: "#E10971",
  [LIVING_ROOM]: "#ED3838",
};

export const RoomName = styled.p`
  color: white;
  background-color: ${({ roomKey }) => roomBannerColors[roomKey]};
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
  background-image: url(${({ roomKey }) => roomKeysToImage[roomKey]});
  background-color: ${({ theme }) =>
    theme.colors.gray} /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;
