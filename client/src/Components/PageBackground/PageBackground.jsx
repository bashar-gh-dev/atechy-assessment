import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

export const Image = styled.img`
  position: absolute;
  display: none;
  ${({ zi }) => (zi ? 'z-index: 5;' : 'z-index: -5;')}

  ${({ top, left, rotate }) =>
    `top: ${top}%; left: ${left}%; transform: rotate(${rotate}deg);`}

  @media screen and (max-width: 959px) {
    ${({ layout }) => (layout === 'm' ? 'display: inline-block;' : '')}
  }

  @media screen and (min-width: 960px) {
    ${({ layout }) => (layout === 'd' ? 'display: inline-block;' : '')}
  }
`;
