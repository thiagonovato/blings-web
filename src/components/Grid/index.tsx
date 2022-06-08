import { useContact } from '../../contexts/ContactContext';
import Card from '../Card';
import { Container, ContainerGrid, TextResult } from './styles';
const GridComponnent = () => {
  const { loading, contacts } = useContact();

  return (
    <Container>
      {
        <TextResult>
          {!loading &&
            (contacts.length === 0
              ? 'No results, please review your search or try a different one'
              : `${contacts.length} ${
                  contacts.length === 1 ? 'result' : 'results'
                } found`)}
        </TextResult>
      }
      <ContainerGrid>
        {contacts &&
          contacts.map((contact) => (
            <Card key={contact.name} contact={contact} />
          ))}
      </ContainerGrid>
    </Container>
  );
};

export default GridComponnent;
