function TimeSpace(){
    this.facts = [1];
    this.fib = [0,1];
    this.factorial = function(num){
        if(num<=this.facts.length){
            return this.facts[num-1];
        }
        for(let i=this.facts.length;i<num;i++){
            this.facts[i] = this.facts[this.facts.length-1] *(i+1);
        }
        return this.facts[num - 1];
    }
    this.iFib = function(num){
        if (num < this.fib.length) {
            return this.fib[num];
        }
        for (let i = this.fib.length; i < num; i++) {
            this.fib[i] = this.fib[i - 1] + this.fib[i - 2];
        }
        return this.fib[num];
    }
}
var ts = new TimeSpace();
console.log(ts.factorial(3));
console.log(ts.facts);//checking that the arrays save previous work
console.log(ts.factorial(2));
console.log(ts.iFib(3));
console.log(ts.fib);//checking that the arrays save previous work
console.log(ts.iFib(2));