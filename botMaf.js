const BaseBot = require("./baseBot.js")

class BotMaf extends BaseBot {

    constructor(){
        super();
        this.lastMove = 1;
    }

    newGeneration(){
        super.newGeneration();
        this.lastMove = 1;
    }

    newGame(){
        this.lastMove = 1;
    }

    memorize(number){
        this.lastMove = number;
    }

    play(){
        return this.lastMove;
    }

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