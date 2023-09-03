import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>)=>{
       const editedContact = action.payload;
       const existingContactId = state.contacts.findIndex(
        (contact) => contact.id === editedContact.id
      );
      if (existingContactId !== -1) {
        state.contacts[existingContactId] = editedContact;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact, editContact} = contactSlice.actions;
export default contactSlice.reducer;
