function BTNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}
function BSTree(root = null) {
    this.root = root;
    this.add = function (val) {
        if (!this.root) {
            this.root = new BTNode(val);
            // console.log("ROOT:"+this.root.val);
            return this;
        }
        var current = this.root;
        while (current) {
            if (val < current.val) {
                if (!current.left) {
                    // console.log(`PARENT:${current.val}`);
                    current.left = new BTNode(val);
                    // console.log(`LEFT:${current.left.val}`);
                    return this;
                }
                // console.log(`CURRENT:${current.val} NEXTLEFT:${current.left.val}`);
                current = current.left;
            } else {
                if (!current.right) {
                    // console.log(`PARENT:${current.val}`)
                    current.right = new BTNode(val);
                    // console.log(`RIGHT:${current.right.val}`)
                    return this;
                }
                // console.log(`CURRENT:${current.val} NEXTRIGHT:${current.right.val}`);
                current = current.right;
            }
        }
    }
    this.isEmpty = function () { return !this.root; }
    this.contains = function (val) {
        if (!this.root) { return false; }
        var current = this.root;
        while (current) {
            if (val === current.val) { return true; }
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    this.min = function () {
        if (!this.root) { return 0; }
        if (!this.root.left && !this.root.right) { return this.root.val; }
        var current = this.root;
        while (current.left) {
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
    this.size = function (sum = 0, current = this.root) {
        if (!current) { return sum; }
        if (current.left) {
            sum += this.size(0, current.left);
        }
        if (current.right) {
            sum += this.size(0, current.right);
        }
        return sum + 1;
    }
    this.height = function (count = 0, current = this.root) {
        if (!current) { return count; }
        count += 1;
        if (!current.left && !current.right) {
            return count;
        }
        var lHeight = count;
        var rHeight = count;
        lHeight = this.height(count, current.left);
        rHeight = this.height(count, current.right);
        // console.log(`@Location: ${current.val} Comparing LEFT:${count} and RIGHT:${rHeight}`);
        if (lHeight < rHeight) {
            // console.log(`RIGHT is larger:${rHeight}`);
            return rHeight;
        }
        // console.log(`LEFT is larger:${count}`);
        return lHeight;
    }
}
var bst = new BSTree();
bst.add(17).add(10).add(25).add(15).add(5).add(20).add(22).add(24).add(23)
console.log("Size:" + bst.size());
console.log("height:" + bst.height());
