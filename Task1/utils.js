function getDiceRollArray(dicecount){
    return new Array(dicecount).fill(0).map(function(){
      return Math.floor(Math.random()*6)+1
    })
   }

   function getDicePlaceholderHtml(dicecount){
    return new Array(dicecount).fill(0).map(function(){
      return `<div class="placeholder-dice"></div>`
    }).join('')
   }

   export {getDiceRollArray,getDicePlaceholderHtml}