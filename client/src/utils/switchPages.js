import { lazy } from 'react';
import { motion } from 'framer-motion';

const Step1 = lazy(() => import('../Pages/Step1/Step1'));
const Step2 = lazy(() => import('../Pages/Step2/Step2'));
const Step3 = lazy(() => import('../Pages/Step3/Step3'));
const Step4 = lazy(() => import('../Pages/Step4/Step4'));
const Step5 = lazy(() => import('../Pages/Step5/Step5'));
const Step6 = lazy(() => import('../Pages/Step6/Step6'));
const Step7 = lazy(() => import('../Pages/Step7/Step7'));
const Step8 = lazy(() => import('../Pages/Step8/Step8'));
const Step9 = lazy(() => import('../Pages/Step9/Step9'));

const switchPages = (state, setState, fetchedData) => {
  const {
    whyList,
    industries,
    interests,
    savings,
    educationList,
    educationList2,
    howLongList
  } = fetchedData;

  switch (state.currentStep) {
    case 1:
      return (
        <motion.div
          key='page1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step1 state={state} setState={setState} />
        </motion.div>
      );
    case 2:
      return (
        <motion.div
          key='page2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step2 state={state} setState={setState} howLongList={howLongList} />
        </motion.div>
      );
    case 3:
      return (
        <motion.div
          key='page3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step3 state={state} setState={setState} whyList={whyList} />
        </motion.div>
      );
    case 4:
      return (
        <motion.div
          key='page4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step4 state={state} setState={setState} availableInd={industries} />
        </motion.div>
      );
    case 5:
      return (
        <motion.div
          key='page5'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step5 state={state} setState={setState} availableInt={interests} />
        </motion.div>
      );
    case 6:
      return (
        <motion.div
          key='page6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step6 state={state} setState={setState} savings={savings} />
        </motion.div>
      );
    case 7:
      return (
        <motion.div
          key='page7'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step7
            state={state}
            setState={setState}
            educationList={educationList}
          />
        </motion.div>
      );
    case 8:
      return (
        <motion.div
          key='page8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step8
            state={state}
            setState={setState}
            educationList={educationList2}
          />
        </motion.div>
      );
    case 9:
      return (
        <motion.div
          key='page9'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step9 state={state} setState={setState} fetchedData={fetchedData} />
        </motion.div>
      );
    default:
      return (
        <motion.div
          key='page1'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Step1 state={state} setState={setState} />
        </motion.div>
      );
  }
};

export default switchPages;
