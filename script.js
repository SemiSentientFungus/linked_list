class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }
}

let node1 = new Node(2);
let node2 = new Node(5);

let list = new LinkedList(node1);
