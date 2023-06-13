import css from "./ContactForm.module.css";

interface ContactFormProps {
  onInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}
// const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{

// }
export const ContactForm = ({ onSubmit, onInputChange }: ContactFormProps) => (
  <form className={css.contactForm} onSubmit={onSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onInputChange}
      />
    </label>
    <label>
      Nr
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onInputChange}
      />
    </label>
    <button type="submit">Add Contact</button>
  </form>
);
