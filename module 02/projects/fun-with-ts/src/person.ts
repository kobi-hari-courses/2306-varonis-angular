export class Person {
    firstName: string = '';
    lastName: string = '';

    log() {
        console.log(`Person: ${this.firstName} ${this.lastName}`);
    }
}
