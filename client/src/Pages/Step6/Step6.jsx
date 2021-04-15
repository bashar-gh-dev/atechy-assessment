import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';
import { Image } from '../../Components/PageBackground/PageBackground';
import { page6 } from '../Backgrounds';

const Step6 = ({ state, setState, savings }) => {
  const [saving, setSaving] = useState(state.userInfo.saving);

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        saving: saving
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      {page6.map((img) => (
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
        <Typography>Do you have any financial savings ?</Typography>
      </Box>

      <Box p xs={12}>
        {savings.map((savingsItem) => (
          <StyledButton
            key={uuidv4()}
            col={saving === savingsItem.name ? 'pur' : 'white'}
            onClick={() => setSaving(savingsItem.name)}
          >
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page6/${savingsItem.icon}.svg`}
              alt={savingsItem.name}
            />
            {' ' + savingsItem.name}
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
