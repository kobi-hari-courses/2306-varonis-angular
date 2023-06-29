"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circumferenceCalc = exports.areaCalc = void 0;
var areaCalc = function (s) {
    switch (s.kind) {
        case 'Circle':
            return s.radius * s.radius * Math.PI;
        case 'Rectangle':
            return s.width * s.height;
        case 'Triangle':
            return s.base * s.height / 2;
    }
};
exports.areaCalc = areaCalc;
var circumferenceCalc = function (s) {
    switch (s.kind) {
        case 'Circle':
            return 2 * s.radius * Math.PI;
        case 'Rectangle':
            return (2 * s.width) + (2 * s.height);
        case 'Triangle':
            return s.base + s.height + pythagoram(s.base, s.height);
    }
};
exports.circumferenceCalc = circumferenceCalc;
function pythagoram(base, height) {
    return Math.sqrt(base * base + height * height);
}
//# sourceMappingURL=calculations.js.map