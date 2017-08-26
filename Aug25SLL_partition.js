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
    this.printAll = function () {
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
    this.append = function (value, after) {//add val after "after" variable
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var current = this.head;
        var found = false
        while (current) {
            if (current.val === after) {
                found = true;
                var newNode = new Node(value);
                newNode.next = current.next;
                current.next = newNode;
                current = newNode.next;//iteration past val
            }
            else {
                current = current.next;//iteration-regular
            }
        }
        if (!found) {
            current.next = new Node(value);
        }
        return this
    }
    this.prepend = function (value, before) {//add val before "before" variable
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var found = false;
        if (this.head.val === before) {
            found = true;
            var newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            var current = newNode.next;
        }//value is first
        else {
            var current = this.head;
            var found = false;
        }
        while (current.next) {
            if (current.next.val === before) {
                found = true
                var newNode = new Node(value);
                newNode.next = current.next;
                current.next = newNode;
                current = newNode.next;
                // previous = current.next;
            }
            else { current = current.next; }
        }
        if (!found) {
            console.log("value added to end b/c second parameter not found")
            current.next = new Node(value);
        }
    }
    this.removeNeg = function () {
        while (this.head) {
            console.log("Remove neg from start")
            if (this.head.val < 0) {
                this.head = this.head.next;
            }
            else { break }
        }//Removes all negatives from the front of the list
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends
        var current = this.head;
        var prev = this.head;
        while (current.next) {
            nextIsNeg = current.next.val < 0
            prev = current;
            current = current.next;
            if (nextIsNeg) {
                prev.next = current.next;
            }
        }
        return this;
    }
    this.concatList = function (newList) {
        if (!newList.head) {
            console.log("New List is Empty")
            return this;
        }//empty new list ends function with no change
        else if (!this.head) {
            this.head = newList.head;
            return this;
        }//empty original list and new list not empty==>original=new  
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newList.head;
        return this;
    }
    this.insertNode = function (newNode) {//Adds node object instead of creating a new node like insert
        if (newNode instanceof Node) {
            if (!this.head) {
                this.head = newNode;
                return this;
            }//empty list ends
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            return this;
        }
        else {
            console.log("parameter not a node")
            return this;
        }
    }
}
function SLL2(head = null) {
    //Inherit of SLL class
    SLL.call(this, head);
    
    //methods
    this.partition = function (value) {
        if (!this.head || !this.head.next) {
            console.log("Empty List or too short")
            return this
        }//empty or 1 node list: do nothing
        var current = this.head;
        var found = this.head;
        if (this.head.val == value) {
            while (current.next) {
                if (current.next.val < value) {
                    let lesser = current.next;
                    current.next = lesser.next;
                    lesser.next = this.head;
                    this.head = lesser;
                }
                else { current = current.next; }
            }
        }
        else {
            while (current.next) {//Look for first node with value
                if (current.next.val == value) {
                    found = current.next;
                    var prev = current;
                    break;
                }//found node with value, end loop
                current = current.next;
            }
            current = this.head;
            if (found === this.head) {
                console.log("value not in SLL")
                return this
            }//value not found, return this
            else if (!found.next) { var foundEnd = true }
            else { var foundEnd = false }
            //compare after found
            while (current.val != found.val) {//moves nodes w/ vals>value after
                if (current.next.val > value) {
                    if (current.next == prev) {
                        prev = current;
                    }
                    let greater = current.next;
                    current.next = greater.next;
                    greater.next = found.next;
                    found.next = greater;
                }
                else {current = current.next;}
            }//nodes >er moved after value
            if (!foundEnd) {
                while (current.next) {
                    if (current.next.val < value) {
                        let lesser = current.next;
                        current.next = lesser.next;
                        lesser.next = prev.next;
                        prev.next = lesser;
                    }
                    else{current = current.next;}
                }
            }
        }//if found is not the first node

        return this;
    }//partition method

}

var sl1 = new SLL2();
sl1.insert(-1).insert(2).insert(-3).insert(6).insert(-2).insert(10).insert(5);
sl1.partition(5);
sl1.printAll();