// Slot Machine
class SlotMachine {
    constructor() {
        this.coinCounter = 0;
    }

    showPlayResult(roulettes) {
        if (roulettes[0] && roulettes[1] && roulettes[2])
        {
            console.log("Congratulations!!!. You won " + this.coinCounter + " coins!!");
            this.coinCounter = 0;
        }
        else
        {
            console.log("Good luck next time!!");
        }
    }

    spinRoulette()
    {
        return Math.random() >= 0.5;
    }

    play() {
        this.coinCounter++;
        const roulettes = [this.spinRoulette(), this.spinRoulette(), this.spinRoulette()];
        this.showPlayResult(roulettes);
    }
}

// -------- Show tests in console.
console.log("-- 5. Slot Machine --");
const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
