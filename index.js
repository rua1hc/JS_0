//
console.log("\n\t===== halo mimi!!! =====\n ");
let Mimi = {
    name: "mimi 2",
    age: 1,
};
console.log(Mimi);

let selColors = ["red", "green"];
selColors[3] = "blue";
console.log(selColors);

//
console.log("\n\t===== Obj Array Function by ref =====\n ");
let number = 10;
function increase_0() {
    number++;
}
function increase_1(_num) {
    _num++;
}
increase_0();
increase_1(number);
console.log("number not increased:", number);

//Factory function
console.log("\n\t===== Factory function =====\n ");
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

//Contructor function, getter/setter
console.log("\n\t===== Contructor function =====\n ");
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
        console.log(`'let' vs 'this'`, _factor);
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
console.log("\n\t===== Factory function keys =====\n ");
const fac_keys = Object.keys(Fac_circle);
console.log(fac_keys);
//
console.log("\n\t===== Contructor function keys =====\n ");
for (let key in Fac_circle) {
    // if (typeof( Fac_circle[key]) != 'function')
    console.log(key, Fac_circle[key]);
}

//Clone obj
console.log("\n\t===== Clone obj =====\n ");
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

//Stop Watch
console.log("\n\t===== Stop Watch =====\n ");
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

//Array Filter-Map-Reduce
console.log("\n\t===== Array Filter-Map-Reduce =====\n ");
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
console.log("Array filtered n mapped:", items);

const total = numbers.reduce((sum, curValue) => sum + curValue);
console.log("Sum array.reduce():", total);

//Randomly generated array
console.log("\n\t===== Randomly generated array =====\n ");
// // randomly generated N = 10 length array 0 <= a[N] < 10
// Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
//
// randomly generated no-repeated numbers array
// http://stackoverflow.com/questions/962802#962890
function shuffle(_array) {
    var tmp,
        current,
        top = _array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = _array[current];
            _array[current] = _array[top];
            _array[top] = tmp;
        }
    return _array;
}
const sorted_list = [];
for (i = 0; i < 9; ++i) sorted_list[i] = i;
console.log("sorted_list", sorted_list);

//Binary search O(log n)
console.log("\n\t=*= Binary search =*= O(log n)\n ");
function binary_search(_list, _target) {
    let first = 0;
    let last = _list.length - 1;
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (_list[mid] == _target) {
            return mid;
        } else if (_list[mid] < _target) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return null;
}
function verify_binary_search(_number) {
    let index = binary_search(sorted_list, _number);
    if (index == null)
        console.log(`Target number ${_number} not found in list`);
    else console.log(`Target number ${_number} found at index ${index}`);
}
verify_binary_search(8);
verify_binary_search(9);

//Recursive Binary search
console.log("\n\t=*= Recursive Binary search =*=\n ");
function recursive_binary_search(_list, _target) {
    if (_list.length == 0) return false;
    else {
        let mid = Math.floor(_list.length / 2);
        if (_list[mid] == _target) return true;
        else {
            if (_list[mid] < _target)
                return recursive_binary_search(_list.slice(mid + 1), _target);
            else return recursive_binary_search(_list.slice(0, mid), _target);
        }
    }
}
function verify_recursive_binary_search(_number) {
    let found_b = recursive_binary_search(sorted_list, _number);
    if (!found_b) console.log(`Target number ${_number} not found in list`);
    else console.log(`Target number ${_number} found in list`);
}
verify_recursive_binary_search(8);
verify_recursive_binary_search(9);

//Verify sort algo.
function verify_sort(_list) {
    if (_list.length <= 1) return true;
    return _list[0] <= _list[1] && verify_sort(_list.slice(1));
}
const shuffle_list = shuffle([...sorted_list]);

//Merge sort O(n log n)
console.log("\n\t==*== Merge sort ==*== O(n log n)\n ");
function merge_sort(_list) {
    if (_list.length <= 1) return _list;

    let mid = Math.floor(_list.length / 2);
    let left_half = merge_sort(_list.slice(0, mid));
    let right_half = merge_sort(_list.slice(mid));

    return merge(left_half, right_half);
}
function merge(_left, _right) {
    let sorted_l = [];
    let i = 0;
    let j = 0;
    while (i < _left.length && j < _right.length) {
        if (_left[i] < _right[j]) {
            sorted_l.push(_left[i++]);
        } else {
            sorted_l.push(_right[j++]);
        }
    }

    sorted_l = sorted_l.concat(_left.slice(i));
    // while (i < _left.length) {
    //     sorted_l.push(_left[i++]);
    // }
    sorted_l = sorted_l.concat(_right.slice(j));
    // while (j < _right.length) {
    //     sorted_l.push(_right[j++]);
    // }

    console.log("[sorted_list]", sorted_l);
    return sorted_l;
}
console.log("shuffle_list", shuffle_list, verify_sort(shuffle_list));
const merge_sort_shuffle_list = merge_sort(shuffle_list);
console.log(
    "sorted_shuffle_list",
    merge_sort_shuffle_list,
    verify_sort(merge_sort_shuffle_list)
);

//Quick sort O(n log n)-O(n2)
console.log("\n\t==*== Quick sort ==*== O(n log n)-O(n2)\n ");
function quick_sort(_list) {
    if (_list.length <= 1) return _list;

    let pivot = [_list[0]];
    // let less = _list.filter((n) => n < pivot[0]);
    // let great = _list.filter((n) => n > pivot[0]);
    // console.log("[split]", less, pivot, great);

    let less_than_pivot = quick_sort(_list.filter((n) => n < pivot[0]));
    let greater_than_pivot = quick_sort(_list.filter((n) => n > pivot[0]));
    let sorted_l = less_than_pivot.concat(pivot, greater_than_pivot);
    console.log("[sorted_list]", sorted_l);
    return sorted_l;
}
console.log("shuffle_list", shuffle_list, verify_sort(shuffle_list));
const quick_sort_shuffle_list = quick_sort(shuffle_list);
console.log(
    "sorted_shuffle_list",
    quick_sort_shuffle_list,
    verify_sort(quick_sort_shuffle_list)
);
