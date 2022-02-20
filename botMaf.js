const BaseBot = require("./baseBot.js")

class BotMaf extends BaseBot {

    constructor(){
        super();
    }

    newGeneration(){
        super.newGeneration();
    }

    play(){
        //throw 1;
        return this.rand50() || this.rand50();
    }

    rand50() {
        // rand() function will generate odd or even
        // number with equal probability. If rand()
        // generates odd number, the function will
        // return 1 else it will return 0.
        return Math.floor(Math.random() * 10) & 1;
    }
     
    // Random Function to that returns 1 with 75%
    // probability and 0 with 25% probability using
    // Bitwise OR
    // rand75() {
    //     return rand50() | rand50();
    // }

    // constructor() {
    //     super();
    //     this.gameHistory = [];
    // }

    // play() {

    //     let cont0 = 0;
    //     let cont1 = 0;


    //     if (this.gameHistory.length === 0) {
    //         //return Math.floor(Math.random() * 2);
    //         return Math.random() < 0.8 ? 1 : 0;
    //     }

    //     for (let i = 0; i < this.gameHistory.length; i++) {
    //         const element = this.gameHistory[i];

    //         if (element === 0) {
    //             cont0++;
    //         }
    //         if (element === 1) {
    //             cont1++;
    //         }

    //     }

    //     let prob0 = cont0 * 100 / this.gameHistory.length;
    //     let prob1 = cont1 * 100 / this.gameHistory.length;

    //     if (prob0 === prob1) {
    //         //return Math.floor(Math.random() * 2);
    //         return Math.random() < 0.8 ? 1 : 0;
    //     }

    //     if (prob0 < prob1) {
    //         return 0;
    //     }

    //     if (prob0 > prob1) {
    //         return 1;
    //     }


    // }

    // memorize(number) {
    //     this.gameHistory.push(number)
    // }

    // newGeneration() {
    //     super.newGeneration();
    // }

    // newGame() {

    //     super.newGame();
    //     this.gameHistory = [];

    // }


}

module.exports = BotMaf