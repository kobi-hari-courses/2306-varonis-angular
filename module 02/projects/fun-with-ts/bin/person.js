"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = '';
        this.lastName = '';
    }
    Person.prototype.log = function () {
        console.log("Person: ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map