function Node(val) {
    this.val = val;
    this.next = null;
}

function SLL(head=null) {
    //attributes of SLL class
    this.head = head;

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
        console.log("Linked List");
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
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
function SLL2(head=null) {
    //Inherit of SLL class
    SLL.call(this,head);

    //methods
    this.append = function(value,after){//add val after "after" variable
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var current = this.head;
        var found = false
        while(current){
            if(current.val === after){
                found = true;
                var newNode = new Node(value);
                newNode.next = current.next;
                current.next = newNode;
                current = newNode.next;//iteration past val
            }
            else{
                current = current.next;//iteration-regular
            }
        }
        if(!found){
            current.next = new Node(value);
        }
        return this
    }
    this.prepend = function(value,before){//add val before "before" variable
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var found = false;
        if(this.head.val === before){
            found = true;
            var newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            var current = newNode.next;
        }//value is first
        else{
            var current = this.head;
            var found = false;
        }        
        while(current.next){
            if(current.next.val === before){
                found = true
                var newNode = new Node(value);
                newNode.next = current.next;
                current.next = newNode;
                current = newNode.next;
                // previous = current.next;
            }
            else{current = current.next;}
        }
        if (!found) {
            console.log("value added to end b/c second parameter not found")
            current.next = new Node(value);
        }
    }
}

var sL1 = new SLL2();
sL1.insert(0).insert(5).insert(6)
// sL1.printAll()
sL1.prepend(2,10)
sL1.printAll()