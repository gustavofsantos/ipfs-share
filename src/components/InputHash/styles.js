import styled from 'styled-components';
import colors from '../../layout/colors';

export const Container = styled.div`
  background: ${colors.backgroundCard};
  border: 1px solid #ddd;
  border-radius: 6px;

  input {
    width: 100%;
    padding: 15px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    border: none;
    border-radius: 6px;
    outline: none;
    color: ${colors.foreground};
  }
`;