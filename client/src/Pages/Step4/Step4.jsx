import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';
import { Image } from '../../Components/PageBackground/PageBackground';
import { page4 } from '../Backgrounds';

const Step4 = ({ state, setState, availableInd }) => {
  const [industries, setIndustries] = useState(state.userInfo.industries);
  const check = (item) => {
    return industries.includes(item);
  };

  const updateInd = (item) => {
    if (!check(item)) {
      const arr = [...industries, item];
      setIndustries(arr);
    } else {
      const arr = industries.filter((ind) => ind !== item);
      setIndustries(arr);
    }
  };

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        industries: industries
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      {page4.map((img) => (
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
        <Typography>What industries would you prefer to work in ?</Typography>
      </Box>

      <Box p xs={12}>
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {availableInd.map((indus) => (
            <StyledButton
              key={uuidv4()}
              col={check(indus.name) ? 'pur' : 'white'}
              onClick={() => updateInd(indus.name)}
            >
              <img
                src={`${process.env.REACT_APP_RES_PATH}/icons/page4/${indus.icon}.svg`}
                alt={indus.name}
              />
              {' ' + indus.name}
            </StyledButton>
          ))}
        </Box>
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

export default Step4;
