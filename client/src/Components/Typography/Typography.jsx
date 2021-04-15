import styled from 'styled-components';

const Typography = styled.p`
  font-size: 1rem;
  font-family: Sora, sans-serif, Roboto, Arial;
  font-weight: 400;
  color: #141212;

  ${({ color, size, weight, family, display }) => `
  ${color ? `color: ${color};` : ''}
  ${size ? `font-size: ${size}rem;` : ''}
  ${family ? `font-family: ${family};` : ''}
  ${weight ? `font-weight: ${weight};` : ''}
  `}
`;

export default Typography;
