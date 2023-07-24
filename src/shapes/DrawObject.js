import { getRandomId } from '../utils/getRandomId'
export class DrawObject {
    type = "object";
    scaleX = 1;
    scaleY = 1;
    skewX = 0.0; // Degrees, 0.0 to 3.14
    skewY = 0.0; // Degrees, 0.0 to 3.14
    translateX = 0.0;
    translateY = 0.0;
    isActive = false;
    lineCap = 'round'
    lineJoin = 'round'
    fill = "";
    stroke = "";
    opacity = 1.0;
    lineWidth = 1.0;
    left = 0;
    top = 0;
    width = 0;
    height = 0;
    angle = 0;
    originX = 0;
    originY = 0;
    offsetX = 0;
    offsetY = 0;
    coords = [];
    rotate = false;
    points = []
    ratio = {
        x: 1,
        y: 1
    }
    cornerSize = 10
    cornerStyle = 'rect'
    cornerBorderColor = '#000'
    cornerColor = ''
    cornerOpacity = 1
    transformMatrix = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0}
    notNeedFindTarget = false
    lockMove = false

    constructor(options) {
        this.setOptions(options);
        this.id = getRandomId()
    }
    setOptions(options) {
        for (const key in options) {
            // For each key in options object...
            this[key] = options[key];
        }
        if (this.left && this.top) {
            this.originX = this.left + this.width / 2
            this.originY = this.top + this.height / 2
        }
    }
    render(ctx, canvas) {
        this.ratio = canvas.ratio
        this.transformMatrix = canvas.transformMatrix
        ctx.save();
        ctx.lineWidth = this.lineWidth / Math.abs(this.transformMatrix.a)
        ctx.lineCap = this.lineCap;
        ctx.lineJoin = this.lineJoin;
        ctx.globalAlpha = this.opacity
        this.transform(ctx);
        this._render(ctx);
        ctx.restore();
        this.setCoords && this.setCoords(ctx)
        this.isActive && this._drawControls(ctx);
        this.isActive && this._drawBorders();
    }
    transform(ctx) {
        ctx.translate(this.originX, this.originY);
        ctx.rotate(this.angle);
        // ctx.scale(this.scaleX, this.scaleY)
        // let mat = ctx.getTransform()
        // ctx.transform(
        //     Math.cos(this.angle),
        //     Math.sin(this.angle),
        //     -Math.sin(this.angle),
        //     Math.cos(this.angle),
        //     this.left * mat.a + mat.e,
        //     this.top * mat.a + mat.f
        // )
    }
    _render(ctx) {
        // 每个对象有自己的绘制逻辑
    }
    _drawControls(ctx) {
        // 绘制控制点
        ctx.save()
        this.coords.forEach((item) => {
            // console.log(item)
            item.drawControl(ctx, this.angle);
        });
        this.centerControlCoords?.length && this.centerControlCoords.forEach(item => {
            item.drawControl(ctx, this.angle);
        })
        ctx.restore()
    }
    _drawBorders() {
        // 绘制边框线
    }
    set(key, val) {
        // console.log(key, val);
        this._set(key, val);
    }
    _set(key, val) {
        this[key] = val;
    }
    strokeOrFill(ctx) {
        this.stroke && ctx.stroke()
        this.fill && ctx.fill()
    }
    getCommonConfig() {
        return {
            cornerSize: this.cornerSize,
            cornerStyle:this.cornerStyle,
            cornerColor: this.cornerColor,
            cornerBorderColor: this.cornerBorderColor,
            cornerOpacity: this.cornerOpacity
        }
    }
}
