(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{17:function(e,t,o){},18:function(e,t,o){},26:function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(2),i=o.n(n),s=(o(17),o(7)),c=o(8),h=o(3),d=o(12),l=o(10),u=(o(18),o(4)),f=o(1),m=function(e){Object(d.a)(o,e);var t=Object(l.a)(o);function o(e){var r;return Object(s.a)(this,o),(r=t.call(this,e)).state={random:Math.floor(20*Math.random())+1,quote:"",author:""},r.handleClick=r.handleClick.bind(Object(h.a)(r)),r}return Object(c.a)(o,[{key:"handleClick",value:function(){this.props.dispatch({type:"NEWQUOTE"})}},{key:"render",value:function(){return Object(f.jsxs)("div",{class:"text-center justify-content-center grid-container w-50 mx-auto",id:"quote-box",children:[Object(f.jsx)("q",{id:"text",class:"grid-item",children:this.props.quote})," ",Object(f.jsx)("br",{}),Object(f.jsxs)("label",{id:"author",class:"grid-item",children:[" - ",this.props.author," "]}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{class:"grid-container2",children:[Object(f.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),Object(f.jsx)("a",{id:"tweet-quote",class:"grid2-item",target:"_blank","data-show-count":"false","data-size":"large",rel:"noreferrer",href:"https://twitter.com/intent/tweet?text=".concat(this.props.quote,"--").concat(this.props.author),children:Object(f.jsx)("img",{id:"tweet-quote-img",alt:"twitter_logo",src:"http://pngimg.com/uploads/twitter/twitter_PNG32.png"})}),Object(f.jsx)("button",{onClick:this.handleClick,id:"new-quote",type:"button",class:" grid2-item btn btn-primary text-center",children:"New Quote"})]})]})}}]),o}(a.a.Component);var w=Object(u.b)((function(e){return{quote:e.quote,author:e.author}}))(m),b=o(11),p=[["A dream does not become reality through magic; it takes sweat, determination, and hard work.","Colin Powell, former U.S. Defense Secretary"],["I\u2019m a great believer in luck, and I find the harder I work, the more I have of it.","Thomas Jefferson, former President of the United States"],["No matter how hard you work, someone else is working harder. ","Elon Musk, entrepreneur"],["Satisfaction lies in the effort, not in the attainment.","Mahatma Gandhi, Indian activist"],["We think, mistakenly, that success is the result of the amount of time we put in at work, instead of the quality of time we put in.","Ariana Huffington, businesswoman and author"],["Men die of boredom, psychological conflict and disease. They do not die of hard work.","David Ogilvy, advertising business tycoon"],["The only place where success comes before work is in the dictionary.","Vidal Sassoon, hairdressing business tycoon"],["Work hard, have fun, make history.","Jeff Bezos, Amazon founder"],["I never took a day off in my 20s. Not one.","Bill Gates, Microsoft co-founder"],["There are no secrets to success. It is the result of preparation, hard work, and learning from failure.","Colin Powell, former U.S. Defense Secretary"],["There is no time for cut-and-dried monotony. There is time for work. And time for love. That leaves no other time.","Coco Chanel, fashion icon"],["There are no secrets to success. It is the result of preparation, hard work, and learning from failure.","Colin Powell, former U.S. Defense Secretary"],["There is no time for cut-and-dried monotony. There is time for work. And time for love. That leaves no other time.","Coco Chanel, fashion icon"],["Great teamwork is the only way we create the breakthroughs that define our careers.","Pat Riley, basketball coach"],["In the end, all business operation can be reduced to three words: people, products, and profits. Unless you\u2019ve got a good team, you can\u2019t do much with the other two.","Lee Iacocca, President, CEO of Chrysler"],["Success is best when it\u2019s shared.","Howard Schultz, CEO of Starbucks"],["Great companies are built in the office, with hard work put in by a team.","Emily Chang, journalist and executive producer"],["Nothing is particularly hard if you divide it into small jobs.","Henry Ford, American industrialist"],["Luck is a dividend of sweat. The more you sweat, the luckier you get.","Ray Kroc, American fast food tycoon"],["I work hard because I love my work.","Bill Gates, Microsoft co-founder"],["Chop your own wood and it will warm you twice.","Henry Ford, American industrialist"]];p.sort((function(){return Math.random()-.5}));var y=Object(b.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{quote:p[0][0],author:p[0][1]},t=arguments.length>1?arguments[1]:void 0;if("NEWQUOTE"===t.type){var o=Math.floor(20*Math.random()+1);return console.log(o),{quote:p[o][0],author:p[o][1]}}return e}));i.a.render(Object(f.jsx)(u.a,{store:y,children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.21cff6d4.chunk.js.map