let playerAttack
let enemyAttack

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
    let monsterRandom = randomAM(1, 3)
    let spanMonsterEnemy = document.getElementById('monster-enemy')

    if (monsterRandom == 1) {
        spanMonsterEnemy.innerHTML = 'Hipodoge'
    } else if (monsterRandom == 2) {
        spanMonsterEnemy.innerHTML = 'Capipepo'
    } else {
        spanMonsterEnemy.innerHTML = 'Ratigueya'
    }
}
function attackFire() {
    playerAttack = 'Fire'
    ramdomEnemyAttack()
}
function attackWater() {
    playerAttack = 'Water'
    ramdomEnemyAttack()
}
function attackPlant() {
    playerAttack = 'Plant'
    ramdomEnemyAttack()
}
function ramdomEnemyAttack() {
    let randomAttack = randomAM(1, 3)

    if (randomAttack == 1) {
        enemyAttack = 'Fire'
    } else if (randomAttack = 2) {
        enemyAttack = 'Water'
    } else {
        enemyAttack = 'Plant'
    }
}
function randomAM(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', startGame)