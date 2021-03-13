import styled from "styled-components";

import GoalCard from "../GoalCard";

export default function Goals({ goals }) {
  return (
    <GoalsContainer>
      {goals.map((goal) => (
        <GoalCard key={goal.id} size="small" goal={goal} />
      ))}
    </GoalsContainer>
  );
}

const GoalsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;
