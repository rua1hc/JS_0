//
console.log("\t=== halo mimi!!! ===");
let Mimi = {
    name: "mimi 2",
    age: 1,
};
console.log(Mimi);

let selColors = ["red", "green"];
selColors[3] = "blue";
console.log(selColors);

//
console.log("\t=== Obj Array Function by REF ===");
let number = 10;
function increase_0() {
    number++;
}
function increase_1(_num) {
    _num++;
}
increase_0();
// increase_1(number);
console.log(number);

//
console.log("\t=== Factory function ===");
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("Factory draw");
        },
        draw2() {
            console.log("Factory draw2");
        },
    };
}
let Fac_circle = createCircle(1);
Fac_circle.draw();
Fac_circle.draw2();

//
console.log("\t=== Contructor function ===");
function CCircle(radius) {
    this.radius = radius;

    // this.defLocation = {x:0, y:0};
    let defLocation = { x: 0, y: 0 };
    this.getdefLocation = function () {
        return defLocation;
    };

    // this.computeOptinumLocation = function(_factor){
    //     console.log('this',_factor);
    // }
    let computeOptinumLocation = function (_factor) {
        console.log("let", _factor);
    };

    this.draw = function () {
        // this.computeOptinumLocation(0.2);
        computeOptinumLocation(0.1);
        console.log("Contructor draw");
    };

    Object.defineProperty(this, "defLocation", {
        get: function () {
            return defLocation;
        },
        set: function (_value) {
            if (!_value.x || !_value.y) throw new Error("Invalid Location");
            defLocation = _value;
        },
    });
}
let Con_circle = new CCircle(2);
// Con_circle.computeOptinumLocation();
Con_circle.defLocation = { x: 1, y: 1 };
Con_circle.draw();

//
console.log("\t=== Factory function keys ===");
const fac_keys = Object.keys(Fac_circle);
console.log(fac_keys);

console.log("\t=== Contructor function keys ===");
for (let key in Fac_circle) {
    // if (typeof( Fac_circle[key]) != 'function')
    console.log(key, Fac_circle[key]);
}

//
console.log("\t=== Clone obj ===");
const norm_circle = {
    radius: 1,
    draw() {
        console.log("Normal draw");
    },
};
const clone_circle = Object.assign({}, norm_circle);
const clone_another_cir = { ...norm_circle };
console.log(clone_circle);
console.log(clone_another_cir);

//
console.log("\t=== Stop Watch ===");
function StopWatch() {
    let startTime,
        endTime,
        running,
        duration = 0;
    this.start = function () {
        if (running) throw new Error("SW already started!");
        running = true;
        startTime = new Date();
    };
    this.stop = function () {
        if (!running) throw new Error("SW is not started!");
        running = false;
        endTime = new Date();
        duration += (endTime.getTime() - startTime.getTime()) / 1000;
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        },
    });
}

//
console.log("\t=== Array Filter-Map-Reduce ===");
const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter(function (value) {
//     return value >= 0;
// });
// const filtered = numbers.filter((n) => n >= 0);
// const items = filtered.map((n) => {
//     const obj = { value: n };
//     return obj;
// });
// const items = filtered.map((n) => ({ value: n }));
const items = numbers
    .filter((n) => n >= 0)
    .map((n) => ({ value: n }))
    .filter((o) => o.value > 1);
console.log(items);

const total = numbers.reduce((sum, curValue) => sum + curValue);
console.log(total);

//
console.log("\t=== Array Filter-Map-Reduce ===");
