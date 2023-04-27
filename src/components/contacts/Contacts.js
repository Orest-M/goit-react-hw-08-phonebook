import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectItems } from 'redux/contacts/selectors';

import ContactsItem from 'components/contactsItem/ContactsItem';

import css from './contacts.module.css';

const Contacts = ({ setFilteredArr }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const data = setFilteredArr() ? setFilteredArr() : contacts;

  const deleteItem = e => {
    if (e.target.dataset.id) {
      dispatch(deleteContact(e.target.dataset.id));
    }
  };

  return (
    <div>
      <ul onClick={deleteItem} className={css.contacts}>
        {data.map(({ name, phone, id }) => (
          <ContactsItem key={id} name={name} number={phone} id={id} />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  setFilteredArr: PropTypes.func,
};

export default Contacts;
