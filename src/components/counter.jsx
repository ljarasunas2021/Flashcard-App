import React, {
  Component
} from 'react';

class Counter extends Component {
  state = {
    count: 5
  };

  render() {
    <showDecks atleastOneDeck={true} />
    //document.getElementById('root')
  }

  showDecks(props) {
    const atleastOneDeck = props.atleastOneDeck;
    if (atleastOneDeck) {
      return <yesDecksYet />;
    }
    return <noDecksYet />;
  }

  noDecksYet(props) {
    return <h1>No decks created yet!</h1>;
  }

  yesDecksYet(props) {
    for (let j = 0; j < 5; j++) {
      return <h2> allDecks[j] </h2>
    }
  }

}

export default Counter;
