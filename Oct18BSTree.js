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
            return this;
        }
        var current = this.root;
        while(current){
            if(val<current.val){
                if(!current.left){
                    current.left = new BTNode(val);
                    return this;
                }
                current = current.left;
            }else{
                if (!current.right) {
                    current.right = new BTNode(val);
                    return this;
                }
                current = current.right;
            }
        }
    }
    // this.print = function(){
    //     if(!this.root){console.log("Empty Tree")}
    //     console.log("Root:"+this.root.val);
    //     current
    // }
    this.isEmpty = function(){return !this.root;}
    this.contains = function(value){
        if(!this.root){return false;}
        var current = this.root;
        while(current){
            if(val===current.val){return true;}
            if(val<current.left){
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
        while(current)
    }

}