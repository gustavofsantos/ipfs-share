import React from 'react';
import { Container, FileInfo } from '../ListFiles/styles';
import { downloadRawFile } from '../../lib/ipfs';
import DownloadButton from '../DownloadButton';

function downloadFile(file) {
  const { name, hash } = file;

  return async function() {
    const content = await downloadRawFile(hash);
    const byteArray = new Uint8Array(content);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    window.saveAs(blob, name);
  }
}

export default function ListDlFiles(props) {
  const { files } = props;

  return (
    <Container>
      {
        files.map((file, index) => (
          <li key={index}>
            <FileInfo>
              <div>
                <strong>
                  {file.name}
                </strong>

                <span>
                  {file.size} bytes
                </span>
              </div>
            </FileInfo>

            <DownloadButton onClick={downloadFile(file)} />
          </li>
        ))
      }
    </Container>
  )
}