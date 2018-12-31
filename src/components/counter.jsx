import React, {
  Component
} from 'react';

class ShowUserDecks extends Component {

  render() {
    return (
      <this.showDecks atleastOneDeck="true" />
    )
  }

  showDecks(props) {
    const atleastOneDeck = props.atleastOneDeck;
    if (atleastOneDeck) {
      return <h1>Some decks have been created!</h1>;
    }
    return <h1>No decks created yet!</h1>;;
  }
}

export default ShowUserDecks
