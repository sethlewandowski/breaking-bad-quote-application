import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import twitter from './images/twitter_logo.png';

const API = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/25';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [{
        quote: "",
        author: ""
      }],
      index: 0,
    };
  }

  componentDidMount() {
    fetch(API)
      .then(results => results.json())
      .then(results => {this.setState({
        quotes: results,
        });
      })
   }

   getRandomNum = () => {
    let randomNum = Math.floor(Math.random()*25);
    return this.setState({
      index: randomNum,
    });
  }

  render() {

    const { quotes, index } = this.state;
    const quote = quotes[index];

    const URI = `https://twitter.com/intent/tweet?hashtags=breakingbad&text=${quote.quote} - ${quote.author}`;
    
    return (
      <div id="quote-box" className="App">
        <div className="card">
          <div className="card-body">
            <div id="text" className="card-title blockquote mb-0">
              {quote && <h3>{quote.quote}</h3>}
            </div>
            <div id="author" className="blockquote-footer card-subtitle">
              {quote && <h4>{quote.author}</h4>}
            </div>
            <div className="footer">
              <button
                type="button" 
                className="btn btn-primary button"
                variant="primary" 
                size="lg" 
                active
                id="new-quote" 
                value="New Quote" 
                onClick={this.getRandomNum}
                >
                Get New Quote
              </button>
            </div>
            <div className="tweet-button">
              <a 
                id="tweet-quote" 
                target="_blank" 
                href={URI} 
                >
                <img className="twitter-button" src={twitter} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-muted">
          by <a href="https://www.sethlewandowski.com">Seth Lewandowski</a>
        </div>
      </div>
    ); 
  }     
};




export default App;
