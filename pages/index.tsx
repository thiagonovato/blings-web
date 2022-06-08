import type { NextPage } from 'next';
import Form from '../components/Form';
import GridComponnent from '../components/Grid';
import TitleComponent from '../components/Title';
import { Container } from '../styles/styles';
const Home: NextPage = () => {
  return (
    <Container>
      <Form />
      <TitleComponent />
      <GridComponnent />
    </Container>
  );
};

export default Home;
