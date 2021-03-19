 class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

 class LinkedList {

    constructor() {
        this.head = null;
    }
    
    addStack(element) {
        let node = new Node(element);
        node.next = this.head;
        this.head = node;
    }


    add(element) {
        let node = new Node(element);
        if(!this.head) {
            this.head = node
        }
        else {
            let current = this.head
            while(current.next) { 
                current = current.next;
            }
            current.next = node;
        }
    }

    addInMiddle(position,element) {
        let node = new Node(element);
        let prev,current;
        let count = 1;
        if(!this.head) {
            this.head = node;
        } else if(position == count) {
            node.next = this.head;
            this.head = node;
        } else {
            current = this.head;
            while(current && count < position) {
                count++;
                prev = current;
                current = current.next;
            }

            prev.next = node;
            node.next = current;
        }
    }

    removeAt(position) {
        let prev,curr;
        let count = 1;

        if(position == count) {
            this.head = this.head.next;
        } else {
            curr = this.head;
            while(curr.next) {
                if(count === position) {
                    prev.next = curr;
                    curr = curr.next;
                }
                else {
                    prev = curr;
                    curr = curr.next;
                }
                count++;
                ;
            };


        }
    }

    popFromStack() {
      let element = this.head.element;

      this.head = this.head.next;

      return element;
    }

    findNthNodeFromEnd(n) {
        if(!this.head) {
            console.log("No Element Found");
        } else {
            let pTempTerm = this.head;
            let pNthNode = this.head;

            for (let i = 1; i < n; i++) {
                if(pTempTerm) {
                    pTempTerm = pTempTerm.next;
                }
                
            }

            while(pTempTerm) {

                if(pNthNode == null) {
                    pNthNode = this.head;
                } else if(pTempTerm.next) {
                    pNthNode = pNthNode.next;
                }

                pTempTerm = pTempTerm.next;
        
            }

            console.log(`element from last ${n} is *** ${pNthNode.element}***`);
        }
    }

    findCircleInList() {
        // To be written in some time
    }


    print() {
        let current = this.head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }
}



module.exports  = {
     Node,
    LinkedList
}