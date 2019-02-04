import styled from 'styled-components';
import sizes from '../../layout/sizes';
import colors from '../../layout/colors';

export const Button = styled.button`
  width: 100%;
  max-width: ${sizes.layout.maxWidth};
  min-width: 100%;

  border: none;
  border-radius: 6px;
  padding: 10px;

  cursor: pointer;

  background: ${colors.backgroundCard};
  color: ${colors.foreground};
  font-weight: bold;
`;