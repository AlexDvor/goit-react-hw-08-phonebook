import ContactList from './ContactList';
import { Container } from '../Container/Container';
import { ContactBox } from './Contact.styled';
import AddButton from '../Modal/Modal';

function Contact() {
  return (
    <Container>
      <ContactBox>
        <AddButton />
        <ContactList />
      </ContactBox>
    </Container>
  );
}

export default Contact;
