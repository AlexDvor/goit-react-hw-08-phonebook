import ContactList from './ContactList';
import { Container } from '../Container/Container';
import { ContactBox } from './Contact.styled';
import Form from '../Form/Form';

function Contact() {
  return (
    <Container>
      <ContactBox>
        <Form />
        <ContactList></ContactList>
      </ContactBox>
    </Container>
  );
}

export default Contact;
