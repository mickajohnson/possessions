import * as Styled from "./FaceUpCard.styles";
import PropTypes from "prop-types";
import * as Types from "../../types";

export default function FaceUpCard({ card, onDoubleClick, isPlayable }) {
  const handlePlayCard = () => {
    if (isPlayable) {
      onDoubleClick(card.id);
    }
  };

  return (
    <Styled.Container isPlayable={isPlayable} onDoubleClick={handlePlayCard}>
      {card.name}
    </Styled.Container>
  );
}

FaceUpCard.propTypes = {
  card: Types.card.isRequired,
  onDoubleClick: PropTypes.func,
  isPlayable: PropTypes.bool,
};

FaceUpCard.defaultProps = {
  onDoubleClick: () => {},
  isPlayable: false,
};
