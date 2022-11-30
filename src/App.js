import { Component } from 'react';
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
      const buttonText = event.target.textContent;
      const { good, neutral, bad } = prevState;

      switch (buttonText) {
        case 'Good':
          return { good: good + 1 };
        case 'Neutral':
          return { neutral: neutral + 1 };
        case 'Bad':
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
    return Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { initialValue } = this.props;

    return (
      <Box width="500px" color="text" fontSize={4} as="header" p="0px 30px">
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        <Section title="Statistics">
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={
                isNaN(this.countPositiveFeedbackPercentage())
                  ? initialValue
                  : this.countPositiveFeedbackPercentage()
              }
            />
          )}
        </Section>
      </Box>
    );
  }
}
