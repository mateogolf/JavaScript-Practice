function ArrStack(arr=[]){
    var stack = arr;
    
    //push
    this.push = function(val){
        stack.push(val);
    }
    //pop
    this.pop = function () {
        stack.pop();
    }
    //top
    top = function(){
        return stack[stack.length-1];
    }
    //isEmpty
    this.isEmpty = function () {
        if(stack.length == 0){return true;}
        else{return false;}
    }
    //contains
    this.contains = function(val){
        for(var i=0;i<stack.length;i++){
            if(arr[i] === val){
                return true;
            }
        }
        return false;
    }
    //size
    this.size = function(){
        return stack.length;
    }
}
function Node(value) {
    this.val = value;
    this.next = null;
}
function SLStack(){
    var top = null; //push and pop to the top variable
    var counter = 0;
    //printAll
    this.print = function () {
        if (!top) {
            console.log("Empty Stack");
            return this;
        }
        console.log("Singly Linked Stack");
        var current = top;
        var count = 1;
        while (current) {
            console.log(count + ": " + current.val);
            count++;
            current = current.next;
        }
        return this;
    }
    //push
    this.push = function (val) {
        if(!top){
            top = new Node(val);
            counter++;
            return this;
        }
        var newNode = new Node(val);
        newNode.next = top;
        top = newNode;
        counter++;
        return this;
    }
    //pop
    this.pop = function () {
        if (!top) {
            return null;
        }
        var temp = top.val;
        top = top.next;
        counter--;
        return temp;
    }
    //top
    this.top = function () {
        return top.val;
    }
    
    //isEmpty
    this.isEmpty = function () {
        if (!top) { return true; }
        else { return false; }
    }
    //contains
    this.contains = function (val) {
        if (!top) {return false;}
        var current = top;
        while(current){
            if(current.val === val){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    //size
    this.size = function () {
        return counter;
    }
}
var stack = new SLStack();
stack.push(1).push(5).push(6).push(20).print();
console.log(stack.top());//20
var last = stack.pop()//20
console.log(stack.top());//6
stack.push(last).print();
console.log(stack.contains(0));//false
console.log(stack.contains(6));//true
console.log(stack.isEmpty());//false
console.log(stack.size());//4