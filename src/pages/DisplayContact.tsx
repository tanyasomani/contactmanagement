import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/Slices/contactSlice';
import { useNavigate } from 'react-router-dom';

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    status: string;
  }

interface DisplayContactProps {
  contact: Contact ;
}

const DisplayContact: React.FC<DisplayContactProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEditContact = ()=>{
    navigate(`/${contact.id}/editcontact`)
  }

  return (
    <div className="border p-6 my-4 bg-blue-200 rounded-lg ">
      <p className="text-xl font-semibold">
        Name: {contact.firstName} {contact.lastName}
      </p>
      <p className="text-gray-600">Status: {contact.status}</p>
      <div className="mt-2">
        <button className="bg-green-500 text-white px-3 py-1 rounded mr-2" onClick={handleEditContact}>Edit</button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={handleDeleteContact}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayContact;
