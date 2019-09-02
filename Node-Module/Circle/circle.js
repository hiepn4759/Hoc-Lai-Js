function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
//d > r1 + r2 => return 1 
//d == r1 + r2 => return 0
//d < r1 + r2 => return -1

Circle.prototype.isOverlapped = function(obj) {
    var d = Math.sqrt(Math.pow(this.x + obj.x, 2) + Math.pow(this.y + obj.y, 2));
    if(d == (this.r + obj.r)){
        return 0;
    }
    if(d < (this.r + obj.r)){
        return -1;
    }
    if(d > (this.r + obj.r)){
        return 1;
    }
};

module.exports = Circle;