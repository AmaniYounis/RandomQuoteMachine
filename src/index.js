import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const quotes=[ 
  ["A dream does not become reality through magic; it takes sweat, determination, and hard work.","Colin Powell, former U.S. Defense Secretary"],
  ["I’m a great believer in luck, and I find the harder I work, the more I have of it.","Thomas Jefferson, former President of the United States"],
  ["No matter how hard you work, someone else is working harder. ","Elon Musk, entrepreneur"],
  ['Satisfaction lies in the effort, not in the attainment.','Mahatma Gandhi, Indian activist'],
  ['We think, mistakenly, that success is the result of the amount of time we put in at work, instead of the quality of time we put in.','Ariana Huffington, businesswoman and author'],
  ['Men die of boredom, psychological conflict and disease. They do not die of hard work.','David Ogilvy, advertising business tycoon'],
  ['The only place where success comes before work is in the dictionary.','Vidal Sassoon, hairdressing business tycoon'],
  ['Work hard, have fun, make history.','Jeff Bezos, Amazon founder'],
  ['I never took a day off in my 20s. Not one.','Bill Gates, Microsoft co-founder'],
  ['There are no secrets to success. It is the result of preparation, hard work, and learning from failure.','Colin Powell, former U.S. Defense Secretary'],
  ['There is no time for cut-and-dried monotony. There is time for work. And time for love. That leaves no other time.','Coco Chanel, fashion icon'],
  ['There are no secrets to success. It is the result of preparation, hard work, and learning from failure.','Colin Powell, former U.S. Defense Secretary'],
  ['There is no time for cut-and-dried monotony. There is time for work. And time for love. That leaves no other time.','Coco Chanel, fashion icon'],
  ['Great teamwork is the only way we create the breakthroughs that define our careers.','Pat Riley, basketball coach'],
  ['In the end, all business operation can be reduced to three words: people, products, and profits. Unless you’ve got a good team, you can’t do much with the other two.','Lee Iacocca, President, CEO of Chrysler'],
  ['Success is best when it’s shared.','Howard Schultz, CEO of Starbucks'],
  ['Great companies are built in the office, with hard work put in by a team.','Emily Chang, journalist and executive producer'],
  ['Nothing is particularly hard if you divide it into small jobs.','Henry Ford, American industrialist'],
  ['Luck is a dividend of sweat. The more you sweat, the luckier you get.','Ray Kroc, American fast food tycoon'],
  ['I work hard because I love my work.','Bill Gates, Microsoft co-founder'],
  ['Chop your own wood and it will warm you twice.','Henry Ford, American industrialist']
];

function newQuoteReducer(state = { quote: quotes[0][0],author:quotes[0][1] }, action) {

  if (action.type ==='NEWQUOTE') {
    var randNum=Math.floor((Math.random() * 20) + 1);
    console.log(randNum);
      return {
        quote: quotes[randNum][0],
        author:quotes[randNum][1]
      }}
    else return state;
  }
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(quotes);
const store = createStore(newQuoteReducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);