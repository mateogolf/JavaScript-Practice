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
        }//loops to last node is current
        current.next = new Node(value);
        return this;
    }
    this.printAll = function () {
        console.log("Linked List");
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty list ends

        var current = this.head;
        var count = 1;
        // console.log(count, ": ", current.val);
        while (current) {
            console.log(count, ": ", current.val);
            current = current.next;
            count++;
        }
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
            // var prev = this.head;
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
                else { current = current.next; }
            }//nodes >er moved after value
            if (!foundEnd) {
                while (current.next) {
                    if (current.next.val < value) {
                        let lesser = current.next;
                        current.next = lesser.next;
                        lesser.next = prev.next;
                        prev.next = lesser;
                    }
                    else { current = current.next; }
                }
            }
        }//if found is not the first node

        return this;
    }//partition method
    this.partition2 = function (value) {
        if (!this.head || !this.head.next) {
            console.log("Empty List or too short")
            return this
        }//empty or 1 node list: do nothing
        var current = this.head;
        var found;
        if (this.head.val != value) {
            while (current.next) {
                if (current.next.val == value) {
                    found = true;
                    let valNode = current.next;
                    current.next = valNode.next;
                    valNode.next = this.head;
                    this.head = valNode;
                    break;
                }
                else { current = current.next; }
            }
            if (!found) {
                console.log("Value not in the list");
                return this;
            }
            current = this.head;
        }
        while (current.next) {
            if (current.next.val < value) {
                let lesser = current.next;
                current.next = lesser.next;
                lesser.next = this.head;
                this.head = lesser;
            }
            else { current = current.next; }
        }
        return this;
    }//partition method
    this.copy = function () {
        if (!this.head) {
            console.log("Empty List")
            return this
        }//empty or 1 node list: do nothing
        var newSLL = new SLL2();
        newSLL.head = new Node(this.head.val);
        if (!this.head.next) { return newSLL; }
        //add new nodes to new list
        var current = this.head.next;
        var newNode = newSLL.head;
        while (current) {
            newNode.next = new Node(current.val);
            current = current.next;
            newNode = newNode.next;
        }
        return newSLL;
    }
    this.filter = function (low, high) {
        if (!this.head) {
            console.log("Empty List")
            return this
        }
        var current = this.head;
        var newSLL = new SLL2();
        while (current) {
            if (current.val > low && current.val < high) {
                if (!newSLL.head) {
                    newSLL.head = new Node(current.val);
                    var newNode = newSLL.head;
                }
                else {
                    newNode.next = new Node(current.val);
                    newNode = newNode.next;
                }
            }
            current = current.next;
        }
        return newSLL;
    }
    this.reverse = function () {//method to reverse the list in place
        if (!this.head || !this.head.next) { return this; }
        var current = this.head;
        while (current.next) {
            var temp = current.next;
            current.next = temp.next;
            temp.next = this.head;
            this.head = temp;
        }
        return this;
    }
    this.isPal = function () {
        if (!this.head) { return false; }
        if (!this.head.next) { return true; }
        var front = this.head;
        var end = this.head;
        var length = 1;
        while (end.next) {
            length++;
            end = end.next;
        }
        var half = Math.floor(length / 2);
        for (let compare = 0; compare < half; compare++) {//iterates half times
            if (!(front.val === end.val)) { return false; }
            front = front.next;
            end = front;
            for (let findEnd = 0; findEnd < (length - 3); findEnd++) {
                end = end.next;
            }
            length--;
        }
        return true;
    }
    this.isLoop = function () {
        if (!this.head || !this.head.next) { return false; }
        var slow = this.head;
        var speedy = this.head.next;
        while (speedy) {
            if (slow === speedy) {
                return true;
            }
            else {
                slow = slow.next;
                if (speedy.next) {
                    speedy = speedy.next.next;
                }
                else { return false; }
            }
        }
        return false;
    }
    this.breakLoop = function () {
        if (!this.head || !this.head.next) { return this; }
        var current = this.head.next;
        while (current) {
            var check = this.head;
            while (check != current) {
                if (current.next === check) {
                    current.next = null;
                    return this;
                }
                check = check.next;
            }
            current = current.next;
        }
    }
    //use breadcrumbs attribute
    this.breakLoop2 = function () {
        if (!this.head || !this.head.next) { return this; }
        var current = this.head;
        while (current.next) {
            if (current.next.breadcrumb) {
                current.next = null;
                break;
            }
            current.breadcrumb = true;
            current = current.next;
        }
        current = this.head;
        while (current) {
            if (current.breadcrumb) {
                delete current.breadcrumb;
            }
            current = current.next;
        }
        return this;
    }
}
function SLL2(head = null) {
    //Inherit of SLL class
    SLL.call(this, head);
    
    //methods
    this.bubbleSortAsc = function(){
        if (!this.head || !this.head.next) { return this; }
        let sorted=false;
        let prev=this.head;
        let current = this.head;
        while(current.next){
            if(prev==current){current = prev.next;}
            if(prev.val>current.val && prev == this.head){
                this.head = current;
                prev.next = current.next;
                current.next = prev;
                current = prev.next;
                if(!current) return this;
            }
            if(current.next.val>=current.val){
                prev = current;
                current = current.next;
            }else{
                let temp = current.next;
                current.next = current.next.next;//BREAK HERE??
                prev.next = temp;
                temp.next=current;
                prev=temp;
                sorted=true;
            }
            if(sorted && !current.next){
                console.log("List sorted once to below:")
                this.printAll();
                prev = this.head;
                current = this.head.next;
                sorted = false;
            }
        }
        console.log("Sorted");
        this.printAll();
        return this;
    }
    

}

var sl1 = new SLL2();
sl1.insert(3).insert(1).insert(4).insert(-4).insert(10).insert(5).printAll();
sl1.bubbleSortAsc();
