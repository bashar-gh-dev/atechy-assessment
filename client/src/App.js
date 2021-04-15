import { useState, useEffect } from 'react';
import switchPages from './utils/switchPages';
import axios from 'axios';
import MainPageContainer from './Pages/MainPageContainer/MainPageContainer';

const fetchData = async (setState) => {
  try {
    const lists = await axios.get('http://localhost:3001/data');
    setState(lists.data);
  } catch (err) {
    console.log('Error fetching data: ', err);
    setState(false);
  }
};

const App = () => {
  const [state, setState] = useState({
    currentStep: 1,
    progress: 11,
    userInfo: {
      firstName: '',
      lastName: '',
      nationality: '',
      country: '',
      gender: '',
      dob: '',
      contact: '',
      email: '',
      visited: false,
      relatives: false,
      howLong: 'Up To 3 months',
      why: [],
      industries: [],
      interests: [],
      saving: 'No savings',
      education: 'High school or less',
      educationTime: 'Right now'
    }
  });

  const [fetchedData, setFetchedData] = useState(false);

  useEffect(() => {
    fetchData(setFetchedData);
  }, []);

  return (
    <>
      <MainPageContainer
        progress={state.progress}
        currentStep={state.currentStep}
      >
        {fetchedData ? (
          switchPages(state, setState, fetchedData)
        ) : (
          <div>Loading data from server please wait....</div>
        )}
      </MainPageContainer>
    </>
  );
};

export default App;
