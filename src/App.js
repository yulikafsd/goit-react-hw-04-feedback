import { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'styles';
import { Section, FeedbackOptions, Statistics, Notification } from 'components';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => {
      const buttonName = event.target.name;
      const { good, neutral, bad } = prevState;

      switch (buttonName) {
        case 'good':
          return { good: good + 1 };
        case 'neutral':
          return { neutral: neutral + 1 };
        case 'bad':
          return { bad: bad + 1 };
        default:
          throw new Error();
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.round((this.state.good * 100) / total)
      : this.initialValue;
  };

  render() {
    const {
      state,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;

    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <Box width="500px" color="text" fontSize={4} as="header" p="0px 30px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
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
}

App.propTypes = {
  initialValue: PropTypes.number.isRequired,
};
