// node contains data and information for next node
// direct access like as in arra - arr[3] is not possible
// 1st element - head


class Node{
    constructor(data, next = null){
        this.data = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.firstNode = null
        this.lastNode = null
    }

    insertFrontOfTheList(data){
        const node = new Node(data) // node created but not linkied with any list

        //if list is empty
        if(!this.firstNode){
            this.firstNode = node
            this.tail = node //last node will not need to be updated if it is not an empty list
        }else{
            const temp = this.firstNode
            this.firstNode = node
            node.next = temp
        }
    }


    insertInLastOfList(data){
        const node = new Node(data)

        //if list is empty
        if(!this.firstNode){
            this.firstNode = node
            this.lastNode = node //last node will not need to be updated if it is not an empty list
        }else{
            this.lastNode.next = node
            this.lastNode = node
        }
    }


    printList(){
        let curr = this.firstNode

        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }

    insertAfterKthPosition(data,k){

        let count = 0
        let curr = this.firstNode

        while(curr && count !==k){    //can be used to iterate over the list and search for something
            curr = curr.next
            count++
        }

        if(!curr && count!==k){
            console.log("Invalid Position")
            throw Error("Invalid Position")
        }else if(!curr && count === k){
            this.inserInLastOfList(data)
        }else{
            const node = new Node(data)
            node.next = curr.next
            curr.next = node
        }
    }

    deleteFromFront(){
        if(!this.firstNode){
            throw Error("cant delete from empty list")
        }

        //only one element
        let temp = this.firstNode
        this.firstNode = this.firstNode.next
        temp.next = null

        if(!this.firstNode){
            this.lastNode = null
        }
    }

    deleteFromLast(){
        let curr = this.firstNode
        while(curr.next !== this.lastNode){
            curr = curr.next
        }
        curr.next = null
        this.lastNode = curr
    }

    deleteFromKthPostion(k){

        let count = 1
        let curr = this.firstNode
        if(k===1){
            this.deleteFromFront()
        }

        while(curr && count !== k-1){
            curr = curr.next
            count++
        }

        if(!curr){ //invalid position
            console.log("Invalid Position")
            throw Error("Invalid Position")
        }else{
            let targetNode = curr.next
            curr.next = targetNode.next
            targetNode.next = null
            //if deleted last node - lastNode will change
            if(!curr.next){
                this.lastNode = curr
            }
        }
    }

    reverseList(){
        let curr = null

        while(this.firstNode){

            if(!curr){
                this.lastNode = this.firstNode
            }
            let nextNode = this.firstNode.next
            this.firstNode.next = curr
            curr - this.firstNode
            this.firstNode = nextNode
        }

        this.firstNode = curr
    }

    loopStartNodeHashingTechnique(){

        let isLoopStarted = false
        let set = new Set()
        let curr = this.firstNode

        while(curr && !isLoopStarted){
            if(set.has(curr)){
                isLoopStarted = true
            }else{
                set.add(curr)
                curr = curr.next
            }
        }
        if(isLoopStarted){
            return curr
        }
        return null
    }

    loopDetectionWithSlowPtr(){    //will not tell the position of loop
        let slowPtr = this.firstNode
        let fastPtr = slowPtr

        while(slowPtr && fastPtr && fastPtr.next){
            slowPtr = slowPtr.next
            fastPtr = fastPtr.next.next
            if(slowPtr === fastPtr){
                return true
            }
        }
        return false
    }
}

// const list = new linkedList()
// list.insertFrontOfTheList(10)
// list.insertFrontOfTheList(11)
// list.insertFrontOfTheList(12)
// list.insertInLastOfList(56)
// list.insertAfterKthPosition(2,2)
// list.printList()

// module.exports = {linkedList, Node}



/**
 * learned till now
 * insert at start - O(1)
 * insert at middle - O(n)
 * insert at end - O(1)
 * print
 * iterate
 * 
 * delete from front = O(1)
 * delete from last - O(n) - traversed to last
 * deletion in between - O(n)
 * 
 * accessing element is O(n)
 * 
 * array
 * insertion - last O(1), middle O(n) and front O(n)
 * deletion - last O(1), middle O(n) and front O(n)
 */