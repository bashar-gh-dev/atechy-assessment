import styled from 'styled-components';

const ResponsiveBox = styled.div`
  ${({ position }) => (position ? `position: ${position};` : '')}
  ${({ top }) => (top ? `top: ${top};` : '')}
  ${({ left }) => (left ? `left: ${left};` : '')}
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ p }) => (p ? 'padding: 1rem;' : '')};
  ${({ xs }) => (xs === 'none' ? 'display: none' : 'display: block')};
  ${({ xs }) => (xs === 3 ? 'width: 25%' : '')};
  ${({ xs }) => (xs === 6 ? 'width: 50%' : '')};
  ${({ xs }) => (xs === 12 ? 'width: 100%' : '')};
  ${({ display }) => (display === 'none' ? 'display: none' : '')};
  ${({ flex }) => (flex ? 'display:flex; flex-wrap: wrap;' : '')}

  @media screen and (min-width: 960px) {
    ${({ md }) => (md === 3 ? 'width: 25%' : '')};
    ${({ md }) => (md === 6 ? 'width: 50%' : '')};
    ${({ md }) => (md === 12 ? 'width: 100%' : '')};
    ${({ md }) => (md === 'none' ? 'display: none' : 'display: block')};
    ${({ display }) => (display === 'none' ? 'display: none' : '')};
    ${({ flex }) => (flex ? 'display:flex;' : '')}
  }
`;

export default ResponsiveBox;
