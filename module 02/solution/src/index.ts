import { areaCalc, circumferenceCalc } from "./calculations";
import { createShapeReport } from "./reports";
import { Shape } from "./shapes";

const myShapes: Shape[] = [
    {
        kind: 'Circle', 
        radius: 10
    }, 
    {
        kind: 'Rectangle', 
        height: 5, 
        width: 12
    }, 
    {
        kind: 'Triangle', 
        base: 6, 
        height: 8
    }
];

const areasReport = createShapeReport(myShapes, areaCalc);
const circumReport = createShapeReport(myShapes, circumferenceCalc);

console.log(JSON.stringify(areasReport));
console.log(JSON.stringify(circumReport));