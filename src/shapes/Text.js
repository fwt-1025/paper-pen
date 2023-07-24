import { DrawObject } from "./DrawObject";

export class Text extends DrawObject {
    fillText = true
    relationShipId = ''
    fontSize = 20
    parent = null
    constructor(options) {
        super(options)
        this.type = 'Text'
        this.fillText = options.fillText
        this.fontSize = options.fontSize
    }
    
    _render(ctx) {
        // console.log(this.parent.coords[0].x)
        ctx.save()
        ctx.translate(this.parent.textX, this.parent.textY)
        // ctx.rotate(this.parent.angle)
        let fontSize = this.fontSize / this.transformMatrix.a
        ctx.font = `bold ${fontSize}px Alibaba_PuHuiTi_Regular`
        ctx.beginPath()

        ctx.fillStyle = this.fill
        this.fillText && ctx.fillText(this.text, 0, -5 / this.transformMatrix.a)

        ctx.closePath()
        ctx.restore()
    }
    isPointInPath() {}
}