/**
 * class Point
 * 点坐标的计算
 * author fwt-1025
 */
class Point{
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(num) {
        this.x += num
        this.y += num
        return this
    }
    addApplyPos({x, y}) {
        this.x += x
        this.y += y
        return this
    }
    del(num) {
        this.x -= num
        this.y -= num
        return this
    }
    delApplyPos({x, y}) {
        this.x -= x
        this.y -= y
        return this
    }
    rotate(angle, origin) {
        /*
        * angle 弧度
        * origin 原点 基点
        * cos sin  0
        * -sin cos 0
        * 0    0   1
        */
       return {
           x:
               (this.x - origin.x) * Math.cos(angle) -
               (this.y - origin.y) * Math.sin(angle) +
               origin.x,
   
           y:
               (this.x - origin.x) * Math.sin(angle) +
               (this.y - origin.y) * Math.cos(angle) +
               origin.y,
       }
        // this.x = (this.x - origin.x) * Math.cos(angle) - (this.y - origin.y) * Math.sin(angle) + origin.x
        // this.y = (this.x - origin.x) * Math.sin(angle) + (this.y - origin.y) * Math.cos(angle) + origin.y
        // return this
    }
}

export {
    Point
}