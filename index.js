const bases = require('./bases.js')

function random(max){
  return Math.round(Math.random() * max - 1)
}

exports.randomFear = function(){
  let base = bases[random(bases.length)]
  return { 
    fear: base.base + 'phobia', 
    explanation: "Fear of " + base.explanation 
  }
}

exports.randomPleasure = function(){
    let base = bases[random(bases.length)]
    return { 
      fear: base.base + 'philia', 
      explanation: "Pleasure of " + base.explanation 
    }
}
