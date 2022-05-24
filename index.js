// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    };
    get diameter() {
        return this.radius*2;
    };
    get circumference() {
        return this.radius*2*Math.PI;
    };
    get area() {
        return Math.pow(this.radius, 2)*Math.PI;
    };
    set diameter(diamater) {
        return this.radius = (diamater/2);
    };
    set circumference(circumference) {
        return this.radius = circumference/(Math.PI * 2);
    };
    set area(area) {
        return this.radius = Math.sqrt(area/Math.PI);
    }; 
}