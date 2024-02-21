function getLottoNumbers(){
    const winningNums=[]
    for (let i=0;i<6;i++){
        winningNums.push(Math.round(Math.random()*100))
    }
    return winningNums
}
function getWinningNumberHtml(){
    return getLottoNumbers().map(function(num){
        return`<div class="number">${num}</div>`
    }).join('')
}
document.getElementById('winning-numbers').innerHTML=getWinningNumberHtml()