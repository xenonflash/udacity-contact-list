import React, {Component} from 'react';
import ListContacts from './ListContacts'


class App extends Component{
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  handleRemove = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({id}) => (contact.id !== id))
    }));
  }
  render() {
    return (
      <ListContacts
        contacts={this.state.contacts} 
        //contacts={{}}
        handleRemove={this.handleRemove}
      />
    );
  }
}


export default App;
