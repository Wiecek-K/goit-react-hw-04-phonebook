import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { Filter } from "./components/Filter";
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";

import type { ContactI, FormData } from "./types/Type";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState<ContactI[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    number: "",
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contactsData = localStorage.getItem("contacts");
    console.log(contactsData);
    if (contactsData?.length) {
      const parseContacts: ContactI[] = JSON.parse(contactsData);
      if (parseContacts) {
        setContacts(parseContacts);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const isContactExist = contacts.some(
      (contact) => contact.name === formData.name
    );
    if (isContactExist) {
      alert(`${formData.name} is already in contacts`);
    } else {
      setContacts((prevState) => [
        ...prevState,
        {
          id: nanoid(),
          name: formData.name,
          number: formData.number,
        },
      ]);
      setFormData({ name: "", number: "" });
    }
  };
  const filterContacts = () =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const deleteContact = (id: string) => {
    setContacts((prevState) => prevState.filter((obj) => obj.id !== id));
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} onInputChange={handleFormChange} />
      <h3>Contacts</h3>
      <Filter onInputChange={handleFilterChange} />
      <ContactList
        contacts={!filter ? contacts : filterContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;
