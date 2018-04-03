// Task 
// Write a Person class with an instance variable, age, and a constructor that takes an integer, initial age, as a parameter. 
// The constructor must assign initial age to age after confirming the argument passed as initial age is not negative; if a negative argument is passed as initial age ,
// the constructor should set age to 0  and print Age is not valid, setting age to 0.. 



function Person(initialAge){
    // Add some more code to run some checks on initialAge
  if (initialAge < 0) {
      console.log('Age is not valid, setting age to 0.');
      initialAge = 0;
  }
    
  this.age = initialAge;
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if (this.age < 13) {
        console.log('You are young.');
    } else if (this.age >= 13 && this.age < 18) {
      console.log('You are a teenager.');        
    } else {
      console.log('You are old.');
    }
  };
   this.yearPasses=function(){
       this.age++;
          // Increment the age of the person in here
   };
}