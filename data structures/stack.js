
/**
 * Assignment :
Question: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Following functions need to be written:
MinStack() { }
void push(int val) { }
void pop() { }
int top() { }
int getMin() { }

Write a proper working code in a language of your choice.
 * 
 */



//solution using javascript
var MinStack = function(){
    this.values = []
}


//add an element to the top of the stack along with the minimum value till now
MinStack.prototype.push = function(val) {
    if(this.values.length ===0){
        this.values.push([val,val])
    }else{
        this.values.push([val,Math.min(val,this.values[this.values.length-1][1])])
    }
};


//removes the element from the top of the stack
MinStack.prototype.pop = function(){
    if(this.values.length === 0) throw Error ("stack is empty") //the stack is empty, so cannot pop anything
    return (this.values.pop())[0]
};


//returns the element at the top of the stack
MinStack.prototype.top = function() {
    if(this.values.length === 0) throw Error ("stack is empty")  //stack is empty, so nothing at the top
    return this.values[this.values.length-1][0]
};


//returns the minimum value in stack till now
MinStack.prototype.getMin = function() {
    if(this.values.length === 0) throw Error ("stack is empty")  // stack is empty, so no minimum element
    return this.values[this.values.length-1][1]
};

const stack = new MinStack()
// stack.push(5)
// stack.push(-5)
// stack.push(-45)
// console.log(stack)
stack.pop()
// stack.getMin()
// stack.top()
console.log(stack)







// class minStack{
//     constructor(){
//         this.value = []
//         // this.minVal = Infinity
//     }

//     push(x){
//         if(this.value.length ===0){
//             this.value.push([x,x])
//         }
//         else{
//             this.value.push([x,Math.min(x,this.value[this.value.length-1][1])])
//         }
//         // if(x<this.minVal) this.minVal = x
//     }

//     pop(){
//         let popped = this.value.pop()
//         // if(this.minVal === popped) this.minVal = Math.min(...(this.value))
//         return popped[0]
//     }

//     top(){
//         return this.value[this.value.length-1][0]
//     }


//     getMin(){
//         // return this.minVal
//         return this.value[this.value.length-1][1]
//     }
// }


// let stack = new minStack()

// stack.push(10)
// // console.log(stack)
// stack.push(20)
// // console.log(stack)
// stack.push(100)
// stack.push(-205)
// // stack.push(3050)
// // stack.push(1)
// // stack.push(2)
// console.log(stack)
// console.log(stack.pop())
// console.log(stack.getMin())
// console.log(stack.top())