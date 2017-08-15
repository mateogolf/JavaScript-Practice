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
    this.addFront = function (value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }
    this.contains = function (value) {
        var current = this.head;
        while (current) {
            if(current.val === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    this.count = function(){
        var current = this.head;
        var count = 0;
        while (current) {
            count++
            current = current.next;
        }
        return count;
    }
    this.displayAsString = function() {
        var current = this.head;
        var result = "";
        while (current) {
            result += current.val + ", ";
            current = current.next;
        }
        return result;
    }
    this.minMaxAvg = function() {
        if(!this.head){return "Empty list"}
        var min = this.head.val;
        var max = this.head.val;
        var sum = this.head.val;
        var current = this.head.next;
        while (current) {
            if(min > current.val){
                min = current.val;
            }//min
            if (max < current.val) {//min
                min = current.val;
            }//max
            sum += current.val//sum
            current = current.next;//iterate
        }
        var avg = sum/this.count() //avg
        return [min,max,avg];
    }
    this.min = function () {
        if (!this.head) { return "Empty list" }
        var min = this.head.val;
        var current = this.head.next;
        while (current) {
            if (min > current.val) {
                min = current.val;
            }//min
            current = current.next;//iterate
        }
        return min;
    }
    this.max = function () {
        if (!this.head) { return "Empty list" }
        var max = this.head.val;
        var current = this.head.next;
        while (current) {
            if (max < current.val) {
                max = current.val;
            }//max
            current = current.next;//iterate
        }
        return max;
    }
    this.minMaxAvg = function () {
        if (!this.head) { return "Empty list" }
        var sum = this.head.val;
        var current = this.head.next;
        while (current) {
            sum += current.val//sum
            current = current.next;//iterate
        }
        var avg = sum / this.count() //avg
        return avg;
    }
    //removing an item in the list - assuming there is only one node with that value
    // this.removeNode = function (value) {
    //     //find node's value
    //     var previous = this.head;
    //     var current = this.head;
    //     if (!!current.next) {
    //         var next = current.next;
    //     }
    //     else {
    //         var next = null;
    //     }
    //     while (!!current.next) {
    //         //previous is old current, reset current to the next value, the new current's next value is assigned to next
    //         previous = current;
    //         current = current.next;
    //         if (!!current.next) {
    //             next = current.next;
    //         }
    //         else {
    //             next = null;
    //         }
    //     }//current is now the value to be removed
    //     if (!!next) {
    //         previous.next = next;
    //     }
    //     else {
    //         previous.next = null;
    //     }
    //     return this;
    // }
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
// sL1.removeNode(101)
sL1.printAll();
sL1.insert(102);
sL1.insert(103);
sL1.insert(104);
sL1.insert(105);
sL1.printAll();
console.log(sL1.count());
console.log(sL1.displayAsString());
console.log(sL1.minMaxAvg());
var sL2 = new SLL();
console.log(sL2.minMaxAvg());