//console.log('linked')
//TODO:
// need math dot random
//push that value into a variable
//use if/else statements to reset state property to 1 or 0
//using this.state?





let coin = {
    state: 0,    
    flip: function () {
       this.state = Math.floor(Math.random()*2)
       return this.state



        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },




    
    toString: function () {
        
        if(this.state === 0){
            return "tails"
        }else if(this.state === 1){
            return "head"
        }
    
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },

    //image not appending to page
    toHTML: function() {
       
        let image = document.createElement('img');
        let heads = image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQczhdOe7EW1V9YzLl-9ioUB0wkuLe8twYxMA&usqp=CAU'
        let tails = image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7J4sotmHHn2_Nc1RWxS4H-uJWjBJmEnC5tA&usqp=CAU'
        if(this.state === 0){
            return  heads
             
       
        } else if(this.state === 1){
            return  tails
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
      
    }
    return image;
}

} 

/*Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method)

Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method). */

   


 function display20Flips(){
   
    for(coin.flip = 1; coin.flip <= 20; coin.flip ++){

       coin.toString
       
        
       
        document.body.append (toString)
        
 
        //random result not showing up and not printing to page
}

}
display20Flips()
