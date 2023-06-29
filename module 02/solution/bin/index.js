"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculations_1 = require("./calculations");
var reports_1 = require("./reports");
var myShapes = [
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
var areasReport = (0, reports_1.createShapeReport)(myShapes, calculations_1.areaCalc);
var circumReport = (0, reports_1.createShapeReport)(myShapes, calculations_1.circumferenceCalc);
console.log(JSON.stringify(areasReport));
console.log(JSON.stringify(circumReport));
//# sourceMappingURL=index.js.map