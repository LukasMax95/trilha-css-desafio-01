class CallCounter{
    input = [];
    counter = 0;
    constructor(input){
        this.input = input;
    }
    call(){
        let resp = (this.counter < this.input.length) ? this.input[this.counter] : -1;
        this.counter++;
        return resp;
    }
}

module.exports = {CallCounter};