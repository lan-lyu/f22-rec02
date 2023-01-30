import { newLine } from "./line";
import { newCartesianPoint } from "./points/cartesianpoint";
import { newPolarPoint } from "./points/polarPoint";

const point1: Point = newPolarPoint(2, 0);
const point2: Point = newPolarPoint(4, Math.PI);
const point3: Point = newCartesianPoint(2, 0);


const line = newLine(point3, point2);

line.draw();
