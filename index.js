let saveElHome = document.getElementById("save-el-home")
let countElHome = document.getElementById("count-el-home")
let countHome = 0

let saveElAway = document.getElementById("save-el-away")
let countElAway = document.getElementById("count-el-away")
let countAway = 0

function incrementHome() {
    countHome += 1
    countElHome.textContent = countHome
}

function saveHome() {
    let countStrHome = countHome + " - "
    saveElHome.textContent += countStrHome
    countElHome.textContent = 0
    countHome = 0
}

function incrementAway() {
    countAway += 1
    countElAway.textContent = countAway
}

function saveAway() {
    let countStrAway = countAway + " - "
    saveElAway.textContent += countStrAway
    countElAway.textContent = 0
    countAway = 0
}