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
            return this;
        }
        //Traversal
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
        return this;
    }
    this.addFront = function (value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
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
    }//returns string
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
    }//returns string when empty or array [min,max,avg]
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
    }//return str if empty or min
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
    }//return str if empty or max
    this.avg = function () {
        if (!this.head) { return "Empty list" }
        var sum = this.head.val;
        var current = this.head.next;
        while (current) {
            sum += current.val//sum
            current = current.next;//iterate
        }
        var avg = sum / this.count() //avg
        return avg;
    }//return str if empty or avg
    this.minToFront = function(){
        if (!this.head) { 
            console.log("Empty List")
            return this 
        }//empty list ends
        if (!this.head.next) { 
            console.log("already @ front")
            return this 
        }//1 node list, ends immediately
        var min = this.head;
        var current = this.head;
        var pmin = null;
        while(current.next){
            if(min.val > current.next.val){
                pmin = current;
                min = current.next;
            }
            current = current.next;
        }
        if(min == this.head){
            console.log("already @ front")
            return this
        }//min is first, end
        pmin.next = min.next;
        min.next = this.head;
        this.head = min;
    }
    this.maxToBack = function () {
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list end
        if (!this.head.next) {
            console.log("already @ back")
            return this
        }//1 node in list, end immediately
        var max = this.head;
        var current = this.head;
        var pmax = null;
        while (current.next) {
            if (max.val < current.next.val) {
                pmax = current;
                max = current.next;
            }
            current = current.next;
        }
        if(current.val == max.val){
            console.log("already @ back")
            return this
        }
        if (max.val == this.head.val) { //max is first node
            this.head = max.next;
        }
        else{
            pmax.next = max.next;
        }
        current.next = new Node(max.val);//movetoback
    }
    this.findBack = function(){
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        return current.val
    }
    this.removeBack = function () {
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    this.addBack = function (value) {
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }
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
sL1.insert(0);
sL1.insert(5);
sL1.insert(6);
// sL1.printAll();
// console.log(sL1.findBack());
// sL1.removeBack();
// sL1.printAll();
// sL1.removeBack();
// sL1.printAll();
// sL1.minToFront();
sL1.maxToBack();
sL1.printAll();
// sL1.addBack(5);
// sL1.addBack(6);
// sL1.printAll();
// sL1.head.next = null;
// sL1.printAll();
