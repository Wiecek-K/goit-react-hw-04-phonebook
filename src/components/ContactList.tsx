import type { ContactI } from "../types/Type";
interface ContactListProps {
  contacts: ContactI[];
  onDeleteContact(id: string): void;
}

export const ContactList = ({
  contacts,
  onDeleteContact,
}: ContactListProps) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {`${name}:   ${number}`}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
