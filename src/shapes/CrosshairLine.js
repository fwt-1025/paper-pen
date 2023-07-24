import { DrawObject } from "./DrawObject";


export class CrosshairLine extends DrawObject {
    constructor(options) {
        super(options)
        this.type = 'crosshairline'
    }

    _render(ctx) {
        let x = this.points.x * this.transformMatrix.a + this.transformMatrix.e
        let y = this.points.y * this.transformMatrix.a + this.transformMatrix.f
        ctx.save()
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.lineWidth = 1
        ctx.strokeStyle = this.stroke
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, ctx.canvas.height)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
        ctx.save()
        ctx.lineWidth = 1
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.strokeStyle = this.stroke
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(ctx.canvas.width, y)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }
}