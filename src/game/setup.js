import shuffle from "lodash/shuffle";
import reduce from "lodash/reduce";
import cloneDeep from "lodash/cloneDeep";

import {
  Relationships,
  roomKeyToNameMapping,
  roomKeys,
  Characters,
  initialDrops,
  dropTemplate,
} from "./gameData";

export default function setup() {
  const shuffledRoomKeys = shuffle(roomKeys);

  const shuffledDrops = shuffle([...initialDrops]);

  const rooms = reduce(
    shuffledRoomKeys,
    (roomsObject, roomKey, index) => {
      const newRoomObject = {
        position: index,
        drops: cloneDeep(dropTemplate),
        name: roomKeyToNameMapping[roomKey],
      };

      if (shuffledDrops.length && index !== 4) {
        const newDrop = shuffledDrops.pop();
        newRoomObject.drops[newDrop.character].push(newDrop);
      }

      roomsObject[roomKey] = newRoomObject;
      return roomsObject;
    },
    {}
  );

  return {
    roomOrder: shuffledRoomKeys,
    rooms,
    characters: Characters,
    relationships: Relationships,
  };
}
