import { Container } from '../../components/Container/Container';
import ContactList from '../../components/ContactList/ContactList';
import { ContactBox } from './ContactPage.styled';
import CreateContactModal from '../../components/CreateContactModal/CreateContactModal';

export default function ContactPage() {
  return (
    <Container>
      <ContactBox>
        <CreateContactModal />
        <ContactList />
      </ContactBox>
    </Container>
  );
}
