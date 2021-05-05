import * as Styled from "./RulesScreen.styles";
import Title from "../Title";

export default function RulesScreen() {
  return (
    <Styled.Container>
      <Title>Possessions</Title>
      <section>
        <p>
          Welcome to Possessions, a game of mischief-making, storytelling, and
          misdirected vengeance. Each player acts as a restless ghost, grappling
          with the fragmented memories from their mortal lives, shackled to the
          property where they died. The only way they can reach fulfillment and
          pass through to the other side is by reacting - or correcting - the
          most impactful relationships from their time on Earth by possessing
          the current occupants.
        </p>
        <Styled.InlineImageContainer>
          <div>
            <h2>Storytelling</h2>
            <p>
              Possessions is meant to be experienced as a storytelling, light
              role-playing game. Players are encouraged to narrate what they are
              making the characters do.
            </p>
            <h2>Objective</h2>
            <p>
              Your goal is to have affected the relationships listed on your
              goal cards more than any other player by the end of six rounds.
            </p>

            <h2>Goals</h2>
            <p>
              Your goals are relationship changes between two characters that
              you hope to see happen. You get points the further the specified
              relationship is in the indicated direction (either positive or
              negative). The maximum amount any relationship can go in either
              direction is five points. If the game ends with one of your
              goals&#39; relationships in the opposite direction of that listed
              on the goal, you will just get zero points (not points taken
              away).
            </p>
          </div>
          <Styled.GoalImage src={"/example_goal.png"} alt="" />
        </Styled.InlineImageContainer>

        <h2>Goal Selection</h2>
        <p>
          At the beginning of the game, players are dealt four goals each (three
          in a four player game). Players select the one that they don&#39;t
          want and discard it.
        </p>
        <Styled.GoalSelectionImage src={"/goal_selection.png"} alt="" />
        <h2>Initial Board State</h2>
        <p>
          Each game of Possessions will start in a unique way. The nine rooms
          are shuffled and layed out randomly in each game. Similarly, the
          initial Drop Tokens (a -1 and a +1 for each character) are randomly
          distributed around the perimeter of the house.
        </p>
        <p>
          The characters always start in the same rooms: Daughter - Daughter’s
          room, Grandpa - Grandpa’s room, Mom - Parent’s Room, Dad - Bathroom
        </p>
        <p>Each relationship starts at zero.</p>
        <Styled.BoardImage src={"/example_board.png"} alt="" />
        <h2>Rounds</h2>
        <p>
          Rounds consist of two phases: the planning phase, where players lay
          down their plans, and the possession phase, where they enact those
          plans.
        </p>
        <p>
          Turn order moves at the end of each round. Whoever went second last
          turn will go first next turn, etc.
        </p>
        <h2>Planning Phase</h2>
        <p>
          Players draw six cards from their personal deck and lay out what four
          things they’re going to attempt during the possession phase round.
          They do so by selecting (double clicking) a card from their hand. It
          will then go face down in an action slot. This represents what they
          will get to do to whichever character they choose once the Possession
          Phase has begun.
        </p>
        <p>
          Once they put a card down, they automatically draw another card to
          fill their hand back to six.
        </p>
        <p>
          Players take turn laying down plans until all four action slots are
          full. If they need to draw a card but none are available in their draw
          pile, the game will shuffle their discard pile so that it becomes
          their new draw pile and the player will draw from that.
        </p>
        <h2>Possession Phase</h2>
        <p>
          All of the laid plans are revealed. Player take turns enacting their
          actions on whichever characters they choose. If they can take an
          action, they <b>must</b> take an action, even if it isn’t what they
          want to do anymore. Once an action is complete the corresponding card
          will go into that player&#39;s discard pile.
        </p>
        <h2>Actions</h2>
        <ul>
          <li>
            <p>
              <b>Move character:</b> Choose a character to move, then choose
              which room they will move to. They must move the number of spaces
              listed on the card.
            </p>
          </li>
          <li>
            <p>
              <b>Leave something behind:</b> Choose a character to leave behind
              a Drop Token in the room they are currently in. The size and
              polarity of of the token is listed on the card. This represents
              something the character is leaving behind for another character to
              discover, be it positive (like tidying up a room) or negative
              (like leaving dirty dishes lying around). Players are encouraged
              to announce what it is that&#39;s being left. The idea is that a
              larger number represents a more positive or negative thing.
            </p>
          </li>
          <li>
            <p>
              <b>React to something:</b> Choose a character to interact with the
              Drop Tokens left behind by another character in the room they are
              currently in. Choose which pile of Drop Tokens they&#39;ll be
              interacting with. If multiple tokens from one character are in a
              room, the effect will be the total of the tokens. The
              corresponding relationship will change that amount. This
              represents a character reacting to things another character left
              in the room. Again, players are encouraged to describe this
              reaction. If there are no characters in a room with anther
              character&#39;s drop tokens, the player&#39;s turn is skipped.
            </p>
          </li>
          <li>
            <p>
              <b>Convo (Fight/Bond):</b> First choose whether the two characters
              you&#39;ll be selecting will fight (negatively affecting the
              relationship by one) or bond (positively affecting the
              relationship by 1). Choose the two characters that you want to
              interact. The two must be in the same room. If this is a fight,
              choose a character to storm off, then choose an adjacent room for
              them to storm off to. If this is a bond, they&#39;ll remain in the
              same room. Once again, players are encouraged to describe the
              specifics of the interaction. If there are no two characters in a
              room together the player&#39;s turn is skipped.
            </p>
          </li>
        </ul>
        <h2>Player Decks</h2>
        <p>
          Each player starts with their own deck of action cards they&#39;ll be
          drawing from. Each deck is made up of: three Move One cards, two Move
          Two cards, three React cards, two Convo card, and one each of Drop +1,
          Drop -1, Drop +2, & Drop -2.
        </p>
        <h2>Game End</h2>
        <p>
          The game ends after six rounds (four rounds in a four player game).
        </p>
        <h2>Winning</h2>
        <p>
          Players&#39; goals are revealed. Each player gets points based on what
          their goals were and where the corresponding relationships are.
          Whoever has the most points at the end wins.
        </p>
      </section>
    </Styled.Container>
  );
}
