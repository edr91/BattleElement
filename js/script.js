let playerAttack
let enemyAttack
let lifePlayer = 3
let lifeEnemy = 3

function startGame() {
    let sectionChooseRestart = document.getElementById('restart')
    sectionChooseRestart.style.display = 'none'

    let sectionChooseAttack = document.getElementById('choose-attack')
    sectionChooseAttack.style.display = 'none'

    let buttonMonsterplayer = document.getElementById('button-monster')
    buttonMonsterplayer.addEventListener('click', selecMonsterPlayer)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', attackFire)
    let buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', attackWater)
    let buttonPlant = document.getElementById('button-plant')
    buttonPlant.addEventListener('click', attackPlant)

    let RestartB = document.getElementById('button-restart')
    RestartB.addEventListener('click', restartTheGame)
}
function selecMonsterPlayer() {
    let sectionChooseMonster = document.getElementById('choose-monster')
    sectionChooseMonster.style.display = 'none'

    let sectionChooseAttack = document.getElementById('choose-attack')
    sectionChooseAttack.style.display = 'block'

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
        createMessage('Please choose a Monster!')
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
    finalBattle()
}
function finalBattle() {
    let spanLifePlayer = document.getElementById('player-life')
    let spanLifeEnemy = document.getElementById('enemy-life')

    if (enemyAttack == playerAttack) {
        createMessage("Draw")
    } else if (playerAttack == 'Fire' && enemyAttack == 'Plant') {
        createMessage("You win")
        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy
    } else if (playerAttack == 'Water' && enemyAttack == 'Fire') {
        createMessage("You win")
        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy
    } else if (playerAttack == 'Plant' && enemyAttack == 'Water') {
        createMessage("You win")
        lifeEnemy--
        spanLifeEnemy.innerHTML = lifeEnemy
    } else {
        createMessage("You lose")
        lifePlayer--
        spanLifePlayer.innerHTML = lifePlayer
    }
    LifeScore()
}
function LifeScore() {
    if (lifeEnemy == 0) {
        FinalScoreMessage('<----------You Win!---------->')
    } else if (lifePlayer == 0) {
        FinalScoreMessage('<----------You Lose---------->')
    }
}
function createMessage(result) {
    let sectionMessage = document.getElementById('message')
    let paragraph = document.createElement('p')

    paragraph.innerHTML = 'Your monster Attack with ' + playerAttack + ', the enemy monster attack with ' + enemyAttack + ' - ' + result
    sectionMessage.appendChild(paragraph)
}
function FinalScoreMessage(finalScore) {
    let sectionMessage = document.getElementById('message')
    let paragraph = document.createElement('p')

    paragraph.innerHTML = finalScore
    sectionMessage.appendChild(paragraph)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.disabled = true
    let buttonWater = document.getElementById('button-water')
    buttonWater.disabled = true
    let buttonPlant = document.getElementById('button-plant')
    buttonPlant.disabled = true

    let sectionChooseRestart = document.getElementById('restart')
    sectionChooseRestart.style.display = 'block'
}
function restartTheGame() {
    location.reload()
}
function randomAM(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', startGame)