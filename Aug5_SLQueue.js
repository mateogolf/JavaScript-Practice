function Node(value){
    this.val = value;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;

    this.enqueue = function(val){
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
            return this;
        }
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
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
}
var q = new SLQueue();
q.enqueue(1).enqueue(5).enqueue(6).enqueue(20).printVals();
console.log(q.dequeue());
q.printVals();