import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';
import { Image } from '../../Components/PageBackground/PageBackground';
import { page3 } from '../Backgrounds';

const Step3 = ({ state, setState, whyList }) => {
  const [why, setWhy] = useState(state.userInfo.why);

  const check = (item) => {
    return why.includes(item);
  };

  const updateWhy = (item) => {
    if (!check(item)) {
      const arr = [...why, item];
      setWhy(arr);
    } else {
      const arr = why.filter((ind) => ind !== item);
      setWhy(arr);
    }
  };

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        why: why
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      {page3.map((img) => (
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
        <Typography>Why do you want to come to Dubai?</Typography>
      </Box>

      <Box p xs={12}>
        {whyList.map((why) => (
          <StyledButton
            key={uuidv4()}
            col={check(why.name) ? 'pur' : 'white'}
            onClick={() => updateWhy(why.name)}
          >
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page3/${why.icon}.svg`}
              alt={why.name}
            />
            {' ' + why.name}
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

export default Step3;
