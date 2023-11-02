function startGame() {
    let buttonMonsterplayer = document.getElementById('button-monster')
    buttonMonsterplayer.addEventListener('click', selecMonsterPlayer)
}
function selecMonsterPlayer() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')

    if (inputHipodoge.checked) {
        alert('You selected Hipodoge')
    } else if (inputCapipepo.checked) {
        alert('You selected Capipepo')
    } else if (inputRatigueya.checked) {
        alert('You selected Ratigueya')
    } else {
        alert('Please choose a Monster!')
    }
}
window.addEventListener('load', startGame)