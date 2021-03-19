// Given the root of a binary tree, then value v and depth d, you need 
// to add a row of nodes with value v at the given depth d. The root node is at depth 1.

// The adding rule is: given a positive integer depth d,
//  for each NOT null tree nodes N in depth d-1, 
// create two tree nodes with value v as N's left subtree root and right subtree root.
// And N's original left subtree should be the left subtree of the new left subtree root,
//  its original right subtree should be the right subtree of the new right subtree root. 
// If depth d is 1 that means there is no depth d-1 at all, 
// then create a tree node with value v as the new root of the whole original tree,
//  and the original tree is the new root's left subtree.



// Example 1:
// Input: 
// A binary tree as following:
//        4
//      /   \
//     2     6
//    / \   / 
//   3   1 5   

// v = 1

// d = 2

// Output: 
//        4
//       / \
//      1   1
//     /     \
//    2       6
//   / \     / 
//  3   1   5   

// Example 2:
// Input: 
// A binary tree as following:
//       4
//      /   
//     2    
//    / \   
//   3   1    

// v = 1

// d = 3

// Output: 
//       4
//      /   
//     2
//    / \    
//   1   1
//  /     \  
// 3       1
// Note:
// The given d is in range [1, maximum depth of the given tree + 1].
// The given binary tree has at least one tree node.


class Tree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(tree) {
        if(tree.data > this.data) {
            this.insertLeft(tree);
        } else {
            this.insertRight(tree);
        }
    }

    insertLeft(tree) {
        if(this.left) {
            this.left.insert(tree);
         } else {
             this.left = tree;
         }
    }

    insertRight(tree) {
        if(this.right) {
            this.right.insert(tree);
        } else {
            this.right = tree;
        }
    }

    maxDefth(root) {

        if(!root) {
            return 0;
        } 

        return 1 + Math.max(this.maxDefth(root.left), this.maxDefth(root.right))
    }
}

function buildTree(items) {
    let root = null;
    let q = [];
    let count = 0;
  
    for (let i = 0; i < items.length; i++) {
      let node = items[i] !== null ? new Tree(items[i]) : null;
  
      if (!root) {
        root = node;
      } else {
        if (!count) {
          q[0].left = node;
          count++;
        } else {
          q[0].right = node;
          count = 0;
          q.shift();
        }
      }
  
      if (node)  
        q.push(node);
    }
    // console.log(root);
    return root;
  }

t = new Tree("b");
t.insert(new Tree("a"));
t.insert(new Tree("c"));
t.insert(new Tree("d"));
// console.log(t);
console.log(t.maxDefth(buildTree([1, 2, 3, 4, null, 6, 7])));

