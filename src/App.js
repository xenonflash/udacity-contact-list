import React, {Component} from 'react';
import ListContacts from './ListContacts'
import {Route} from 'react-router-dom';
import CreateContact from './CreateContact'

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
      <div>
        <Route exact path="/" render={(props) => (
          <ListContacts
            contacts={this.state.contacts} 
            //contacts={{}}
            {...props}
            handleRemove={this.handleRemove}
          />
        )}/>
        <Route path='/create' component={CreateContact}/>
      </div>
    );
  }
}


export default App;
