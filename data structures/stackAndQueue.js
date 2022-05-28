//queue - linear data structure - FIFO - ticket counter, event queue, 
//sliding window, graph - used in BFS, tree in order reversal, priority queue


//linked list based implementation of queue

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null; //maintain it to append element from the end - else we will have to traverse all queue and order will be O(n)
        this.size = 0;
    }

    appendElement(data){
        const node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeElement(){
        if(this.size === 0){
            throw Error("queue is empty")
        }
        let curr = this.head;
        this.head = curr.next;
        curr.next = null;
        this.size--
        return curr.data;
        
    }
}

class Queue{
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(data){  //adding element in a queue
        this.list.appendElement(data);
    }
    dequeue(){
        return this.list.removeElement();
    }

    get getSize(){
        return this.list.size;
    }

    frontElement(){
        return this.list.head.data;
    }

    isEmpty(){
        return this.list.size === 0
    }
}

// const que = new Queue()

// que.enqueue(10)
// que.enqueue(20)
// que.enqueue(30)
// que.enqueue(40)

// while(!que.isEmpty()){
//     console.log(que.getSize," ====== ",que.dequeue())
// }

// console.log(que.isEmpty())

//implement stack using queue

class StackUsingQueue{
    constructor(){
        this.q1 = new Queue();  //took 2 queues becasue we wanted to use only queue operations
        this.q2 = new Queue();
        this.size = 0
    }

    push(data){

        if(this.q1.isEmpty()){
            this.q2.enqueue(data);
        }else{
            this.q1.enqueue()
        }
        this.size++
    }

    pop(){  //stack impl,meent using pup() - O(n) and push() is O(1)
        
        this.size = Math.max(0, this.size-1)
        if(this.q1.isEmpty()){

            while(this.q2.getSize !== 1){
                this.q1.enqueue(this.q2.dequeue());
                
            }
            return this.q2.dequeue()
        }else{
            while(this.q1.getSize !== 1){
                this.q2.enqueue(this.q1.dequeue());
                
            }
            return this.q1.dequeue()
        }
        
    }

    isEmpty(){
        return this.size === 0;
    }

    get getSize(){
        return this.size;
    }
}


// let st = new StackUsingQueue()

// st.push(5)
// st.push(10)
// st.push(15)
// st.push(20)

// while(!st.isEmpty()){
//     console.log(st.getSize," ====== ",st.pop())
// }

// console.log(st.isEmpty())

//implement queue using stack  - stack operations  - push, pop, top, getSize, isEmpty