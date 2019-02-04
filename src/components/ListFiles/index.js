import React from 'react';
import { Container, FileInfo } from './styles';

export default function ListFiles(props) {
  const { files } = props;

  return (
    <Container>
      {
        files.map((file, index) => (
          <li key={index}>
            <FileInfo>
              <div>
                <strong>
                  {file.file.name}
                </strong>

                <span>
                  {file.file.size} bytes
                </span>

                <span>
                  { file.metadataHash }

                  <button onClick={() => console.log('show qr code')}>
                    QR Code
                  </button>
                </span>
              </div>
            </FileInfo>
          </li>
        ))
      }
    </Container>
  );
}