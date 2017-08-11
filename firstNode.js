function Node(val) {
    this.val = val;
    this.null = null;
}

function SLL() {
    //attributes of SLL class
    this.null
    this.insert = function (value) {
        if (!this.head) { //Adds to beginning if nothing in list
            this.head = new Node(value);
            return this.head;
        }
        //Traversal
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
        return this.head;
    }
    //removing an item in the list - assuming there is only one node with that value
    this.removeNode = function (value) {
        //find node's value
        var previous = this.head;
        var current = this.head;
        if (!!current.next) {
            var next = current.next;
        }
        else {
            var next = null;
        }
        while (!!current.next) {
            //previous is old current, reset current to the next value, the new current's next value is assigned to next
            previous = current;
            current = current.next;
            if (!!current.next) {
                next = current.next;
            }
            else {
                next = null;
            }
        }//current is now the value to be removed
        if (!!next) {
            previous.next = next;
        }
        else {
            previous.next = null;
        }
        return this;
    }
    //Print all in list
    this.printAll = function (){
        var current = this.head;
        var count = 1;
        console.log(count, ": ", current.val);
        while (current.next) {
            current = current.next;
            count++;
            console.log(count, ": ", current.val);
        }
        return this;
    }
}
var sL1 = new SLL();
sL1.insert(100);
sL1.insert(101);
sL1.insert(102);
sL1.printAll();
sL1.removeNode(101)
sL1.printAll();
sL1.insert(102);
sL1.insert(103);
sL1.insert(104);
sL1.insert(105);
sL1.printAll();