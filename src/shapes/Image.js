import { DrawObject } from "./DrawObject";
import { Control } from "../control/Controls";
import { Point } from "../utils/Point";

export class Image extends DrawObject {
    constructor(options) {
        super(options);
        this.type = "Image";
        this.baseWH = options.baseWH || false;
        this.whMatrix = options.whMatrix || false;
        // this.img = options.img
        // this.imgOptions = options.imgOptions || [] // []
    }
    _render(ctx) {
        ctx.beginPath();
        if (!this.imgOptions.length) {
            console.error(
                "你需要提供imgOptions参数，参数个数分别为2个 4个 8个，但是程序收到了0个"
            );
            return;
        }

        // console.log(this.imgUrl)
        // this.imgUrl.onload = () => {
        if (this.imgOptions.length === 2) {
            let [sx, sy] = this.imgOptions;
            ctx.drawImage(this.img, sx, sy);
        } else if (this.imgOptions.length === 4) {
            let [sx, sy, sw, sh] = this.imgOptions;
            if (this.baseWH) {
                sx = sx - Math.ceil(sw / 2 / this.transformMatrix.a)
                sy = sy - Math.ceil(sh / 2 / this.transformMatrix.a)
                sw = Math.ceil(sw / this.transformMatrix.a)
                sh = Math.ceil(sh / this.transformMatrix.a)
            } else if (this.whMatrix) {
                sw = Math.ceil(sw / this.transformMatrix.a)
                sh = Math.ceil(sh / this.transformMatrix.a)
            }
            ctx.drawImage(this.img, sx, sy, sw, sh);
        } else if (this.imgOptions.length === 8) {
            let [sx, sy, sw, sh, dx, dy, dw, dh] = this.imgOptions;
            if (this.baseWH) {
                sx = sx - Math.ceil(sw / 2 / this.transformMatrix.a)
                sy = sy - Math.ceil(sh / 2 / this.transformMatrix.a)
                sw = Math.ceil(sw / this.transformMatrix.a)
                sh = Math.ceil(sh / this.transformMatrix.a)
            } else if (this.whMatrix) {
                sw = Math.ceil(sw / this.transformMatrix.a)
                sh = Math.ceil(sh / this.transformMatrix.a)
                dw = Math.ceil(dw / this.transformMatrix.a)
                dh = Math.ceil(dh / this.transformMatrix.a)
            }
            ctx.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        // }

        ctx.closePath();
    }
    setCoords() {
        let sx, sy, sw, sh;
        if (this.imgOptions.length > 2) {
            [sx, sy, sw, sh] = this.imgOptions;
        }
        let w = sw * this.scaleX,
            h = sh * this.scaleY,
            x = this.originX,
            y = this.originY;
        let objCenter = {
            x: this.originX,
            y: this.originY,
        };

        let commonConfig = this.getCommonConfig();
        this.coords = [
            new Control({
                x: -w / 2,
                y: -h / 2,
                left: x - w / 2,
                top: y - h / 2,
                target: this,
                base: "right-bottom",
                ...commonConfig,
            }),
            new Control({
                x: 0,
                y: -h / 2,
                left: x,
                top: y - h / 2,
                target: this,
                base: "center-bottom",
                ...commonConfig,
            }),
            new Control({
                x: w / 2,
                y: -h / 2,
                left: x + w / 2,
                top: y - h / 2,
                target: this,
                base: "left-bottom",
                ...commonConfig,
            }),
            new Control({
                x: w / 2,
                y: 0,
                left: x + w / 2,
                top: y,
                target: this,
                base: "left-center",
                ...commonConfig,
            }),
            new Control({
                x: w / 2,
                y: h / 2,
                left: x + w / 2,
                top: y + h / 2,
                target: this,
                base: "left-top",
                ...commonConfig,
            }),
            new Control({
                x: 0,
                y: h / 2,
                left: x,
                top: y + h / 2,
                target: this,
                base: "center-top",
                ...commonConfig,
            }),
            new Control({
                x: -w / 2,
                y: h / 2,
                left: x - w / 2,
                top: y + h / 2,
                target: this,
                base: "right-top",
                ...commonConfig,
            }),
            new Control({
                x: -w / 2,
                y: 0,
                left: x - w / 2,
                top: y,
                target: this,
                base: "right-center",
                ...commonConfig,
            }),
        ];
        let coords = this.coords.map((item) => item.getCoords());
        let minX = Math.min(...coords.map((item) => item.x));
        let minY = Math.min(...coords.map((item) => item.y));
        this.textX = minX;
        this.textY = minY;
        if (this.rotate) {
            this.coords.push(
                new Control({
                    left: x,
                    top: minY - 40,
                    target: this,
                    base: "center-center",
                    cursor: "crosshair",
                    ...commonConfig,
                })
            );
        }
        this.coords.forEach((item, index) => {
            let pot = new Point(item.left, item.top);
            let { x, y } = pot.rotate(this.angle, objCenter);
            item.left = x;
            item.top = y;
        });
        this.points = [
            this.coords[0].getCoords(),
            this.coords[2].getCoords(),
            this.coords[4].getCoords(),
            this.coords[6].getCoords(),
        ];
    }
}
