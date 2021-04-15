import styled from 'styled-components';
import Typography from '../Typography/Typography';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: #ececec;

  & div {
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ value }) => value}%;
    height: 1rem;
    border-radius: 0.5rem;
    background-image: linear-gradient(110deg, #4734e1 0%, #8e27ea 100%);
    transition: width 0.5s;
  }
`;

const Progress = ({ value }) => (
  <>
    <Typography size='0.75'>Progress</Typography>
    <Container value={value}>
      <div />
    </Container>
  </>
);

export default Progress;
