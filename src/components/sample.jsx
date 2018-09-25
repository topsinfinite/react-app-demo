import React, { Component } from "react";

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
class Test extends Component {
  state = {
    articles: ["article 1", "article 2"]
  };
  action = {
    payload: "article 3"
  };
  render() {
    console.log({
      ...this.state,
      articles: [...this.state.articles, this.action.payload]
    });
    return <h2>Hello world</h2>;
  }
}

export default Test;
