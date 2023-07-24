import { DrawObject } from "./DrawObject";
import { Control } from "./Controls";
import { calcPolygon, calcPolygonCenter } from '../utils/editObject';

export class Polygon extends DrawObject{
    centerControlPoints = []
    needCenterControl = true
    centerPointsStyle = 'square'
    centerPointsSize = 10
    centerPointsStroke = '#f00'
    centerPointsFill = '#fff'
    constructor(options) {
        super(options)
        this.type = 'polygon'
        this.setOptions(options)
    }
    _render(ctx) {
        let {a,b,c,d,e,f} = this.transformMatrix
        ctx.save()
        ctx.beginPath()
        ctx.strokeStyle = this.stroke || '#000'
        ctx.fillStyle = this.fill || '#000'
        this.points.forEach((item, index) => {
            ctx[index ? 'lineTo' : 'moveTo'](item.x, item.y)
        })
        ctx.closePath()
        this.strokeOrFill(ctx)
        ctx.restore()
        this.drawArrow(ctx, this.points[0].x, this.points[0].y, (this.points[0].x + this.points[1].x) / 2, (this.points[0].y + this.points[1].y) / 2)
        this.needCenterControl && this.renderCenterControl(ctx)
    }
    drawArrow(ctx, ax, ay, bx, by) {
        ctx.save()
        ctx.beginPath()
        const drawArrow = (x1, y1, x2, y2, l = 50, θ) => {
            // console.log('角度', θ);
            const a = Math.atan2((y2 - y1), (x2 - x1));
            const x3 = x2 - l * Math.cos(a + θ * Math.PI / 180);
            const y3 = y2 - l * Math.sin(a + θ * Math.PI / 180);
            const x4 = x2 - l * Math.cos(a - θ * Math.PI / 180);
            const y4 = y2 - l * Math.sin(a - θ * Math.PI / 180);
            return [x3, y3, x4, y4]
        }
        const [x3, y3, x4, y4] = drawArrow(ax, ay, bx, by, 15, 30)
        // 
        // ctx.moveTo(ax, ay)
        // ctx.lineTo(bx, by)
        const { a,b,c,d,e,f } = this.transformMatrix
        ctx.moveTo(x3, y3)
        ctx.lineTo(bx, by)
        ctx.lineTo(x4, y4)
        ctx.lineWidth = 5 / this.transformMatrix.a
        ctx.strokeStyle = this.stroke
        ctx.fillStyle = '#000'
        ctx.globalAlpha = 1
        ctx.stroke()
        // ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
    setCoords() {
        this.coords = this.points.map((item, index) => {
            return new Control({
                left: item.x,
                top: item.y,
                target: this,
                cursor: "pointer",
                index,
                mousemoveHandler: calcPolygon,
                ...this.getCommonConfig()
            })
        })
    }
    renderCenterControl(ctx) {
        this.centerControlPoints = this.points.map((p1, i) => [p1, this.points[(i + 1) % this.points.length]]).map(([p1, p2]) => ({
            x: (p1.x + p2.x) / 2,
            y: (p1.y + p2.y) / 2
        }))
        this.centerControlCoords = this.centerControlPoints.map((item, index) => {
            return new Control({
                left: item.x,
                top: item.y,
                target: this,
                cursor: "copy",
                index,
                cornerStyle: this.centerPointsStyle,
                cornerSize: this.centerPointsSize,
                cornerBorderColor: this.centerPointsStroke,
                cornerColor: this.centerPointsFill,
                mousedownHandler: calcPolygonCenter
            })
        })
    }
}