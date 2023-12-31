import React, {useState, ChangeEvent, FormEvent} from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/Slices/contactSlice';
import { useNavigate } from 'react-router-dom';

interface FormData {
    firstName: string;
    lastName: string;
    status: string;
  }

const CreateContact: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        status: 'active', 
      });

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        dispatch(addContact({ id: Date.now(),
          firstName: formData.firstName,
          lastName: formData.lastName,
          status: formData.status}))
          navigate("/");
         
      };

  return (
    <div className="min-h-screen  bg-slate-200 flex flex-col items-center justify-center gap-8">
          <h2 className='text-2xl font-bold text-center text-blue-800 p-2 underline'>Create Contact Screen</h2>
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
            value={formData.firstName}
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
            value={formData.lastName}
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
            value={formData.status}
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
            Save Contact
          </button>
        </div>
      </form>
        </div>
     
    </div>
  )
}

export default CreateContact
