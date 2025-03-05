// import { DrawObject } from "./DrawObject";
import { Polygon } from "./Polygon";

export class Line extends Polygon{
    constructor(options) {
        super(options)
        this.type = 'Line'
        this.setOptions(options)
    }
    // _render(ctx) {
    //     ctx.save()
    //     ctx.beginPath()
    //     ctx.strokeStyle = this.stroke || '#000'
    //     ctx.fillStyle = this.fill || '#000'
    //     this.points.forEach((item, index) => {
    //         ctx[index ? 'lineTo' : 'moveTo'](item.x, item.y)
    //     })
    //     ctx.stroke()
    //     ctx.closePath()
    //     ctx.restore()
    //     this.needCenterControl && this.renderCenterControl(ctx)
    // }
    // setCoords() {
    //     this.coords = this.points.map((item, index) => {
    //         return new Control({
    //             left: item.x,
    //             top: item.y,
    //             target: this,
    //             cursor: "pointer",
    //             index,
    //             mousemoveHandler: editPolygon,
    //             ...this.getCommonConfig()
    //         })
    //     })
    // }
    // renderCenterControl() {
    //     this.centerControlPoints = this.points.map((p1, i) => [p1, this.points[(i + 1) % this.points.length]]).map(([p1, p2]) => ({
    //         x: (p1.x + p2.x) / 2,
    //         y: (p1.y + p2.y) / 2
    //     }))
    //     this.centerControlPoints = this.centerControlPoints.slice(0, this.centerControlPoints.length - 1)
    //     this.centerControlCoords = this.centerControlPoints.map((item, index) => {
    //         return new Control({
    //             left: item.x,
    //             top: item.y,
    //             target: this,
    //             cursor: "copy",
    //             index,
    //             mousedownHandler: editPolygonCenter
    //         })
    //     })
    // }
    isPointInPath(pos) {
        let newPoints = this.points.map((p1, i) => [p1, this.points[(i + 1) % this.points.length]])
        for (let i = 0, len = newPoints.length; i < len; i++) {
            let p1 = newPoints[i][0]
            let p2 = newPoints[i][1]
            let l1 = Math.sqrt((Math.pow(pos.x - p1.x, 2) + Math.pow(pos.y - p1.y, 2)));
            let l2 = Math.sqrt((Math.pow(pos.x - p2.x, 2) + Math.pow(pos.y - p2.y, 2)))
            let l3 = Math.sqrt((Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)))
            if (l2 + l1 - l3 < 0.5 / this.transformMatrix.a) {
                return true
            } else {
            }
        }
    }
}