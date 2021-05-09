import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/contacts';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import ContactForm from '../components/ContactForm';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm />
        <div className="Contacts">
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(null, mapDispatchToProps)(ContactsPage);
