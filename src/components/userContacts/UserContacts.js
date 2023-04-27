import { useSelector } from 'react-redux';
import { selectItems, selectFilter } from 'redux/contacts/selectors';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

import AddContacts from '../addContact/AddContact';
import Contacts from '../contacts/Contacts';
import Filter from '../filter/Filter';

const UserContacts = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectItems);

  const setFilteredArr = () => {
    if (filter.length > 0) {
      const newArr = contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );

      return newArr;
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <AddContacts />

      <h2>Contacts</h2>
      <Filter setFilteredArr={setFilteredArr} />
      <Contacts setFilteredArr={setFilteredArr} />
    </div>
  );
};

export default UserContacts;
