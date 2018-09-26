import React, { Component } from "react";
import Counter from "./counter";

class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  onDelete = count => {
    const { counters } = this.state;
    const newCounters = counters.filter(counter => {
      return counter.id !== count.id;
    });

    this.setState({ counters: newCounters });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            counter={counter}
            key={counter.id}
            value={counter.value}
            onDelete={() => this.onDelete(counter)}
          />
        ))}
      </div>
    );
  }
}

export default counters;
