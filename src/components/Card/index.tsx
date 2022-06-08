import { Avatar, Container, Description, SubContainer, Title } from './styles';

interface IContact {
  contact: {
    name: string;
    age: number;
    phone_number: string;
    address: string;
    picture: string;
  };
}

const Card = ({ contact }: IContact) => {
  return (
    <Container>
      <Avatar src={`./images/${contact.picture}`} alt='Avatar'></Avatar>
      <SubContainer>
        <Title>
          {contact.name}, {contact.age}, {contact.phone_number}
        </Title>
        <Description>{contact.address}</Description>
      </SubContainer>
    </Container>
  );
};

export default Card;
