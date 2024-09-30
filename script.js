
const playGame = () => {
    const rockBtn = document.querySelector('.kamień');
    const paperBtn = document.querySelector('.papier');
    const scissorBtn = document.querySelector('.nożyce');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['kamień', 'papier', 'nożyce']

    playerOptions.forEach(option => {
        option.addEventListener('click', function () {

            const choiceNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[choiceNumber];

            winner(this.className, computerChoice)
        })
    })

}

const winner = (player, computer) => {
    const result = document.querySelector('.result');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    result.textContent = `Komputer wybrał ${computer}, a gracz ${player}. `
    if (player === computer) {
        result.textContent += 'Remis'
    }
    else if (player == 'kamień') {
        if (computer == 'papier') {
            result.textContent += 'Komputer wygrał';

        } else {
            result.textContent += 'Gracz wygrał'
        }
    }
    else if (player == 'nożyce') {
        if (computer == 'kamień') {
            result.textContent += 'Komputer wygrał';
        } else {
            result.textContent += 'Gracz wygrał';
        }
    }
    else if (player == 'papier') {
        if (computer == 'nożyce') {
            result.textContent += 'Komputer wygrał';
        } else {
            result.textContent += 'Gracz wygrał';
        }
    }
    
}

playGame();
