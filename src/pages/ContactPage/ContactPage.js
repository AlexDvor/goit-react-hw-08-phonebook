import { Container } from '../../components/Container/Container';
import ContactList from '../../components/ContactList/ContactList';
import { ContactBox } from './ContactPage.styled';
import AddButton from '../../components/Modal/Modal';

export default function ContactPage() {
  return (
    <Container>
      <ContactBox>
        <AddButton />
        <ContactList />
      </ContactBox>
    </Container>
  );
}
