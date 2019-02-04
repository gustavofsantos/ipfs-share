import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from '../Share/styles';
import InputHash from '../../components/InputHash';
import Title from '../../components/Title';
import ListDlFiles from '../../components/ListDlFiles';
import { getMetadata } from '../../lib/ipfs';
import LinkButton from '../../components/LinkButton';


export default function Downloader() {

  const [ files, setFiles ] = useState([]);

  async function onAddHash(hash) {
    const metadataString = await getMetadata(hash);
    const metadata = JSON.parse(metadataString);

    console.log('metadata', metadata);
    setFiles(files.concat(metadata));
  }

  return (
    <Container>
      <Title>
        IPFS Downloader
      </Title>

      <Content>
        <InputHash onAddHash={onAddHash} />

        {
          !!files.length &&
            <ListDlFiles files={files} />
        }
      </Content>

      <Link 
        to="/share"
      >
        <LinkButton>
          Share
        </LinkButton>
      </Link>
    </Container>
  );
}