function startGame() {
    let buttonMonsterplayer = document.getElementById('button-monster')
    buttonMonsterplayer.addEventListener('click', selecMonsterPlayer)
}
function selecMonsterPlayer() {
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMonsterPlayer = document.getElementById('monster-player')

    if (inputHipodoge.checked) {
        spanMonsterPlayer.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMonsterPlayer.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMonsterPlayer.innerHTML = 'Ratigueya'
    } else {
        alert('Please choose a Monster!')
    }
}
window.addEventListener('load', startGame)