import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
          this.props.contacts.filter(contact => (contact.name.indexOf(this.state.query) !== -1), this)
          .map((contact) => (
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
