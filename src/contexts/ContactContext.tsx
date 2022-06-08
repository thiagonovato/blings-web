import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Contact {
  name: string;
  age: number;
  phone_number: string;
  address: string;
  picture: string;
}

interface IState {
  contacts: Contact[];
  searchContacts: () => void;
  loading: boolean;
}

interface IProps {
  children?: JSX.Element | JSX.Element[];
}

const ContactContext = createContext({} as IState);

export const useContact = function () {
  return useContext(ContactContext);
};
export const ContactProvider = ({ children }: IProps) => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = React.useState<Contact[]>([]);

  useEffect(() => {
    getContacts();
  }, []);

  async function searchContacts(): Promise<void> {
    try {
      setLoading(true);
      setContacts([]);
      const response = await api.get('/contacts');

      setContacts(response.data);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function getContacts() {
    const response = await api.get('/contacts');
    setContacts(response.data);
  }

  return (
    <ContactContext.Provider value={{ contacts, searchContacts, loading }}>
      {children}
    </ContactContext.Provider>
  );
};
