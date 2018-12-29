import React, {
  Component
} from 'react';

class Counter extends Component {

  render() {
    return(
      <h1> Hello World</h1>
    )
  }
  /*
  render() {
    return (
      showDecks({atleastOneDeck:true})
    )
  }

  showDecks(props) {
    const atleastOneDeck = props.atleastOneDeck;
    if (atleastOneDeck) {
      return yesDecksYet();
    }
    return noDecksYet();
  }

  noDecksYet() {
    return <h1>No decks created yet!</h1>;
  }

  yesDecksYet() {
    return <h1>Some decks have been created!</h1>
    // I'll work on displaying the decks later but currently i think i should work on creating definitions and then creating sets (terms + definitions) and then I can worry about counting the amount of sets
  }
  */

}

export default Counter
