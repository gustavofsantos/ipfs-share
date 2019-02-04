import styled from 'styled-components';
import colors from '../../layout/colors';

export const Container = styled.div`
  background: ${colors.backgroundCard};

  input {
    border: 1px solid #ddd;
    border-radius: 6px;
    width: 100%;
    padding: 15px;
    font-size: 14px;
    font-weight: 400;
    border: none;
    outline: none;
    color: ${colors.foreground};
  }
`;