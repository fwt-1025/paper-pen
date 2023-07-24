import { DrawObject } from './DrawObject'
import { Control } from "../shapes/Controls";
import { calcScaleX, calcScaleY, calcScaleAll, rotateObject } from "../utils/editObject";
import { rotatePoint } from '../utils/computedPoint';

export class Rect extends DrawObject{
    textX
    textY
    constructor(options) {
        super(options)
        this.type = 'rect'
    }
    _render(ctx) {
        ctx.save()
        let x = - this.width * this.scaleX / 2,
            y = - this.height * this.scaleY / 2,
            w = this.width * this.scaleX,
            h = this.height * this.scaleY
        ctx.beginPath()
        ctx.lineWidth = this.lineWidth / Math.abs(this.transformMatrix.a)
        ctx.strokeStyle = this.stroke
        ctx.fillStyle = this.fill
        ctx.rect(x, y, w, h)
        ctx.closePath()
        this.strokeOrFill(ctx)
        ctx.restore()
    }
    setCoords(ctx) {
        let w = this.width * this.scaleX,
            h = this.height * this.scaleY,
            x = this.originX,
            y = this.originY,
        mat = ctx.getTransform()
        let objCenter = {
            x: this.originX,
            y: this.originY,
        };
        let commonConfig = this.getCommonConfig()
        if (this.type === "rect") {
            this.coords = [
                new Control({
                    left: x - w / 2,
                    top: y - h / 2,
                    target: this,
                    base: 'right-bottom',
                    cursor: this.rotate ? 'pointer' : 'se-resize',
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    left: x,
                    top: y - h / 2,
                    target: this,
                    base: 'center-bottom',
                    cursor: this.rotate ? 'pointer' : 'n-resize',
                    mousemoveHandler: calcScaleY,
                    ...commonConfig
                }),
                new Control({
                    left: x + w / 2,
                    top: y - h / 2,
                    target: this,
                    base: 'left-bottom',
                    cursor: this.rotate ? 'pointer' : 'ne-resize',
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    left: x + w / 2,
                    top: y,
                    target: this,
                    base: 'left-center',
                    cursor: this.rotate ? 'pointer' : 'w-resize',
                    mousemoveHandler: calcScaleX,
                    ...commonConfig
                }),
                new Control({
                    left: x + w / 2,
                    top: y + h / 2,
                    target: this,
                    base: 'left-top',
                    cursor: this.rotate ? 'pointer' : 'se-resize',
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    left: x,
                    top: y + h / 2,
                    target: this,
                    base: 'center-top',
                    cursor: this.rotate ? 'pointer' : 'n-resize',
                    mousemoveHandler: calcScaleY,
                    ...commonConfig
                }),
                new Control({
                    left: x - w / 2,
                    top: y + h / 2,
                    target: this,
                    base: 'right-top',
                    cursor: this.rotate ? 'pointer' : 'ne-resize',
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    left: x - w / 2,
                    top: y,
                    target: this,
                    base: 'right-center',
                    cursor: this.rotate ? 'pointer' : 'w-resize',
                    mousemoveHandler: calcScaleX,
                    ...commonConfig
                }),
            ];
            let coords = this.coords.map(item => item.getCoords())
            let minX = Math.min(...coords.map(item => item.x))
            let minY = Math.min(...coords.map(item => item.y))
            this.textX = minX
            this.textY = minY
            if (this.rotate) {
                this.coords.push(
                    new Control({
                        left: minX + Math.abs(w) / 2,
                        top: (minY - 40 / mat.a),
                        target: this,
                        base: 'center-center',
                        cursor: 'crosshair',
                        mousemoveHandler: rotateObject,
                        ...commonConfig
                    })
                );
            }
        }
        this.coords.forEach((item) => {
            let {x, y} = rotatePoint({x: item.left, y: item.top}, objCenter, this.angle);
            item.left = x
            item.top = y
        });
        this.points = [this.coords[0].getCoords(), this.coords[2].getCoords(), this.coords[4].getCoords(), this.coords[6].getCoords()]
    }
}