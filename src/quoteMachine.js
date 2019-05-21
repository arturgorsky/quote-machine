import React, { Component } from "react";
import axios from "axios";

class QuoteMachine extends Component {
  state = {
    quotes: [],
    randomQuote: "",
    author: ""
  };
  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then(response => {
        this.setState({
          quotes: response.data.quotes
        });
      });
  }

  getRandomQuote = event => {
    const randomVal = Math.floor(Math.random() * this.state.quotes.length);
    console.log(randomVal);
    this.setState({
      randomQuote: this.state.quotes[randomVal].quote,
      author: this.state.quotes[randomVal].author
    });
  };
  render() {
    return (
      <div>
        <div className="container teal lighten-2" onLoad={this.getRandomQuote}>
          <h1 className="flow-text">Quote machine</h1>
          <div className="col-12">{this.state.randomQuote}</div>
          <div className="right-align">{this.state.author}</div>
          <div className="row">
            <div className="btn indigo col s2 ">Facebook</div>
            <div className="btn indigo col s2 ">Twitter</div>
            <div
              className="btn indigo col s2 right"
              onClick={this.getRandomQuote}
            >
              New Quote
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteMachine;
