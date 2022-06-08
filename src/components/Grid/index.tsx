import { useContact } from '../../contexts/ContactContext';
import Card from '../Card';
import { Container, ContainerGrid, TextResult } from './styles';
const GridComponnent = () => {
  const { loading, contacts } = useContact();

  return (
    <Container>
      {!loading && <TextResult>{contacts.length} resultados</TextResult>}
      <ContainerGrid>
        {contacts &&
          contacts.length &&
          contacts.map((contact) => (
            <Card key={contact.name} contact={contact} />
          ))}
      </ContainerGrid>
    </Container>
  );
};

export default GridComponnent;
