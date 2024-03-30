import {DrawObject} from "./DrawObject"
import { Control } from "../control/Controls"
import { calcScaleX, calcScaleY, calcScaleAll } from "../control/scale";
import { rotateObject } from '../control/rotate'

/**
 * 
 * Rect
 * 
 */
export class Arrow extends DrawObject {
    // start = []
    // end = []
    // points = []
    // declare arrow: [number, number]
    constructor(options) {
        super(options)
        let {points} = options
        this.width = Math.abs(points[0].x - points[1].x)
        this.height = Math.abs(points[0].y - points[1].y)
        this.type = 'Arrow'
    }
    _render(ctx) {
        const mat = ctx.getTransform()
        ctx.save()
        ctx.beginPath()
        let {x: ax, y:ay} = this.points[0] //第一个点
        let {x: bx, y:by} = this.points[1]  //二
        const drawArrow = (x1, y1, x2, y2, l = 50, θ) => {
            const a = Math.atan2((y2 - y1), (x2 - x1));
            const x3 = x2 - l * Math.cos(a + θ * Math.PI / 180);
            const y3 = y2 - l * Math.sin(a + θ * Math.PI / 180);
            const x4 = x2 - l * Math.cos(a - θ * Math.PI / 180);
            const y4 = y2 - l * Math.sin(a - θ * Math.PI / 180);
            return [x3, y3, x4, y4]
        }
        const [x3, y3, x4, y4] = drawArrow(ax, ay, bx, by, 20, 30)
        // 
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.moveTo(x3, y3)
        ctx.lineTo(bx, by)
        ctx.lineTo(x4, y4)
        ctx.lineWidth = this.lineWidth / mat.a
        ctx.strokeStyle = this.stroke
        ctx.globalAlpha = this.opacity
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }
    setCoords(ctx) {
        let w = this.width * this.scaleX,
            h = this.height * this.scaleY,
            x,
            y
        if (this.points[0].x < this.points[1].x) {
            x = this.points[0].x + this.width / 2
        } else {
            x = this.points[1].x + this.width / 2
        }
        if (this.points[0].y < this.points[1].y) {
            y = this.points[0].y + this.height / 2
        } else {
            y = this.points[1].y + this.height / 2
        }
        let objCenter = {
            x,
            y,
        };
            this.coords = [
                new Control({
                    x: x - w / 2,
                    y: y - h / 2,
                    center: objCenter,
                    target: this,
                    base: 'right-bottom',
                    // cursor: this.rotate ? 'pointer' : 'se-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleAll
                }),
                new Control({
                    x,
                    y: y - h / 2,
                    center: objCenter,
                    target: this,
                    base: 'center-bottom',
                    // cursor: this.rotate ? 'pointer' : 'n-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleY
                }),
                new Control({
                    x: x + w / 2,
                    y: y - h / 2,
                    center: objCenter,
                    target: this,
                    base: 'left-bottom',
                    // cursor: this.rotate ? 'pointer' : 'ne-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleAll
                }),
                new Control({
                    x: x + w / 2,
                    y,
                    center: objCenter,
                    target: this,
                    base: 'left-center',
                    // cursor: this.rotate ? 'pointer' : 'w-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleX
                }),
                new Control({
                    x: x + w / 2,
                    y: y + h / 2,
                    center: objCenter,
                    target: this,
                    base: 'left-top',
                    // cursor: this.rotate ? 'pointer' : 'se-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleAll
                }),
                new Control({
                    x,
                    y: y + h / 2,
                    center: objCenter,
                    target: this,
                    base: 'center-top',
                    // cursor: this.rotate ? 'pointer' : 'n-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleY
                }),
                new Control({
                    x: x - w / 2,
                    y: y + h / 2,
                    center: objCenter,
                    target: this,
                    base: 'right-top',
                    // cursor: this.rotate ? 'pointer' : 'ne-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleAll
                }),
                new Control({
                    x: x - w / 2,
                    y,
                    center: objCenter,
                    target: this,
                    base: 'right-center',
                    // cursor: this.rotate ? 'pointer' : 'w-resize',
                    cursor: 'not-allowed'
                    // mousemoveHandler: calcScaleX
                }),
            ];
            // if (this.rotate) {
            //     this.coords.push(
            //         new Control({
            //             x,
            //             y: (y - h / 2 - 40 / mat.a),
            //             center: objCenter,
            //             target: this,
            //             base: 'center-center',
            //             cursor: 'crosshair',
            //             mousemoveHandler: rotateObject
            //         })
            //     );
            // }
        if (this.isActive) {
            ctx.beginPath()
            this.coords.forEach((item, index) => {
                ctx[index ? 'lineTo': 'moveTo'](item.x, item.y)
            })
            ctx.closePath()
            ctx.stroke()
        }
    }
    // isPointInPath(e) {

    // }
}