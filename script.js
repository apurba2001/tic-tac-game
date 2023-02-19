const boxes = document.querySelectorAll('.box')

let move = true
let turns = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const validate = () => {
    if(turns[0] == turns[1] && turns[0] == turns[2]) return alert('Game Over')
    else if (turns[3] == turns[4] && turns[3] == turns[5]) return alert('Game Over')
    else if (turns[6] == turns[7] && turns[6] == turns[8]) return alert('Game Over')

    else if (turns[0] == turns[3] && turns[0] == turns[6]) return alert('Game Over')
    else if (turns[1] == turns[4] && turns[1] == turns[7]) return alert('Game Over')
    else if (turns[2] == turns[5] && turns[2] == turns[8]) return alert('Game Over')

    else if (turns[0] == turns[4] && turns[0] == turns[8]) return alert('Game Over')
    else if (turns[2] == turns[4] && turns[2] == turns[5]) return alert('Game Over')
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(move && !box.innerHTML){
            box.innerHTML = 'X'
            turns[Number(box.id)] = 'X'
            move = false
        } else if (!move && !box.innerHTML){
            box.innerHTML = '0'
            turns[Number(box.id)] = '0'
            move = true
        }
        validate()
    })
})