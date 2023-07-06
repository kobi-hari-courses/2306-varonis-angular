export class AdditionService {
    id = Math.ceil(Math.random() * 100000);

    constructor() {
        console.log(`Addition Service created id = ${this.id}`);
    }

    add(a: number, b: number) {
        return a + b;
    }
}