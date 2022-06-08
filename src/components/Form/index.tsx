import React, { useState } from 'react';
import { useContact } from '../../contexts/ContactContext';
import { Container } from './styles';

const Form = () => {
  const { searchContacts, loading } = useContact();

  const [text, setText] = useState('');
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    searchContacts(text);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        placeholder='Ex.: John 33'
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
      />
      <button type='submit'>{loading ? 'Wait...' : 'Search'}</button>
    </Container>
  );
};

export default Form;
