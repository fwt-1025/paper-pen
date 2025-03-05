import { DrawObject } from "./DrawObject";
import { Control } from "../control/Controls";
import { moveObject } from '../utils/editObject'

export class Dot extends DrawObject{
    constructor(options) {
        super(options)
        this.type = 'Dot'
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
    setCoords() {
        this.coords = [new Control({
            left: this.originX,
            top: this.originY,
            target: this,
            cursor: 'pointer',
            mousemoveHandler: moveObject
        })]
    }
    isPointInPath(pos) {
        let radius = this.radius / this.transformMatrix.a
        if (pos.x < this.originX + radius && pos.y < this.originY + radius && pos.x > this.originX - radius && pos.y > this.originY - radius) {
            return true
        }
    }
}