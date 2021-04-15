import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';
import { Image } from '../../Components/PageBackground/PageBackground';
import { page2 } from '../Backgrounds';

const Step2 = ({ state, setState, howLongList }) => {
  const [visited, setVisited] = useState(state.userInfo.visited);
  const [relatives, setRelatives] = useState(state.userInfo.relatives);
  const [howLong, setHowLong] = useState(state.userInfo.howLong);

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        visited,
        relatives,
        howLong
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      {page2.map((img) => (
        <Image
          src={`${process.env.REACT_APP_RES_PATH}/images/${img.img}.svg`}
          top={img.layout === 'm' ? (img.y * 100) / 913 : (img.y * 100) / 1080}
          left={img.layout === 'm' ? (img.x * 100) / 375 : (img.x * 100) / 1920}
          rotate={img.rotation}
          layout={img.layout}
          key={uuidv4()}
        />
      ))}
      <Box p xs={12}>
        <Typography>Have you ever visited dubai</Typography>
      </Box>

      <Box p xs={12}>
        <StyledButton
          col={visited ? 'white' : 'pur'}
          onClick={() => setVisited(false)}
        >
          <img
            src={`${process.env.REACT_APP_RES_PATH}/icons/page2/no.svg`}
            alt='no'
          />
          {' No'}
        </StyledButton>
        <StyledButton
          col={visited ? 'pur' : 'white'}
          onClick={() => setVisited(true)}
        >
          <img
            src={`${process.env.REACT_APP_RES_PATH}/icons/page2/yes.svg`}
            alt='yes'
          />
          {' Yes'}
        </StyledButton>
      </Box>

      <Box p xs={12}>
        <Typography>Do you have any friends or family in Dubai?</Typography>
      </Box>

      <Box p xs={12}>
        <StyledButton
          col={relatives ? 'white' : 'pur'}
          onClick={() => setRelatives(false)}
        >
          <img
            src={`${process.env.REACT_APP_RES_PATH}/icons/page2/no.svg`}
            alt='no'
          />
          {' No'}
        </StyledButton>
        <StyledButton
          col={relatives ? 'pur' : 'white'}
          onClick={() => setRelatives(true)}
        >
          <img
            src={`${process.env.REACT_APP_RES_PATH}/icons/page2/yes.svg`}
            alt='yes'
          />
          {' Yes'}
        </StyledButton>
      </Box>

      <Box p xs={12}>
        <Typography>How long do you want to stay in Dubai ?</Typography>
      </Box>

      <Box p xs={12}>
        {howLongList.map((long) => (
          <StyledButton
            key={uuidv4()}
            col={long.name === howLong ? 'pur' : 'white'}
            onClick={() => setHowLong(long.name)}
          >
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page2/cal.svg`}
              alt={long.name}
            />
            {' ' + long.name}
          </StyledButton>
        ))}
      </Box>

      <Box p xs={12}>
        <StyledButton
          onClick={() =>
            setState({
              ...state,
              currentStep: state.currentStep - 1,
              progress: state.progress - 11
            })
          }
        >
          Back
        </StyledButton>
        <StyledButton col='pur' onClick={(e) => confirmStep(e)}>
          Next
        </StyledButton>
      </Box>
    </>
  );
};

export default Step2;
