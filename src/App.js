import { useReducer } from 'react';
import { Box } from 'styles';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

const initialValue = { good: 0, bad: 0, neutral: 0 };

function countReducer(state, action) {
  return { ...state, [action]: state[action] + 1 };
}

export function App() {
  const [state, dispatch] = useReducer(countReducer, initialValue);
  const { good, bad, neutral } = state;

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return totalFeedback ? Math.round((good * 100) / totalFeedback) : 0;
  };

  // Другий варіант - без редьюса
  // розкоментувати внизу, закоментувати зверху до імпортів + імпорт редьюса

  // import { useState } from 'react';
  // export function App() {
  //   const initialValue = 0;

  //   const [good, setGood] = useState(() => initialValue);
  //   const [bad, setBad] = useState(() => initialValue);
  //   const [neutral, setNeutral] = useState(() => initialValue);

  //   const state = { good, bad, neutral };

  //   const dispatch = option => {
  //     switch (option) {
  //       case 'good':
  //         setGood(good => good + 1);
  //         break;
  //       case 'bad':
  //         setBad(bad => bad + 1);
  //         break;
  //       case 'neutral':
  //         setNeutral(neutral => neutral + 1);
  //         break;
  //       default:
  //         throw new Error(`Sorry, an error occured`);
  //     }
  //   };

  //   const countTotalFeedback = () => {
  //     return good + neutral + bad;
  //   };

  //   const countPositiveFeedbackPercentage = () => {
  //     return totalFeedback
  //       ? Math.round((good * 100) / totalFeedback)
  //       : initialValue;
  //   };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <Box width="500px" color="text" fontSize={4} as="header" p="0px 30px">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={dispatch}
        />
      </Section>
      <Section title="Statistics">
        {!totalFeedback ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Box>
  );
}
