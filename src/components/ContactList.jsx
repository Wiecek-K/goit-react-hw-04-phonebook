import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  render() {
    return (
      <ul>
        {this.props.contacts.map(({ id, name, number }) => (
          <li key={id}>
            {`${name}:   ${number}`}
            <button onClick={() => this.props.onDeleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
