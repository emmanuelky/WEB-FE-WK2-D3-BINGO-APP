window.onload = function () {
    displayBoardNumbers()
}



const displayBoardNumbers = function () {

    let boardContainerNode = document.getElementById("board-container")

    for (let num = 1; num <= 76; num++) {

        let newBoardNode = document.createElement("div")
        newBoardNode.innerText = num
        newBoardNode.classList.add("board")

        boardContainerNode.appendChild(newBoardNode)
    }
}