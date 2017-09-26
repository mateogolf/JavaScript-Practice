function DLNode(value){
    this.val = value;
    this.prev = null;
    this.next = null;
}
function DLL(){
    this.head = null;
    this.tail = null;
    this.push = function(value){
        if(!this.head){
            this.head = new DLNode(value);
            this.tail = this.head;
            return this;
        }
        this.tail.next = new DLNode(value);
        this.tail.next.prev = this.tail;
        this.tail = this.tail.next;
        return this;
    }
    this.pop = function(){//remove tail and return value
        if(!this.head){return null;}
        if(!this.head.next){
            var temp = this.head.val;
            this.head = null;
            this.tail = null;
            return temp;
        }
        var temp = this.tail.val;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return temp;
    }
    this.front = function(){
        return this.head;
    }
    this.back = function () {
        return this.tail;
    }
    this.contains = function(value){
        if (!this.head) {return false;}
        if(this.head.val===value||this.tail.val===value){return true;}
        var current = this.head.next;
        while(current != this.tail){
            if(current.val === value){return true;}
            current = current.next;
        }
        return false;
    }
    this.size = function(){
        if (!this.head) { return 0; }
        var count=1;
        var current = this.head.next;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    this.printAll = function () {
        console.log("Doubly Linked List");
        if (!this.head) {
            console.log("Empty List");
            return this;
        }//empty list ends

        var current = this.head;
        var count = 1;
        while (current) {
            console.log(count, ": ", current.val);
            current = current.next;
            count++;
        }
        return this;
    }
}
var dl1 = new DLL();
dl1.push("A").push("B").push("C").push("D").printAll();
console.log(dl1.pop());
// dl1.printAll();
console.log(dl1.contains("B"));
dl1.printAll();
console.log(dl1.size());
