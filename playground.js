class Base {
    baseValue = 1;
    baseAdd() {
        this.childValue++;
        console.log(this);
        console.log("baseAdd:", this.childValue);
    }
}

class Child extends Base {
    childValue = 10;
    childAdd() {
        this.baseValue++;
        console.log("childAdd:", this.baseValue);
    }
}

let b = new Base();
let c = new Child();

console.log("=====m=====");
b.baseAdd();
c.baseAdd();

console.log("=====m=====");

// b.childAdd(); // ERROR!
// c.childAdd();
