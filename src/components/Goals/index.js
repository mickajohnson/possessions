import styled from "styled-components";

import GoalCard from "../GoalCard";

export default function Goals({ goals }) {
  return (
    <GoalsContainer>
      {goals.map((goal) => (
        <GoalContainer>
          <GoalCard key={goal.id} size="small" goal={goal} />
        </GoalContainer>
      ))}
    </GoalsContainer>
  );
}

const GoalContainer = styled.div`
  padding-bottom: 10px;

  &:first-child {
    padding-top: 10px;
  }
`;

const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
