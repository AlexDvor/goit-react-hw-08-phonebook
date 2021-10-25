import { Container } from '../../components/Container/Container';
import { ContactBox } from './ContactPage.styled';
import ContactList from '../../components/ContactList/ContactList';
import ContactModal from '../../components/ContactModal/ContactModal';

export default function ContactPage() {
  return (
    <Container>
      <ContactBox>
        <ContactModal />
        <ContactList />
      </ContactBox>
    </Container>
  );
}
