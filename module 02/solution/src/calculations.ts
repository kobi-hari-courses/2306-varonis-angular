import { Shape } from "./shapes";

export type ShapeCalculator = (s : Shape) => number;

export const areaCalc: ShapeCalculator = s => {
    switch (s.kind) {
        case 'Circle':
            return s.radius * s.radius * Math.PI;
        case 'Rectangle': 
            return s.width * s.height;
        case 'Triangle':
            return s.base * s.height / 2;
    }
}

export const circumferenceCalc: ShapeCalculator = s => {
    switch (s.kind) {
        case 'Circle':
            return 2 * s.radius * Math.PI;
        case 'Rectangle': 
            return (2 * s.width) + (2 * s.height);
        case 'Triangle':
            return s.base + s.height + pythagoram(s.base, s.height);
    }
}

function pythagoram(base: number, height: number): number {
    return Math.sqrt(base * base + height * height);
}