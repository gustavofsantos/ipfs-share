import React, { useState } from 'react';
import { Container } from './styles';

export default function InputHash(props) {

  const [ hash, setHash ] = useState('');

  function handleChange(ev) {
    const { value } = ev.target;
    setHash(value);
  }

  async function handleGet(ev) {
    ev.preventDefault();
    props.onAddHash(hash);
  }

  return (
    <Container>
      <form onSubmit={handleGet}>
        <input 
          type="text"
          onChange={handleChange}
          value={hash}
          placeholder="Paste your IPFS CID here" 
        />
      </form>
      {/* <button onClick={handleGet}>Get</button> */}
    </Container>
  )
}