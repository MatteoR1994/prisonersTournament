const BaseBot = require("./baseBot.js")

class StrangeTwin extends BaseBot {

    constructor(){
        super();
    }
    
    newGeneration(){
        super.newGeneration();
    }
    
    play(){
        return 0;
    }

}

module.exports = StrangeTwin;