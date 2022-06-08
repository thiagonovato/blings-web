import { useState } from 'react';
import { InputComponent } from '../Input';
import { Container, Title } from './styles';

const Form = () => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <Title>Pesquisa</Title>
      <InputComponent value={value} />
    </Container>
  );
};

export default Form;
