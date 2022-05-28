class Node{
    constructor(data, next = null){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null //will return top value of the stack 
        this.size = 0
    }

    pushBack(data){
        const node = new Node(data)
        node.next = this.head
        this.head = node
        if(this.size ===0){
            this.tail = node
        }
        this.size++
    }

    popBack(){
        if(!this.size){
            throw Error ("Stack is empty")
        }
        let curr = this.head
        this.head = this.head.next
        this.size--
        curr.next = null
        return curr.data
    }
}

class Stack{
    constructor(){
        this.list =new LinkedList()
    }

    push(val){
        //append at end
        this.list.pushBack(val)
    }

    pop(){
        //remove from the end
        return this.list.popBack()
    }

    getTop(){
        //value of top
        return this.list.head
    }

    get getSize(){  //made this function a getter now no need for () at the end of function name while calling it
        return this.list.size;
    }

    isEmpty(){
        return this.list.size===0
    }
}

let st = new Stack()

st.push(5)
st.push(10)
st.push(15)
st.push(20)

while(!st.isEmpty()){
    console.log(st.getSize," ====== ",st.pop())
}

console.log(st.isEmpty())