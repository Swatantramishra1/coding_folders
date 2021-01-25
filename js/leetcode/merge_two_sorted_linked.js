class Node {
    constructor(element) {
        this.elem = element;
        this.next = null;
    }
}



// class Node {
//     constructor(val, next) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.currentPointer = null;

    }

    addElem(elem) {
        let node = new Node(elem);
        if(!this.head) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next ) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    sortedElem(l1,l2) {
        if(!l1.head && l2.head){
            var current = l2.head;
            while (current ) {
                this.addElem(current.elem);
                current = current.next;
            }
        }

        if(!l2 && l1){
            var current = l1.head;
            while (current ) {
                this.addElem(current.elem);
                current = current.next;
            }
        }

        if(l1.head && l2.head) {

            var current1 = l1.head;
            var current2 = l2.head;
            while (current1 || current2 ) {
                const l1Value =  current1 ? current1.elem : null ;
                const l2Value = current2 ? current2.elem : null ;
                if((l1Value !== null) && l1Value <= l2Value) {
                    this.addElem(current1.elem);
                    current1 = current1.next;
                } else if((l2Value !== null) ) {
                    this.addElem(current2.elem);
                    current2 = current2.next;
                }
            }
        }
    }

    print() {
        if(this.head) {
            var current = this.head;
            while (current) {
                console.log(current.elem);
                current = current.next;
            }
        }
    }
}


// let l1 = new LinkedList();
// let l2 = new LinkedList();
// l1.addElem(1);
// l1.addElem(2);
// l2.addElem(2);
// l2.addElem(6);

// let linkedList = new LinkedList();
// linkedList.sortedElem(l1,l2);
// linkedList.print();

let np = "a.b.c.d=12";
let k = np.split(".");
let lp = k[k.length-1].split("=");
console.log(lp)
result = {}
let lastContent = "";
let dt = "a.b.c.d=12".split('.');
dt.reduce(function(prev, e) {
    var newObj = {};
    console.log("prev",prev,"ee", e);
    const arr= e.split("=");
    if(arr.length > 1) {
        prev = {
            [arr[0]]: arr[1]
        }

        console.log("sdd",prev);
    } else {
        prev[e] = newObj;
    }
    
    return newObj;
}, result);







console.log(result);