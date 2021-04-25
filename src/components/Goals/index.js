import GoalCard from "../GoalCard";
import * as Types from "../../types";
import * as Styled from "./Goals.styles";
import PropTypes from "prop-types";

export default function Goals({ goals }) {
  return (
    <Styled.GoalsContainer>
      {goals.map((goal) => (
        <Styled.GoalContainer key={goal.id}>
          <GoalCard key={goal.id} size="small" goal={goal} />
        </Styled.GoalContainer>
      ))}
    </Styled.GoalsContainer>
  );
}

Goals.propTypes = {
  goals: PropTypes.arrayOf(Types.goal).isRequired,
};
