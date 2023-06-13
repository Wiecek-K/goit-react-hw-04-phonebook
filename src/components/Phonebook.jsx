import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList';
import Filter from './Filter';
import ContactFormt from './ContactForm';

class Phonebook extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }



  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isContactExist = this.state.contacts.some(
      contact => contact.name === name
    );
    if (isContactExist) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      }));
      form.reset();
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(obj => obj.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactFormt onSubmit={this.handleSubmit} />
        <h3>Contacts</h3>
        <Filter onInputChange={this.handleInputChange} />
        <ContactList
          contacts={
            !this.state.filter ? this.state.contacts : this.filterContacts()
          }
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default Phonebook;
