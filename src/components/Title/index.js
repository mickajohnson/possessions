import * as Styled from "./Title.styles";
import PropTypes from "prop-types";

export default function Title({ fontSize = "4.5em", padding }) {
  return (
    <Styled.Header padding={padding} fontSize={fontSize}>
      <Styled.BlueText>Possessions</Styled.BlueText>
    </Styled.Header>
  );
}

Title.propTypes = {
  fontSize: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
};
