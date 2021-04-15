import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 6rem;
  height: 3rem;
  margin: 0rem 1rem 0.5rem 0;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 1.5rem;
  font: 400 1rem Sora;

  &:hover {
    cursor: pointer;
  }

  ${({ col }) => {
    switch (col) {
      case 'pur':
        return `background-image: linear-gradient(110deg, #4734e1 0%, #8e27ea 100%);
                color: #ffffff;`;
      default:
        return `background-image: linear-gradient(135deg, #EFEFEF 0%, #EFEFEF 100%); 
                color: #141212;`;
    }
  }}
`;

export default StyledButton;
