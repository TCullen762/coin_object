//console.log('linked')
//TODO:
// need math dot random
//push that value into a variable
//use if/else statements to reset state property to 1 or 0
//using this.state?



//Math.random is not changing the value of the state property

let coin = {
    state: 0,    
    flip: function () {
       this.state = Math.floor(Math.random()*2)
       return this.state



        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },




    //loop goes here?
    toString: function () {
        
        if(this.state === 0){
            return "tails"
        }else if(this.state === 1){
            return "head"
        }
    
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state === 0){
            return //add image voodoo
        } else if(this.state === 1){
            return //add image voodoo
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};//if /else src xhange, 


console.log(coin.state)