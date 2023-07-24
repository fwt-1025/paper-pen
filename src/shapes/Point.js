import { DrawObject } from "./DrawObject";
import { Control } from "./Controls";
import { moveObject } from '../utils/editObject'

export class Point extends DrawObject{
    constructor(options) {
        super(options)
        this.type = 'point'
    }
    _render(ctx){
        ctx.save()
            ctx.beginPath()
            ctx.arc(0, 0, this.radius / this.transformMatrix.a, 0, 2 * Math.PI)
            ctx.strokeStyle = this.stroke
            ctx.fillStyle = this.fill
            ctx.closePath()
            this.strokeOrFill(ctx)
        ctx.restore()
    }
    setCoords(ctx) {
        this.coords = [new Control({
            left: this.left,
            top: this.top,
            target: this,
            cursor: 'pointer',
            mousemoveHandler: moveObject
        })]
    }
    isPointInPath(pos) {
        let radius = this.radius / this.transformMatrix.a
        if (pos.x < this.left + radius && pos.y < this.top + radius && pos.x > this.left - radius && pos.y > this.top - radius) {
            return true
        }
    }
}