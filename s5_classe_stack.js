const _count = new WeakMap();
const _stack = new WeakMap();

class Stack {
    constructor() {
        _count.set(this, 0);
        _stack.set(this, []);
    }
    get count() {
        // _count.get(this) === _stack.get(this).length
        // return _count.get(this);
        return _stack.get(this).length;
    }

    peek() {
        if (_count.get(this) <= 0) throw new Error("empty stack!");
        return _stack.get(this)[_count.get(this) - 1];
    }

    pop() {
        if (_count.get(this) <= 0) throw new Error("empty stack!");
        _count.set(this, _count.get(this) - 1);

        return _stack.get(this).pop();
    }

    push(value) {
        _count.set(this, _count.get(this) + 1);
        _stack.get(this).push(value);
    }
}

const stack1 = new Stack();
stack1.push("a");
stack1.push("b");
stack1.push("c");
