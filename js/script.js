let attackPlayer

function startGame() {
    let buttonMonsterplayer = document.getElementById('button-monster')
    buttonMonsterplayer.addEventListener('click', selecMonsterPlayer)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', attackFire)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', attackWater)
    let buttonPlant = document.getElementById('button-plant')
    buttonPlant.addEventListener('click', attackPlant)
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
    selecMonsterEnemy()
}
function selecMonsterEnemy() {
    let attackrandom = randomMonster(1, 3)
    let spanMonsterEnemy = document.getElementById('monster-enemy')

    if (attackrandom == 1) {
        spanMonsterEnemy.innerHTML = 'Hipodoge'
    } else if (attackrandom == 2) {
        spanMonsterEnemy.innerHTML = 'Capipepo'
    } else {
        spanMonsterEnemy.innerHTML = 'Ratigueya'
    }
}
function attackFire() {
    attackPlayer = 'Fire'
    alert(attackPlayer)
}
function attackWater() {
    attackPlayer = 'Water'
    alert(attackPlayer)
}
function attackPlant() {
    attackPlayer = 'Plant'
    alert(attackPlayer)
}
function randomMonster(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', startGame)