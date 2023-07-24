import { DrawObject } from "./DrawObject";

export class Ruler extends DrawObject {
    xScales = [] // x轴的刻度
    yScales = [] // y轴的刻度
    coords = []
    fontSize = 12
    constructor(options) {
        super(options)
        this.type = 'Ruler'
        this.fontSize = options.fontSize
    }

    _render(ctx) {
        ctx.strokeStyle = this.stroke
        ctx.fillStyle = this.stroke
        let fontSize
        let rulerWLength, rulerHLength
        let baseStep
        let fillTextStep
        if (this.transformMatrix.a > 5) {
            rulerWLength = ctx.canvas.width
            rulerHLength = ctx.canvas.height
            baseStep = 1
            fillTextStep = 10
        } else if ( this.transformMatrix.a < .6 ){
            rulerWLength = ctx.canvas.width / 50
            rulerHLength = ctx.canvas.height / 50
            baseStep = 50
            fillTextStep = 100
        } else {
            rulerWLength = ctx.canvas.width / 5
            rulerHLength = ctx.canvas.height / 5
            baseStep = 5
            fillTextStep = 50
        }
        ctx.save()
        ctx.setTransform(this.transformMatrix.a, 0, 0, this.transformMatrix.a, this.transformMatrix.e, 0)
        // ctx.translate(this.transformMatrix.e, 0)
        fontSize = this.fontSize / this.transformMatrix.a
        ctx.font = `bold ${fontSize}px Alibaba_PuHuiTi_Regular`
        for (let i = 0; i <= rulerWLength; i++) {
            ctx.beginPath()
            ctx.moveTo(i * baseStep, 0)
            
            if (i * baseStep % fillTextStep === 0) {
                ctx.lineTo(i * baseStep, 15  / this.transformMatrix.a)
                let text = ctx.measureText(i * baseStep)
                let w = text.width
                ctx.fillText(i * baseStep, (i * baseStep - w / 2), 30  / this.transformMatrix.a)
            } else {
                ctx.lineTo(i * baseStep, 5  / this.transformMatrix.a)
            }
            ctx.stroke()
            ctx.closePath()
        }
        ctx.restore()
        ctx.save()
        ctx.setTransform(this.transformMatrix.a, 0, 0, this.transformMatrix.a, 0, this.transformMatrix.f)
        fontSize = this.fontSize / this.transformMatrix.a
        ctx.font = `bold ${fontSize}px Alibaba_PuHuiTi_Regular`
        for (let i = 0; i <= rulerHLength; i++) {
            ctx.beginPath()
            ctx.moveTo(0, i * baseStep)
            
            if (i * baseStep % fillTextStep === 0) {
                ctx.lineTo(15 / this.transformMatrix.a, i * baseStep)
                let text = ctx.measureText(i * baseStep)
                let w = text.width
                // console.log(w)
                ctx.fillText(i * baseStep, 20 / this.transformMatrix.a, i * baseStep + 5 / this.transformMatrix.a)
            } else {
                ctx.lineTo(5 / this.transformMatrix.a, i * baseStep)
            }
            ctx.stroke()
            ctx.closePath()
        }
        ctx.restore()
    }
}