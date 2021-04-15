import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Card from '../../Components/Card/Card';
import Box from '../../Components/Box/Box';

const Step9 = ({ state, setState, fetchedData }) => {
  const {
    firstName,
    lastName,
    nationality,
    country,
    gender,
    dob,
    contact,
    email,
    visited,
    relatives,
    howLong,
    why,
    industries,
    interests,
    education
  } = state.userInfo;

  const confirmStep = (e) => {
    localStorage.setItem('mydata', JSON.stringify(state.userInfo));
    const storedData = JSON.parse(localStorage.getItem('mydata'));
    console.log('storedData:', storedData);
  };

  return (
    <>
      <Box p xs={12}>
        <Typography>Complete review your application</Typography>
      </Box>

      <Box p xs={12}>
        <Card>
          <Typography color='#4D33E2'>Basic information</Typography>
          <br />
          <Box>
            {[
              {
                name: 'Name',
                value: firstName + ' ' + lastName
              },
              { name: 'Nationality', value: nationality },
              {
                name: 'Country of residence',
                value: country
              },
              { name: 'Gender', value: gender },
              { name: 'Date of birth', value: dob },
              { name: 'Contact Number', value: contact },
              { name: 'Email', value: email }
            ].map((item) => (
              <div key={uuidv4()}>
                <Typography key={uuidv4()}>
                  {item.name + ' : ' + item.value}
                </Typography>
              </div>
            ))}
          </Box>
        </Card>
      </Box>

      <Box p xs={12}>
        <Card>
          <Typography color='#4D33E2'>Questionnaire</Typography>
          <br />
          <Typography>Have you ever visited Dubai?</Typography>
          <StyledButton col='pur'>
            {visited ? (
              <>
                <img
                  src={`${process.env.REACT_APP_RES_PATH}/icons/page2/yes.svg`}
                  alt='yes'
                />
                {' Yes'}
              </>
            ) : (
              <>
                <img
                  src={`${process.env.REACT_APP_RES_PATH}/icons/page2/no.svg`}
                  alt='no'
                />
                {' No'}
              </>
            )}
          </StyledButton>
          <Typography>Do you have any friends or family in Dubai?</Typography>
          <StyledButton col='pur'>
            {relatives ? (
              <>
                <img
                  src={`${process.env.REACT_APP_RES_PATH}/icons/page2/yes.svg`}
                  alt='yes'
                />
                {' Yes'}
              </>
            ) : (
              <>
                <img
                  src={`${process.env.REACT_APP_RES_PATH}/icons/page2/no.svg`}
                  alt='no'
                />
                {' No'}
              </>
            )}
          </StyledButton>
          <Typography>
            How long do you want to stay in stay in Dubai?
          </Typography>
          <StyledButton col='pur'>
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page2/cal.svg`}
              alt={howLong}
            />
            {' ' + howLong}
          </StyledButton>
          {why.length > 0 ? (
            <>
              <Typography>Why do you want to come to Dubai ?</Typography>
              <Box>
                {why.map((item) => (
                  <StyledButton col='pur' key={uuidv4()}>
                    <img
                      src={`${process.env.REACT_APP_RES_PATH}/icons/page3/${
                        fetchedData.whyList.filter(
                          (list) => list.name === item
                        )[0].icon
                      }.svg`}
                      alt={item}
                    />
                    {' ' + item}
                  </StyledButton>
                ))}
              </Box>
            </>
          ) : null}
          {industries.length > 0 ? (
            <>
              <Typography>
                What industries would you prefer to work in?
              </Typography>
              <Box>
                {industries.map((item) => (
                  <StyledButton col='pur' key={uuidv4()}>
                    <img
                      src={`${process.env.REACT_APP_RES_PATH}/icons/page4/${
                        fetchedData.industries.find(
                          (list) => list.name === item
                        ).icon
                      }.svg`}
                      alt={item}
                    />
                    {' ' + item}
                  </StyledButton>
                ))}
              </Box>
            </>
          ) : null}
          {interests.length > 0 ? (
            <>
              <Typography>What are your interests?</Typography>
              <Box>
                {interests.map((item) => (
                  <StyledButton col='pur' key={uuidv4()}>
                    <img
                      src={`${process.env.REACT_APP_RES_PATH}/icons/page5/${
                        fetchedData.interests.find((list) => list.name === item)
                          .icon
                      }.svg`}
                      alt={item}
                    />
                    {' ' + item}
                  </StyledButton>
                ))}
              </Box>
            </>
          ) : null}
          <Typography>What is your level of education?</Typography>
          <StyledButton col='pur'>
            <img
              src={`${process.env.REACT_APP_RES_PATH}/icons/page7/${
                fetchedData.educationList.find(
                  (list) => list.name === education
                ).icon
              }.svg`}
              alt={education}
            />
            {' ' + education}
          </StyledButton>
        </Card>
      </Box>

      <Box p xs={12}>
        <StyledButton
          onClick={() =>
            setState({
              ...state,
              currentStep: state.currentStep - 1,
              progress: state.progress - 12
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

export default Step9;
