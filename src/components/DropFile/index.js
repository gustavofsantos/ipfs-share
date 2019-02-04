import React from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

function renderDragMessage(isDragActive, isDragReject) {
  if (!isDragActive) {
    return (
      <UploadMessage>
        Drop your files here
      </UploadMessage>
    )
  }

  if (isDragReject) {
    return (
      <UploadMessage type="error">
        File not supported
      </UploadMessage>
    )
  }

  return (
    <UploadMessage type="success">
      Release your files here
    </UploadMessage>
  )
};

function DropFile(props) {
  const { onDrop } = props;
  
  return (
    <Dropzone onDropAccepted={onDrop}>
      {
        ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            { ...getRootProps() }
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input { ...getInputProps() } />
            { renderDragMessage(isDragActive, isDragReject) }
          </DropContainer>
        )
      }
    </Dropzone>
  );
}

export default DropFile;