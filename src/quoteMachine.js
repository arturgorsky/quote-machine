import React, { Component } from "react";
import axios from "axios";

class QuoteMachine extends Component {
  state = {
    quotes: [],
    randomQuote: "",
    author: "",
    colors: [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857"
    ]
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
      })
      .then(() => this.getRandomQuote())
      .catch(error => console.error(error));
    this.setColor();
  }

  tweetQuote = event => {
    const url =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURI('"' + this.state.randomQuote + '"\n-' + this.state.author);
    window.open(url);
  };

  getRandomQuote = event => {
    const randomVal = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      randomQuote: this.state.quotes[randomVal].quote,
      author: this.state.quotes[randomVal].author
    });
  };

  setColor = () => {
    const newColor = this.state.colors[
      Math.floor(Math.random() * this.state.colors.length)
    ];
    let appNode = document.getElementById("body");
    appNode.style.backgroundColor = newColor;
    appNode.style.color = newColor;
  };

  render() {
    return (
      <div>
        <div className="container" id="quote-box">
          <h1 className="flow-text" id="title">
            Quote machine
          </h1>
          <div className="col-12" id="text">
            {this.state.randomQuote}
          </div>
          <div className="right-align" id="author">
            {"-" + this.state.author}
          </div>
          <div className="row">
            <div className="btn col s2 " title="Share on Facebook">
              <i className="fab fa-facebook-f" />
              <span className="hide-on-med-and-down">Facebook</span>
            </div>
            <a
              className="btn col s2 "
              id="tweet-quote"
              href="# "
              onClick={this.tweetQuote}
              title="Tweet quote"
            >
              <i className="fab fa-twitter" />
              <span className="hide-on-med-and-down">Twitter</span>
            </a>

            <div
              className="btn col s3 right"
              onClick={() => {
                this.getRandomQuote();
                this.setColor();
              }}
              id="new-quote"
              title="Load new quote"
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
