import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';
import { Image } from '../../Components/PageBackground/PageBackground';
import { page5 } from '../Backgrounds';

const Step5 = ({ state, setState, availableInt }) => {
  const [interests, setInterests] = useState(state.userInfo.interests);
  const check = (item) => {
    return interests.includes(item);
  };

  const updateInt = (item) => {
    if (!check(item)) {
      const arr = [...interests, item];
      setInterests(arr);
    } else {
      const arr = interests.filter((int) => int !== item);
      setInterests(arr);
    }
  };

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        interests: interests
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      {page5.map((img) => (
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
        <Typography>What are your interests ?</Typography>
      </Box>

      <Box p xs={12}>
        {availableInt.map((int) => (
          <StyledButton
            key={uuidv4()}
            col={check(int.name) ? 'pur' : 'white'}
            onClick={() => updateInt(int.name)}
          >
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page5/${int.icon}.svg`}
              alt={int.name}
            />
            {' ' + int.name}
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

export default Step5;
