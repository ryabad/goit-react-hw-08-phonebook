import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { deleteContactThunk, fetchContactThunk } from 'store/user/userService';
import { selectError, selectIsLoading } from 'store/user/selectors';
import { selectFilteredUSers } from 'store/selectors';

import css from './ContactList.module.css';
import Modal from 'components/Modal/Modal';

const ContactList = () => {
  const contacts = useSelector(selectFilteredUSers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  //-------------------Modal----------------------
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleOpen = id => {
    const selectedContact = contacts.find(el => el.id === id);
    setSelectedContact(selectedContact);
    setIsShowModal(true);
  };

  const handleClose = () => {
    setIsShowModal(false);
  };
  //----------------------------------------------

  const dispatch = useDispatch();

  const deletingContact = id => {
    dispatch(deleteContactThunk(id));
  };

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <p>Loading...</p>}
      {contacts && contacts.length > 0 && (
        <div className={css.wrap}>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts
                .sort((a, b) => b.id - a.id)
                .map(el => (
                  <tr key={el.id} className={css.trList}>
                    <td>{el.name}</td>
                    <td>{el.number}</td>
                    <td className={css.tdButtons}>
                      <button
                        type="button"
                        onClick={() => handleOpen(el.id)}
                        className={css.deleteBtn}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletingContact(el.id)}
                        className={css.deleteBtn}
                      >
                        Delete
                      </button>
                      {isShowModal && (
                        <Modal close={handleClose} contact={selectedContact} />
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ContactList;
