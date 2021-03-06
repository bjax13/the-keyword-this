//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer -- To be able to use context.  Also you can encapsilate your code in objects

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      // 1. does it have an explicit context
      // 2. is there something to the left of the . for an implicit context
      // 3. defult to the window
      // 4 was the new keyword used.

  // 3) What is the difference between call and apply?

      //Answer call you pass in individule paramiters,  apply you pass in an array with the paramiters

  // 4) What does .bind do?

      //Answer create a function that is forever connected to the context set with bound.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property.
  //*Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "steve",
  email: "steve@DM.an",
  getUsername: function(){
    return this.username;
  }
};


//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

console.log(user.getUsername());
//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
  function Car(model, make, year) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.move = 0;
    this.moveCar = function (){
      this.move+=10;
      return this.move;
    }

  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function.
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call
//the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  console.log(getYear.call(prius));
  console.log(getYear.apply(mustang));



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

console.log(userName);

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here either at call function or an apply function

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here the window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
