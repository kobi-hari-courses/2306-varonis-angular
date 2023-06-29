"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShapeReport = void 0;
function createShapeReport(shapes, valueCalc) {
    return shapes.map(function (shape) { return ({
        shape: shape,
        value: valueCalc(shape)
    }); });
}
exports.createShapeReport = createShapeReport;
//# sourceMappingURL=reports.js.map