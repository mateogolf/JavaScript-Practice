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
        // console.log("Singly Linked Stack");
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
function SLQueueStack(){
    var first = new SLStack();
    var second = new SLStack();
    var isPushable = true;
    this.makeAddable = function(){
        if(!isPushable){
            //move from second to first
            var size = second.size();
            for (let i = 0; i < size; i++) {
                first.push(second.pop());
            }
            isPushable = true;//change boolean
        }
    }
    this.makeRemovable = function () {
        if (isPushable) {
            //move from first to second
            var size = first.size();
            for (let i = 0; i < size; i++) {
                second.push(first.pop());
            }
            // second.print();
            isPushable = false;//change boolean
        }
    }
    this.print = function(){
        this.makeRemovable();
        console.log("SL QueueStack");
        second.print();
        return this;
    }
    this.enqueue = function(val){
        this.makeAddable();
        first.push(val);
        return this;
    }
    this.dequeue = function () {//remove first entry and return its value
        this.makeRemovable();
        return second.pop();
    }
    //front
    this.front = function(){
        this.makeRemovable();//first entry becomes top of second stack
        return second.top();
    }
    //contains
    this.contains = function(val){
        if(isPushable){
            return first.contains(val);
        }
        else{
            return second.contains(val);
        }
    }
    //isEmpty
    this.isEmpty = function(){
        if (isPushable) {
            return first.isEmpty();
        }
        else {
            return second.isEmpty();
        }
    }
    //size
    this.size = function () {
        if (isPushable) {
            return first.size();
        }
        else {
            return second.size();
        }
    }
}
var q1 = new SLQueueStack();
// console.log(q1.isEmpty());//true
q1.enqueue("A").enqueue("B").enqueue("C").enqueue("D").print();
console.log(q1.contains("A"));//true
console.log(q1.dequeue());//removes and print A
console.log(q1.contains("A"));//false
q1.print();//B,C,D
q1.enqueue("A").print();//B,C,D,A