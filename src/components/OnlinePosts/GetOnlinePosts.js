import React, {Component} from 'react';

const API = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/25';

class GetOnlinePosts extends Component {
	constructor(props){
		super(props);
		this.state = {
			quotes: [],
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

   getRandomNum() {
   	let randomNum = Math.floor(Math.random()*25);
   	this.setState({
   		index: randomNum,
   	});
  }

  render() {
  	const { quotes, index } = this.state;

  	const quote = quotes[index];

		return (
			<div id="quote-box" className="App">
    		<div id="text">
      		<h3>{quote.quote}</h3>
    		</div>
    		<div id="author">
      		<p>{quote.author}</p>
    		</div>
    		<div>
		      <button 
		        className="button" 
		        id="new-quote" 
		        value="New Quote" 
		        onClick={this.getRandomNum}
		        >
		        Click Me!!!
		      </button>
    		</div>
    		<a href="https://www.twitter.com/intent/tweet">
      		<img id="tweet-quote" src='./images/twitter_logo.png' />
    		</a>
  		</div>
		); 
  }     
};

export default GetOnlinePosts;