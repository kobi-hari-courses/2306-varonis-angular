function max(a, b) {
    if (a > b) return a;
    return b;
}


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.log = function() {
    console.log('Hi I am a person, my name is ' + this.firstName + ' ' + this.lastName);
}


var p = new Person('John', 'Smith');
var p2 = new Person('Paul', 'Marks');

console.log('p.log === p2.log', p.log === p2.log);