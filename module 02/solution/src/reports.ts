import { ShapeCalculator } from "./calculations";
import { Shape } from "./shapes"

export type ShapeRecord = {
    shape: Shape, 
    value: number
}

export type ShapeReport = ShapeRecord[];

export function createShapeReport(shapes: Shape[], valueCalc: ShapeCalculator): ShapeReport {
    return shapes.map(shape => ({
        shape: shape, 
        value: valueCalc(shape)
    }));
}