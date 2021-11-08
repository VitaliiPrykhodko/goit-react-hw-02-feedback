import React, { Component } from "react";
import Statistics from "./Statistics/Statistics.jsx";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Section from "./Section/Section";
import Notification from "./Notification/Notification.jsx"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickButton = (nameBtn) => {
    this.setState(
      { [nameBtn]: this.state[nameBtn] + 1 },
      this.countTotalFeedback
    );
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        <Section>
          { this.countTotalFeedback()?<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()}
          /> :  <Notification message="No feedback given"/>}
        </Section>
      </div>
    );
  }
}

export default App;
