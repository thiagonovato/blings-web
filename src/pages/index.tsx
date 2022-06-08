import type { NextPage } from 'next';
import { Container } from '../../styles/styles';
import Form from '../components/Form';
import GridComponnent from '../components/Grid';
import TitleComponent from '../components/Title';
const Home: NextPage = () => {
  return (
    <Container>
      <TitleComponent />
      <Form />
      <GridComponnent />
    </Container>
  );
};

export default Home;
