import React, { useState } from 'react';
import { useContact } from '../../contexts/ContactContext';
import { Container } from './styles';

const Form = () => {
  const { searchContacts, loading } = useContact();
  const [arrAllSetIntervals, setArrAllSetIntervals] = useState<number>(0);

  async function handleSubmit(event: any) {
    event.preventDefault();

    clearInterval(arrAllSetIntervals);

    const timeoutId = setTimeout(() => {
      searchContacts(event.target.value);
      setArrAllSetIntervals(0);
    }, 2000);

    setArrAllSetIntervals(Number(timeoutId));
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        placeholder='Ex.: John 33'
        onChange={(e) => handleSubmit(e)}
        disabled={loading}
      />
    </Container>
  );
};

export default Form;
