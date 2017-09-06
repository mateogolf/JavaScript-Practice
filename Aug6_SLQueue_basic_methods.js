function Node(value){
    this.val = value;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
    //Methods
    this.printVals = function(){
        if (!this.head) {
            console.log("Empty Queue");
            return this;
        }
        console.log("Singly Linked Queue");
        var current = this.head;
        var count = 1;
        while(current){
            console.log(count + ": " + current.val);
            count++;
            current = current.next;
        }
        return this;
    }
    //Sep5
    this.enqueue = function(val){
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
            return this;
        }
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
        return this;
    }
    this.dequeue = function () {//remove node from front and return val
        if(!this.head){
            return this.head;
        }
        if (!this.head.next) {
            this.head = new Node(val);
            this.tail = this.head;
            return this;
        }
        var temp = this.head.val;
        this.head = this.head.next;
        return temp;        
    }
    //Sep6
    this.front = function(){
        if(!this.head){return null;}
        return this.head.val;
    }
    this.contains = function(val){//return boolean
        if(!this.head){return false;}
        var current = this.head;
        while(current){
            if(current.val == val){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    this.isEmpty = function(){
        if(!this.head){return true;}
        else{return false;}
    }
    this.size = function(){
        var count = 0;
        var current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
}
function compare2Queues(q1, q2) {
    if (!q1.head || !q2.head) { //(q1.isEmpty() || q2.isEmpty()){
        console.log("1 or both queues are empty");
        return [q1, q2];
    }
    if (q1.size() != q2.size()) {
        console.log("Queues not equal length");
        return [q1, q2];
    }
    var current1 = q1.head;
    var current2 = q2.head;
    while (current1 && current2) {
        if (current1.val != current2.val) {
            console.log("Queues' vals not equal and/or in order");
            return [q1, q2];
            current1 = current1.next;
            current2 = current2.next;
        }
    }
    console.log("Queues ARE equal!");
    return [q1, q2];
}
var q = new SLQueue();
q.enqueue(1).enqueue(5).enqueue(6).enqueue(20).printVals();
console.log(q.front());//1
console.log(q.contains(0));//false
console.log(q.contains(6));//true
console.log(q.isEmpty());//false
console.log(q.size());//4
//Aug6 compare2Queues
function compare2Queues(q1,q2){
    if(!q1.head || !q2.head){ //(q1.isEmpty() || q2.isEmpty()){
        console.log("1 or both queues are empty");
        return [q1,q2];
    }
    if(q1.size() != q2.size()){
        console.log("Queues not equal length");
        return [q1, q2];
    }
    var current1 = q1.head;
    var current2 = q2.head;
    while(current1 && current2){
        if(current1.val != current2.val){
            console.log("Queues' vals not equal and/or in order");
            return [q1, q2];
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    console.log("Queues ARE equal!");
    return [q1, q2];
}
var q2 = new SLQueue();
q2.enqueue(1).enqueue(5).enqueue(6).enqueue(20).printVals();
var queues = compare2Queues(q,q2);