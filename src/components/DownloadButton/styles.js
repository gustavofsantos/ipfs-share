import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #163EC2;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 16px rgba(113, 144, 194, 0.4);

  & :hover {
    box-shadow: 0 4px 16px rgba(113, 144, 194, 0.8);
  }
`;