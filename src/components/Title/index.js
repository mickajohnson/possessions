import * as Styled from "./Title.styles";
import PropTypes from "prop-types";

export default function Title({ fontSize = "4.5em", padding = "0" }) {
  return (
    <Styled.Header padding={padding} fontSize={fontSize}>
      <Styled.BlueText>Possessions</Styled.BlueText>
    </Styled.Header>
  );
}

Title.propTypes = {
  fontSize: PropTypes.string,
  padding: PropTypes.string,
};
