import React from 'react';
import "../styles/tailwind.css";
import { XCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import DisplayContact from './DisplayContact';

const Homepage: React.FC = () => {

  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  console.log(contacts);
  return (
    <div className="min-h-screen flex flex-col gap-12 items-center justify-center bg-slate-200">
        
      <Link to="/createcontact">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 text-lg rounded-lg">
          Create Contact
        </button>
      </Link>
      
      {
        contacts.length===0 ? (
          <div className="flex bg-blue-300 p-3 md:p-8 rounded-lg gap-4 mx-4 ">
          <div className="mt-4">
            <XCircleIcon className="md:h-12 md:w-12 h-10 w-10 text-red-500 inline-block" />
          </div>
          <div className="flex flex-col justify-start">
              <div className='md:text-4xl text-xl font-bold mb-4'>No Contact Found</div>
              <div className="text-lg text-gray-600 mb-8">Please add contact from Create Contact button</div>
          </div>
          </div>  
        ): (
          <>
          <h2 className='text-xl underline font-semibold '>Contacts</h2>
          <div className="flex bg-blue-300  p-3 md:p-8 rounded-lg gap-4 mx-4 flex-wrap items-center justify-center w-1/2 ">
          { contacts.map((contact) => (
          <DisplayContact key={contact.id} contact={contact} />
        ))} 
        </div>
        </>)
      }
             
      </div>
  );
};

export default Homepage;
