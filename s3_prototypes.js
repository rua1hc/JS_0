// // Every object (except the root object) has a prototype (parent).
// // To get the prototype of an object:
// Object.getPrototypeOf(obj);

// // In Chrome, you can inspect "__proto__" property. But you should
// // not use that in the code.

// // To get the attributes of a property:
// Object.getOwnPropertyDescriptor(obj, "propertyName");

// // To set the attributes for a property:
// Object.defineProperty(obj, "propertyName", {
//     configurable: false, // cannot be deleted
//     writable: false,
//     enumerable: false,
// });

// // Constructors have a "prototype" property. It returns the object
// // that will be used as the prototype for objects created by the constructor.
// Object.prototype === Object.getPrototypeOf({});
// Array.prototype === Object.getPrototypeOf([]);

// // All objects created with the same constructor will have the same prototype.
// // A single instance of this prototype will be stored in the memory.
// const x = {};
// const y = {};
// Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true

// // Any changes to the prototype will be immediately visible to all objects
// // referencing this prototype.

// // When dealing with large number of objects, it's better to put their
// // methods on their prototype. This way, a single instance of the methods
// // will be in the memory.
// Circle.prototype.draw = function () {};

// // To get the own/instance properties:
// Object.keys(obj);

// // To get all the properties (own + prototype):
// for (let key in obj) {
// }

//Ex - Stop watch
function Stopwatch() {
    this.duration = 0;

    let startTime = 0,
        end = 0,
        running = false;

    Object.defineProperty(this, "startTimeP", {
        get: function () {
            return startTime;
        },
        set: function (value) {
            startTime = value;
        },
    });
    Object.defineProperty(this, "endP", {
        get: function () {
            return end;
        },
        set: function (value) {
            end = value;
        },
    });
    Object.defineProperty(this, "runningP", {
        get: function () {
            return running;
        },
        set: function (value) {
            running = value;
        },
    });

    // this.start = function () {
    //     if (running) {
    //         console.error("Timer already started!");
    //         return;
    //     }
    //     startTime = Date.now();
    //     // startTime = new Date();
    //     running = true;
    // };

    this.stop = function () {
        if (!running) {
            console.error("Timer is not started!");
            return;
        }
        end = Date.now();
        this.duration += (end - startTime) / 1000;

        // end = new Date().getTime();
        // this.duration += end.getTime() - startTime.getTime() / 1000;

        running = false;
    };

    this.reset = function () {
        this.duration = 0;

        running = false;
        startTime = null;
        end = null;
    };
}

Stopwatch.prototype.start = function () {
    if (this.startTimeP) {
        console.error("Timer already started!");
        return;
    }
    this.startTimeP = Date.now();
    // this.startTimeP = new Date();
    this.runningP = true;
};
