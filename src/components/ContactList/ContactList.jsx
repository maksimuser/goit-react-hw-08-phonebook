import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getVisibleContact, deleteContact } from '../../redux/contacts';

import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul className={styles.ContactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteItem={onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    contacts: getVisibleContact(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
