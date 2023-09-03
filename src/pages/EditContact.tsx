import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { RootState } from '../redux/store';
import { editContact } from '../redux/Slices/contactSlice';
import { useNavigate, useParams } from 'react-router-dom';


interface Contact {
    id:number,
    firstName: string;
    lastName: string;
    status: string;
  }


const EditContact: React.FC = () => {

    const [editedContact, setEditedContact] = useState<Contact | undefined>(undefined);
    const contacts = useSelector((state: RootState) => state.contacts.contacts);


      const dispatch = useDispatch();
      const navigate = useNavigate();

      const {id} = useParams<{  id?: string }>();
      const contactId = id ? parseInt(id) : undefined; 

      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEditedContact((prevContact) => ({
            ...prevContact!,
            [name]: value,
          }));
      };

      useEffect(() => {
        const contact = contacts.find((contact) => contact.id === contactId);
        if (contact) {
          setEditedContact(contact);
        } else {

        //   history.push('/not-found');
        }
      }, [contactId, contacts, history]);

      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(editedContact){
            console.log('Contact data edited:', editedContact);
            dispatch(editContact(editedContact));
              navigate("/");  
        }
      
      };

      if (!editedContact) {
        return <div>Loading...</div>;
      }

  return (
    <div className="min-h-screen  bg-slate-200 flex flex-col items-center justify-center gap-8">
          <h2 className='text-2xl font-bold text-center text-blue-800 p-2 underline'>Edit Contact Screen</h2>
        <div className='flex flex-col gap-12 items-center justify-center  bg-blue-300 p-3 md:p-8 rounded-lg  mx-4 w-1/2'>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">  First Name</label>
            <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
             leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={editedContact?.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={editedContact?.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Status
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status"
            name="status"
            value={editedContact?.status}
            onChange={handleChange}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="flex items-center justify-center mt-12">
          <button
            className="bg-blue-600 hover:bg-white text-white hover:text-blue-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Edited Contact
          </button>
        </div>
      </form>
        </div>
     
    </div>
  )
}

export default EditContact
