//const game = () => {

  //const startGame = () => {
  
    const selectionButtons = document.querySelectorAll('[data-selection]')
    
    const computerScore = document.querySelector('[computer-score')
    const yourScore = document.querySelector('[your-score]')
    
    const finalColumn = document.getElementsByClassName

    const SELECTIONS = [
        {
        name: 'rock',
        beats: 'scissors'
        },
        {
        name: 'paper',
        beats: 'rock'
        },
        {
        name: 'scissors',      
        beats: 'paper'
        }   
    ]

    for (const selectionButton of selectionButtons) {
      selectionButton.addEventListener('click', () => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
      })
    }

    function makeSelection(selection) {
      const computerSelection = randomSelection() 
      const yourWinner = isWinner(selection, computerSelection)
      const computerWinner = isWinner(computerSelection, selection)

      updateScore(computerSelection, computerWinner)
      updateScore(selection, yourWinner)

      if (yourWinner) incrementScore(yourScore)
      if (computerWinner) incrementScore(computerScore)
    }

    function incrementScore(score) {
      score.innerText = parseInt(score.innerText) + 1
    } 

    function updatescore(selection, winner) {
        const div = document.createElement('div')
        div.innerText = selection.name
        div.classList.add('result-selection')
        if (winner) div.classList.add('winner')
        finalColumn.after(div)
    }


    function isWinner(selection, opponentSelection) {
      return selection.beats === opponentSelection.name
    }
    
    function randomSelection() {
      const randomIndex = Math.floor(Math.random() * 3)
      return SELECTIONS[randomIndex]
    }
//  }
//}