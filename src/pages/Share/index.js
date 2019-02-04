import React, { useState } from 'react';
import { Container, Content } from './styles';
import DropFile from '../../components/DropFile';
import ListFiles from '../../components/ListFiles';
import Title from '../../components/Title';

import { addFile, addMetadata } from '../../lib/ipfs';


export default function Share() {
  const [files, setFiles] = useState([]);

  const handleDropFiles = async dropFiles => {
    const promiseFiles = await dropFiles.map(async file => {
      try {
        const fileHash = await addFile(file);

        const metadata = {
          name: file.name,
          size: file.size,
          hash: fileHash
        }

        const metadataHash = await addMetadata(metadata);
        return {
          metadataHash,
          file
        };
      } catch (e) {
        console.error(e);
      }
    });

    const resolvedFiles = await Promise.all(promiseFiles);

    setFiles(files.concat(resolvedFiles));
  }

  return (
    <Container>
      <Title />
      <Content>
        <DropFile onDrop={handleDropFiles} />
        {
          !!files.length &&
            <ListFiles files={files} />
        }
      </Content>
    </Container>
  )
}