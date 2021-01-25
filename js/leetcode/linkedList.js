class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class Linkedlist {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    addElem(elem) {
        var node = new Node(elem);
        if(this.root == null) {
            this.root = node;
        } else {
           var current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;

    }

    addElementAt(elem, index) {
        if(index > 0 && index > this.size) {
            console.log("no index")
        } else {
            var node = new Node(elem);
            var current = this.root, prev;
            if(index == 0) {
                node.next = current;
                this.root = node;
            } else {
                current = this.root;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = current;
                    current = current.next;
                }

                node.next = current;
                prev.next = node;
            }

            this.size++;
        }
    }

    print() {
        if(this.root == null) {
            console.log("No Elem");
        } else {
           var current = this.root;
            
            while (current) {
                console.log(current.element);
                current = current.next;
            }
           
        }
    }

}

const linkedlist = new Linkedlist();
linkedlist.print();
linkedlist.addElem(4);
linkedlist.addElem(5);
linkedlist.addElem(6);
linkedlist.addElementAt(9,1);
linkedlist.print();