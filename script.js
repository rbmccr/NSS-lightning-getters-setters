// Write a Person class with a constructor that takes 
  // a first and last name.
// Write a getter that returns the full name
// Write a setter that sets a nickname.

class person {

  constructor(props) {
    this.firstname = props.firstname
    this.lastname = props.lastname
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(value) {
    const parts = value.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  }

  get nickname() { //add the getter so you don't have to write console.log(Kanye._nickname)
    return this._nickname
  }

  set nickname(nick) {
    if (typeof(nick) === "string" && !nick.includes("swear")) { //can't contain "swear"
      this._nickname = nick
    }
  }

}

const Kanye = new person({
  firstname: "Kanye",
  lastname: "West"
})

console.log(Kanye.fullname);

Kanye.fullname = "Ye Wesutu";
console.log(Kanye.fullname);

console.log("should be undefined...", Kanye._nickname) //no nickname defined in object. Needs to be set
Kanye.nickname = "Yeezy"; //set nickname
console.log(Kanye.nickname); //getter syntax
console.log(Kanye._nickname); //syntax if no "get nickname()" was included in class object

// note that the underscore in front of the variable indicates that 
// the variable should not be accessed directly, since something
// else is accessing it indirectly

// --------------------------------------------------------------

// Make a childCare class where you can pass in any child and
// care giver as properties with methods to change diaper (console
// logs an inspirational quote to the care giver), and to store
// behavior in a properties (good or bad ect) using a setter.

let inspiration = ["Get over yourself.", "Everyone poops."];

class childCare {

  constructor(props) {
    this.child = props.child;
    this.caregiver = props.caregiver;
  }

  changeDiaper() {
    console.log("Here's some inspiration: " + inspiration[Math.floor(Math.random() * inspiration.length)]);
  }

  get behavior() {
    return this._behavior;
  }

  set behavior(goo) {
    this._behavior = goo;
  }

}

const baby1 = new childCare ({
  child: "North West",
  caregiver: "Dave Chappelle"
});

baby1.changeDiaper();
console.log(baby1.child + ",", baby1.caregiver + ",", baby1.behavior + " behavior");
baby1.behavior = "bad";
console.log(baby1.child + ",", baby1.caregiver + ",", baby1.behavior + " behavior");
