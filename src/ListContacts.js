import React, {Component} from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import soryBy from 'sort-by';

class ListContacts extends Component{
  static propTypes = {
    handleRemove: PropTypes.array.isRequired,
    contacts: PropTypes.func.isRequired
  }
  state = {
    query: "",
  }
  handleChange= (e) => {
   this.setState({query: e.target.value});
  }
  render() {
    let showingContact = [];
    if (this.state.query){
       const match = new RegExp(escapeRegExp(this.state.query), 'i');
       showingContact = this.props.contacts.filter((contact) => {
         match.test(contact.name);
       });
    } else {
       showingContact = this.props.contacts;
    }
    return (
      <div className="list-contacts">
        <div className="list-contact-top">
          <input
            className="search-contacts"  
            type="text" 
            className="search-contacts"
            value={this.state.query}
            onChange={this.handleChange}
          /> 
        </div>
       <ol className="contact-list">
        {
          showingContact.map(contact=> (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                className="contact-remove"
                onClick={this.props.handleRemove.bind(null, contact)}
              >remove</button>
            </li>
          ))
        }
      </ol> 
 
      </div>
    );
  }
}

export default ListContacts
