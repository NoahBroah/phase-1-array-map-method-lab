const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/*const titleCased = () => {
  return tutorials
}
*/


//const splitWords = tutorials.split(' ');

//console.log(splitWords)
//tutorials.map(element => console.log(element));



function titleCased() {
  const splitWords = tutorials.map(element => {
    const newArray = element.split(' ');
    const upperCaseArray = newArray.map(word => word[0].toUpperCase() + word.slice(1))
    return upperCaseArray.join(' ')
})
    return splitWords;
}



