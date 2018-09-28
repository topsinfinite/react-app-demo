import React, { Component } from "react";

class Counter extends Component {
  handleDelete = counter => {
    this.props.onDelete(counter);
  };
  handleIncrement = counter => {
    this.props.onIncrement(counter);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgetClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.handleDelete(this.props.counter)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgetClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
