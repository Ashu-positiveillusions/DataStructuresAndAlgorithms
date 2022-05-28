class DNode{
    constructor(data, prev=null,next=null){
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList{
    constructor(){

        this.head = null
        this.tail = null
        this.size = 0
    }

    insertAtBeginning(data){

        let dNode = new DNode(data) //resides in memory but no link with any lists
        //if list is empty
        if(!this.head){

            this.head = dNode
            this.tail = dNode

        }else{
            dNode.next = this.head
            this.head.prev = dNode
            this.head = dNode
        }

        this.size++

    }

    insertAtEnd(data){

        let dNode = new DNode(data)
        if(!this.tail){
            this.head = dNode
            this.tail = dNode
        }

        this.tail.next = dNode
        dNode.prev = this.tail
        this.tail = dNode

        this.size++
    }

    insertAtKPosition(data,k){

        if(this.size<k){
            throw Error ("invalid position")
        }
        if(this.size===k){
            this.insertAtEnd(data)
        }else{
            const dNode = new DNode(data)

            let count = 1
            let curr = this.head

            while(count !== k){
                curr = curr.next
                count++
            }

            let nextNode = curr.next
            curr.next = dNode
            dNode.prev = curr
            dNode.next = nextNode
            nextNode.prev = dNode

            this.size++
        }
    }

    printDList(){
        let curr = this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }

    deletionFromBeginning(){
        if(!this.head){
            throw Error ("List is Empty, can't delete.")
        }
        if(this.size ===1){
            this.head = null
            this.tail = null
        }else{
            let temp = this.head
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }

        this.size --

    }

    deletionFromEnd(){
        if(!this.head){
            throw Error ("List is Empty, can't delete.")
        }
        if(this.size ===1){
            this.deletionFromBeginning()
        }else{
            let secondLast = this.tail.prev
            secondLast.next = null
            this.tail.prev = null
            this.tail = secondLast
        }
        this.size--
    }

    deletionFromKth(k){
        if(this.size<k){
            throw Error ("invalid position")
        }else if(this.size ===k){
            this.deletionFromEnd()
        }else{
            let count =1
            let curr = this.head
            while(count === k){
                curr = curr.next
                count++
            }

            curr.prev.next = curr.next
            curr.next.prev = curr.prev
            curr.next = null
            curr.prev = null

        }
        this.size--
    }
}


const dList = new DoublyLinkedList()
dList.insertAtBeginning(5)
dList.insertAtBeginning(4)
dList.insertAtBeginning(6)
dList.insertAtEnd(10)
dList.insertAtEnd(11)
dList.insertAtEnd(12)
dList.insertAtKPosition(7,3)

dList.printDList()

/**
 * insertion Time Complexity
 * beginning O(1)
 * mid O(n) - time to find kth position but insertion is O(1) - in array O(n) due to shifting
 * end O(1)
 * 
 * deletion
 * start O(1)
 * end O(1)
 * mid O()
 */