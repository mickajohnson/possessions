import * as Styled from "./DiscardPile.styles";
import * as Types from "../../types";
import PropTypes from "prop-types";

export default function DiscardPile({ discardPile }) {
  return (
    <Styled.Container>
      <span>Discard Pile</span>
      <Styled.Discards>{discardPile.length ? <div /> : null}</Styled.Discards>
      <span>{discardPile.length} Cards</span>
    </Styled.Container>
  );
}

DiscardPile.propTypes = {
  discardPile: PropTypes.arrayOf(Types.card).isRequired,
};
