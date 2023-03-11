import React, { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (event) => {
    this.setState(prevState => {
        return {
            [event.target.dataset.name]: prevState[event.target.dataset.name] + 1,
        };
    }) 
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100) || 0;
  }
  render() {
    const {good, neutral, bad} = this.state;
    const options = ["good", "neutral", "bad"];
    return (
      <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      {/* React homework template */}

      <Section title="Please leave feedback">
        <FeedbackOptions
        options={options}
        onLeaveFeedback={this.handleClick}
        />
      </Section>
      <Section title="Statistics">
        {(Object.values(this.state)).every(value => value === 0) ? (
          <Notification message="There is no feedback" /> 
        ) : (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )
        }
      </Section>

    </div>
    )
  }
};
