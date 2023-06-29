export interface Circle {
    readonly kind: 'Circle';
    readonly radius: number;
}

export interface Rectangle {
    readonly kind: 'Rectangle';
    readonly width: number;
    readonly height: number;
}

export interface Triangle {
    readonly kind: 'Triangle';
    readonly base: number;
    readonly height: number;
}

export type Shape = Circle | Rectangle | Triangle;
export type ShapeKind = Shape['kind'];