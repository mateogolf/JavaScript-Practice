function BTNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
function BSTree(root=null){
    this.root=root;
    this.add = function(val){
        if(!this.root){
            this.root = new BTNode(val);
            // console.log("ROOT:"+this.root.val)
            return this;
        }
        var current = this.root;
        while(current){
            if(val<current.val){
                if(!current.left){
                    // console.log(`PARENT:${current.val}`)
                    current.left = new BTNode(val);
                    // console.log(`LEFT:${current.left.val}`)
                    return this;
                }
                // console.log(`CURRENT:${current.val} NEXTLEFT:${current.left.val}`)
                current = current.left;
            }else{
                if (!current.right) {
                    // console.log(`PARENT:${current.val}`)
                    current.right = new BTNode(val);
                    // console.log(`RIGHT:${current.right.val}`)
                    return this;
                }
                // console.log(`CURRENT:${current.val} NEXTRIGHT:${current.right.val}`)
                current = current.right;
            }
        }
    }
    this.isEmpty = function(){return !this.root;}
    this.contains = function(val){
        if(!this.root){return false;}
        var current = this.root;
        while(current){
            if(val===current.val){return true;}
            if(val<current.val){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }
    this.min = function(){
        if (!this.root) { return 0; }
        if (!this.root.left && !this.root.right){return this.root.val;}
        var current = this.root;
        while(current.left){
            current = current.left;
        }
        return current.val;
    }
    this.max = function () {
        if (!this.root) { return 0; }
        if (!this.root.left && !this.root.right) { return this.root.val; }
        var current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.val;
    }
    this.size=function(sum=0,current=this.root){
        if(!current){return sum;}
        if(current.left){
            sum+=this.size(0,current.left);
        }
        if(current.left){
            sum+=this.size(0,current.right);
        }
        return sum+1;
    }

}
var bst = new BSTree();
console.log("isEmpty:"+bst.isEmpty());
console.log("SIZE:"+bst.size());
bst.add(17).add(10).add(25).add(15).add(5).add(20)
console.log("MIN:"+bst.min());
console.log("MAX:"+bst.max());
console.log("isEmpty:"+bst.isEmpty());
console.log("SIZE:"+bst.size());
var test=10;
console.log(`Contains ${test}: `+bst.contains(10));