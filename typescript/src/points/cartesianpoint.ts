function cartesianPoint (x: number, y: number): Point {
    return {
        getX: function(): number {
            return x;
        },

        getY: function(): number {
            return y;
        }
    }
}

export {cartesianPoint}