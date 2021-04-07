import { Container } from "./RulesScreen.styles";

export default function RulesScreen() {
  return (
    <Container>
      <h1>Nightstand Stuff</h1>
      <p>
        You are mischievous ghosts stuck on the property you died in grappling
        with the fragmented memories from your mortal lives. The only way you
        can reach fulfillment and pass through to the other side is by reacting
        - or correcting - your strongest relationships.
      </p>
      <h2>Setup</h2>
      <p>
        Shuffle and arrange the nine room tiles in a random 3 x 3 grid upside
        down Randomly place a -1 and a + 1 for each character around the
        perimeter. Flip over the room tiles Determine the starting player
      </p>
      <p>
        Place the figurines in their starting spaces: Daughter - Daughter’s
        room, Grandpa - Grandpa’s room, Mom - Parent’s Room, Dad - Bathroom
      </p>
      <p>
        Deal four goals to each player. They select three and return one to the
        box. For a four player game, deal three and select two. Give each player
        their deck as described in setup
      </p>
      <p>
        Set a token in the middle of each relationship measurement meter Each
        player shuffles their deck and draws a hand of six cards
      </p>
      <h2>Rounds</h2>
      <p>
        Rounds consist of two phases: the planning phase, where players lay down
        their plans, and the scare phase, where they enact those plans.
      </p>
      <p>
        Turn order moves at the end of each round. Whoever went second last turn
        will go first next turn, etc.
      </p>
      <h2>Planning Phase</h2>
      <p>
        Players simultaneously determine what four things they’re going to
        attempt that round. They do so by selecting a card from their hand and
        laying it face down in an action slot. This represents what they will
        get to do to whichever character they choose once the Scare Phase has
        begun.
      </p>
      <p>
        Once they put a card down, they draw another card to fill their hand
        back to six. However, once they draw, the previous card they played is
        locked in. It may be looked at, but not changed.
      </p>
      <p>
        They repeat this process four times. until all four action slots are
        full. If they need to draw a card but none are available in their draw
        pile, they must shuffle their discard pile so that it becomes their new
        draw pile and draw from that.
      </p>
      <h2>Scare Phase</h2>
      <p>
        Players reveal all of their action cards. They take turns enacting their
        actions on whichever characters they choose. If they can take an action,
        they _must_ take an action, even if it isn’t what they wanted to do.
        Once they play a card, they place it in their discard pile.
      </p>
      <h2>Actions</h2>
      <ul></ul>
      <li>
        Leave behind something. A character leaves behind either a positive or
        negative token in the room they are currently in. The size of the token
        depends on the number on the card.
      </li>
      <li>
        Interact with something. A character interacts with something(s) left
        behind by another character in the room they are in. If multiple
        character tokens in the room, can only react to character tokens of one
        other character. If multiple of that same character, you must total up
        all of those tokens (cancelling out positives and negatives). Move the
        corresponding relationship meter that amount.
      </li>
      <li>
        Convo (Fight/Bond). Can only be played if two (or more) characters are
        sharing a room. If more than one, decide which two are talking. Instant
        +1 or -1 to that relationship depending on which you decide. If a fight
        (you choose -1), immediately move one of the characters to an adjoining
        room. If a bond (you chose +1), leave them where they are.
      </li>
      <li>
        Move character - You must move a character equal to the number on the
        card you played.
      </li>
      <h2>Goals</h2>
      <p>
        Your goals are big relationship changes you hope to see happen. You get
        points the further the given relationship is in the indicated direction.
      </p>
      <h2>Game End</h2>
      <p>The game ends after six rounds.</p>
      <h2>Winning</h2>
      <p>
        Reveal your goals. Each player gets points based on where their meter
        is. If negative, you can’t lose points. Whoever has the most points at
        the end wins.
      </p>
    </Container>
  );
}
