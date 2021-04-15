import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';
import { Image } from '../../Components/PageBackground/PageBackground';
import { page7 } from '../Backgrounds';

const Step6 = ({ state, setState, educationList }) => {
  const [education, setEducation] = useState(state.userInfo.education);

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        education: education
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      {page7.map((img) => (
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
        <Typography>What is your level of education ?</Typography>
      </Box>

      <Box p xs={12}>
        {educationList.map((educationItem) => (
          <StyledButton
            key={uuidv4()}
            col={education === educationItem.name ? 'pur' : 'white'}
            onClick={() => setEducation(educationItem.name)}
          >
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page7/${educationItem.icon}.svg`}
              alt={educationItem.name}
            />
            {' ' + educationItem.name}
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

export default Step6;
