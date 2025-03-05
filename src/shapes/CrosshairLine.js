import { DrawObject } from "./DrawObject";


export class CrosshairLine extends DrawObject {
    constructor(options) {
        super(options)
        this.type = 'Crosshairline'
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
        this.drawXScale(ctx)
    }
    drawXScale(ctx) {
        let sW, sH, baseStep, fillTextStep
        if (this.transformMatrix.a > 5) {
            sW = ctx.canvas.width
            sH = ctx.canvas.height
            baseStep = 1
            fillTextStep = 10
        } else if ( this.transformMatrix.a < .6 ){
            sW = ctx.canvas.width
            sH = ctx.canvas.height
            baseStep = 1
            fillTextStep = 100
        } else {
            sW = ctx.canvas.width
            sH = ctx.canvas.height
            baseStep = 1
            fillTextStep = 50
        }
        let x = this.points.x * this.transformMatrix.a + this.transformMatrix.e
        let y = this.points.y * this.transformMatrix.a + this.transformMatrix.f
        ctx.save()
        ctx.resetTransform()
        ctx.lineWidth = 1
        // console.log(x, y)
        let leaveY = ctx.height - y
        let leaveX = ctx.width - x
        // ctx.moveTo(x - 1, y)
        // ctx.lineTo(x - 1, y - 10)
        // ctx.stroke()
        // ctx.moveTo(x - 10, y)
        // ctx.lineTo(x - 10, y - 10)
        // ctx.stroke()
        let drawLongLine = (i) => {
            if (i % fillTextStep === 0) {
                ctx.moveTo(i, y)
                ctx.lineTo(i, (y - 15))
                let text = ctx.measureText(i)
                let w = text.width
                ctx.fillText(x - i, i, y - 10)
            } else if (i % baseStep === 0) {
                ctx.moveTo(i, y)
                ctx.lineTo(i, y - 5)
            }
        }
        for(let i = 0; i <= x; i+= baseStep) {
            ctx.beginPath()
            ctx.strokeStyle = '#0f0'
            // ctx.lineTo(i, y - 10)
            drawLongLine(i)
            ctx.closePath()
            ctx.stroke()
        }
        // for(let i = x; i <= ctx.canvas.width; i+=baseStep) {
        //     ctx.beginPath()
        //     ctx.strokeStyle = '#0f0'
        //     ctx.moveTo(i, y)
        //     // ctx.lineTo(i, y - 10)
        //     drawLongLine(i)
        //     ctx.closePath()
        //     ctx.stroke()
        // }

        // for(let i = y; i >= 0; i-= baseStep) {
        //     ctx.beginPath()
        //     ctx.strokeStyle = '#0f0'
        //     ctx.moveTo(x, y)
        //     ctx.lineTo(x + 10, y)
        //     ctx.closePath()
        //     ctx.stroke()
        // }
        // for(let i = x; i <= ctx.canvas.width; i+=baseStep) {
        //     ctx.beginPath()
        //     ctx.strokeStyle = '#0f0'
        //     ctx.moveTo(i, y)
        //     ctx.lineTo(i, y - 10)
        //     ctx.closePath()
        //     ctx.stroke()
        // }
        ctx.restore()
    }
}