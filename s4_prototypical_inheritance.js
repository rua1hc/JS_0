function Shape(color) {
    this.color = color;
}

Shape.prototype.draw = function () {
    console.log("shape draw");
};

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    Shape.prototype.draw.call(this);
    console.log("circle draw");
};

// const s = new Shape("red");
// const c = new Circle(1, "yellow");
// console.log(c);
// c.draw();

//s4 - Ex1 - Prototypical Inheritence
function HtmlEle() {
    this.click = function () {
        console.log("clicked");
    };
}

HtmlEle.prototype.focus = function () {
    console.log("focused");
};

function HtmlSelEle(items = []) {
    this.items = items;
    this.addItem = function (item) {
        this.items.push(item);
    };
    this.removeItem = function (item) {
        let i = this.items.indexOf(item);
        this.items.splice(i, 1);
    };

    this.render = function () {
        let items = this.items.map((v) => `<option>${v}</option>`).join(" ");

        return `
<select>${this.items
            .map(
                (i) => `
    <option>${i}</option>`
            )
            .join(" ")}
</select>`;
    };
}
// HtmlSelEle.prototype = Object.create(HtmlEle.prototype);
HtmlSelEle.prototype = new HtmlEle();
HtmlSelEle.prototype.constructor = HtmlSelEle;

function HtmlImgEle(src) {
    this.src = src;

    this.render = function () {
        return `<img src="${this.src}" />`;
    };
}
// HtmlImgEle.prototype = new HtmlEle();
HtmlImgEle.prototype = Object.create(HtmlEle.prototype);
HtmlImgEle.prototype.constructor = HtmlImgEle;

// const e = new HtmlEle();
// console.log("e", e);
const s = new HtmlSelEle([1, 2, 3]);
console.log("s", s);
// console.log(s.render());

const im = new HtmlImgEle(`https://test.com`);
console.log("im", im);
// console.log(im.render());

let eles = [new HtmlSelEle([3, 4, 5]), new HtmlImgEle("https://...")];
for (const e of eles) {
    console.log(e.render());
}
