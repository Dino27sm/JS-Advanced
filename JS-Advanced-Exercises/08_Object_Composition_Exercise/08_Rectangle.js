function rectangle(w, h, c){
    return {
        width: Number(w), 
        height: Number(h), 
        color: c.charAt(0).toUpperCase() + c.slice(1), 
        calcArea: function f() {return (this.width * this.height)}
    }
}

console.log(rectangle(4, 5, 'red'));
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
