import { Component } from 'react';
import SectionTitle from './SectionTitle';
import FeedbackBtn from './FeedbackBtn';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (e) => {
    const {name , value} = e.target
    this.setState(prewState => {
      return {
        [name]: value + 1,
        
        // neutral: prewState.neutral + 1,
        // bad: prewState.bad + 1,
      };
    });
  };

  render() {
    return (
      <>
        <SectionTitle />
        <FeedbackBtn handleFeedback={this.handleFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
