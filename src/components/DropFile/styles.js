import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #13BD95;
`;

const dragReject = css`
  border-color: #D61242;
`;

const messageColors = {
  default: '#999',
  error: '',
  success: ''
};

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px;
`;