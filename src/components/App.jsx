import React from "react";
import { Box } from "./Box";
import { Controls } from "./Controls";

export class App extends React.Component {
  
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = (event) => {
    this.setState(prevState => {
      switch (event.target.name) {
        case 'good':
          return { good: prevState.good + 1 } ;
        case 'neutral':
          return { neutral: prevState.neutral + 1 };
        case 'bad':
          return { bad: prevState.bad + 1 }
        default:
          console.error();
      }
    })
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
    return total;
  }
  
  countPositiveFeedbackPercentage = () => { }
  
  render() {

    return (
    <Box height="100vh" color="text" fontSize={5} as="header">
        <h1>Please leave feedback</h1>
        <Controls onLeaveFeedback={this.onLeaveFeedback}/>
      <Box as="section">
        <h2>Statistics</h2>
        <Box as="ul">
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>TOTAL: 5</li>
        </Box>
      </Box>
    </Box>
  );
  }
};
