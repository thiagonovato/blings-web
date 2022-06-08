import type { NextPage } from 'next';
import { GridComponnent } from './components/Grid';
import { TitleComponent } from './components/Title';
import { Container } from './styles';
const Home: NextPage = () => {
  return (
    <Container>
      <TitleComponent />
      <GridComponnent />
    </Container>
  );
};

export default Home;
