class Node{ //object constructor for Node. Each has a value, and a left and right child
  constructor(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BST{
  constructor(){
    this.root=null;
    this.left = null;
    this.right=null;
  }
  insert(value){
    const new_node = new Node(value);
    if(!this.root){
      this.root = new_node;
      return this;
    }
    let runner = this.root;

    while (runner){
      if(new_node.value < runner.value){
        if(runner.left !== null){
          runner=runner.left; //move runner here
        }
        else{
          runner.left = new_node; //insert node
          return this;
        }
      }
      else{
        if(runner.right !==null){
          runner=runner.right;
        }
        else{
          runner.right = new_node;
          return this;
        }
      }
    }
    return this;
  }
}

var first_bst = new BST();  //creates first BST, w/root node of null for now
//console.log(first_bst); //BST{root: null}
first_bst.insert(50);
first_bst.insert(80).insert(55).insert(25).insert(15).insert(90).insert(35).insert(5).insert(60).insert(75).insert(0);
console.log(first_bst);
console.log(first_bst.root);
//Node {
//  value: 50,
//  left:
//   Node {
//     value: 25,
//     left: Node { value: 15, left: [Object], right: null },
//     right: Node { value: 35, left: null, right: null } },
//  right:
//   Node {
//     value: 80,
//     left: Node { value: 55, left: null, right: [Object] },
//     right: Node { value: 90, left: null, right: null } } }
