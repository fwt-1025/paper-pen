import { DrawObject } from './DrawObject'
import { Control } from "../control/Controls";
import { calcScaleX, calcScaleY, calcScaleAll } from "../control/scale";
import { rotateObject } from '../control/rotate'
import { scaleCursor } from '../control/scale'
import { Pot } from '../utils/Pot';

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
        this.matrix = ctx.getTransform()
    }
    setCoords(ctx) {
        let w = this.width * this.scaleX,
            h = this.height * this.scaleY,
            x = this.originX,
            y = this.originY
        let objCenter = {
            x: this.originX,
            y: this.originY,
        };

        let commonConfig = this.getCommonConfig()
        if (this.type === "rect") {
            this.coords = [
                new Control({
                    x: - w / 2,
                    y: - h / 2,
                    left: x - w / 2,
                    top: y - h / 2,
                    target: this,
                    base: 'right-bottom',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    x: 0,
                    y: - h / 2,
                    left: x,
                    top: y - h / 2,
                    target: this,
                    base: 'center-bottom',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleY,
                    ...commonConfig
                }),
                new Control({
                    x: w / 2,
                    y: - h / 2,
                    left: x + w / 2,
                    top: y - h / 2,
                    target: this,
                    base: 'left-bottom',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    x: w / 2,
                    y: 0,
                    left: x + w / 2,
                    top: y,
                    target: this,
                    base: 'left-center',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleX,
                    ...commonConfig
                }),
                new Control({
                    x: w / 2,
                    y: h / 2,
                    left: x + w / 2,
                    top: y + h / 2,
                    target: this,
                    base: 'left-top',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    x: 0,
                    y: h / 2,
                    left: x,
                    top: y + h / 2,
                    target: this,
                    base: 'center-top',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleY,
                    ...commonConfig
                }),
                new Control({
                    x: - w / 2,
                    y: h / 2,
                    left: x - w / 2,
                    top: y + h / 2,
                    target: this,
                    base: 'right-top',
                    cursorHandler: scaleCursor,
                    mousemoveHandler: calcScaleAll,
                    ...commonConfig
                }),
                new Control({
                    x: - w / 2,
                    y: 0,
                    left: x - w / 2,
                    top: y,
                    target: this,
                    base: 'right-center',
                    cursorHandler: scaleCursor,
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
                        left: x,
                        top: (minY - 40),
                        target: this,
                        base: 'center-center',
                        cursor: 'crosshair',
                        mousemoveHandler: rotateObject,
                        ...commonConfig
                    })
                );
            }
        }
        this.coords.forEach((item, index) => {
            let pot = new Pot(item.left, item.top)
            let {x, y} = pot.rotate(this.angle, objCenter)
            item.left = x
            item.top = y
        });
        this.points = [this.coords[0].getCoords(), this.coords[2].getCoords(), this.coords[4].getCoords(), this.coords[6].getCoords()]
    }
}