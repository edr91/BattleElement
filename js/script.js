function startGame() {
    let buttonMonsterplayer = document.getElementById('choose-monster')
    buttonMonsterplayer.addEventListener('click', selecMonsterPlayer)
}
function selecMonsterPlayer() {
    alert('you chose this monster')
}
window.addEventListener('load', startGame)