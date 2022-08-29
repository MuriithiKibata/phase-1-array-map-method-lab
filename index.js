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
function titleCased () {
  let tutorial = tutorials.map(function (item) {
    let chara1 = item.split(" ")
    for( let i = 0; i < chara1.length; i++) {
      chara1[i] = chara1[i][0].toUpperCase() + chara1[i].substring(1)
    }
    return chara1.join(" ")
  })
  return tutorial
 
}
titleCased()


/**function titleCase(tutorials) {
  
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
      return tutorials
}**/


  

