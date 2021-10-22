import ContactList from './ContactList';
import { Container } from '../Container/Container';
import { ContactBox } from './Contact.styled';
import AddButton from '../AddButton/AddButton';
import Form from '../Form/Form';

function Contact() {
  return (
    <Container>
      <ContactBox>
        <AddButton />
        {/* <Form /> */}
        <ContactList />
      </ContactBox>
    </Container>
  );
}

export default Contact;
