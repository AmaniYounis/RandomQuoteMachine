import React from 'react';
import './App.scss';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      random: Math.floor(Math.random()*20)+1,
      quote:'' ,
     author:'',
    };
    this.handleClick=this.handleClick.bind(this);
  
  }
  handleClick(){
    this.props.dispatch({ type: 'NEWQUOTE' });
  }

  render(){
  return (
    <div class="text-center justify-content-center grid-container w-50 mx-auto" id="quote-box">
      <q id='text' class="grid-item">{this.props.quote}</q> <br />
      <label id="author" class="grid-item"> - {this.props.author} </label>
      <br />
      <div class='grid-container2' >
       <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <a id="tweet-quote" class="grid2-item" target="_blank" data-show-count="false" data-size="large" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=${this.props.quote}--${this.props.author}`}><img id="tweet-quote-img" alt="twitter_logo"  src="http://pngimg.com/uploads/twitter/twitter_PNG32.png"/></a>
      <button  onClick={this.handleClick} id="new-quote" type="button" class=" grid2-item btn btn-primary text-center">New Quote</button>
      </div></div>
  );
}}
function mapStateToProps(state) {
  return {
    quote: state.quote,
    author:state.author
  };
}

export default connect(mapStateToProps)(App);
