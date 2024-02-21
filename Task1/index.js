import characterData from "./data.js"
import Character from "./character.js"

function attack(){
   hero1.getDiceHtml()
   Villian1.getDiceHtml()
   hero1.takeDamage(Villian1.currentDiceScore)
   Villian1.takeDamage(hero1.currentDiceScore)
   render()
   if (hero1.dead||Villian1.dead){
      endGame()
   }
}

function endGame(){
   const endMessage=hero1.score===0&&Villian1.score===0?"No Winners":hero1.score>0?"Hero is the Winner":"Villian is the Winner"
   const endEmoji=hero1.score>0?"🏆":"💀"
   document.body.innerHTML=`<div class="end-game">
   <h2>Game Over</h2>
   <h3>${endMessage}</h3>
   <p class="end-emoji">${endEmoji}</p>
   </div>`
}
const hero1=new Character(characterData.hero)
const Villian1=new Character(characterData.villian)
document .getElementById('attack-button').addEventListener('click',attack)
function render(){
   document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
   document.getElementById(Villian1.element).innerHTML=Villian1.getCharacterHtml()
}
render()
