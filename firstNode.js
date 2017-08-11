function Node(val){
    this.val = val;
    this.null = null;
}

function SLL(){
    //attributes of SLL class
    this.null
    this.insert = function(value){
        if(!this.head){
            this.head = new Node(value);
            return this.head;
        }
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(value);
        return this.head;
    }
    //removing an item in the list - assuming there is only one node with that value
    this.removeNode = function(value){
        //find node's value
        var previous = this.head;
        var current = this.head;
        var next = this.head;
        while (current.val == value) {
            //previous is old current, reset current to the next value, the new current's next value is assigned to next
            previous = current;
            current = current.next;
            next = current.next;            
        }//current is now the value to be removed
        previous.next = next;
    }
}
// var node1 = new Node(100);
// var node1 = new Node(101);
// var node1 = new Node(102);
var sL1 = new SLL();
sL1.insert(100);
sL1.insert(101);
sL1.insert(102);
console.log(sL1.head.val)//100
console.log(sL1.head.next.val)//101
console.log(sL1.head.next.next.val)//102