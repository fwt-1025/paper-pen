import { getRandomId } from '../utils/getRandomId'
import Event from '../event/events';
export class DrawObject extends Event {
    type = "Object";
    scaleX = 1;
    scaleY = 1;
    skewX = 0.0; // Degrees, 0.0 to 3.14
    skewY = 0.0; // Degrees, 0.0 to 3.14
    translateX = 0.0;
    translateY = 0.0;
    isActive = false;
    displayGraph = true
    lineCap = 'round'
    lineJoin = 'round'
    isDash = [];// 虚线
    isDouble = [1]; // 双线
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
    cornerDisplay = true
    transformMatrix = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0}
    notNeedFindTarget = false
    needControl = true
    lockMove = false

    constructor(options) {
        super()
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
        if (!this.displayGraph) return
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
        this.needControl && this.setCoords && this.setCoords(ctx)
        this.isActive && this.needControl &&  this._drawControls(ctx);
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
            item.display && item.drawControl(ctx, this.angle);
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
            cornerOpacity: this.cornerOpacity,
            display: this.cornerDisplay
        }
    }
    getBoundingBox() {
        if (this.type === 'Text') {
            return
        }
        if (!(0 in this.points) || !this.points) {
            console.error('当前形状' + this.type + '没有points字段')
            return
        }
        let { minX, minY, maxX, maxY } = this.getMaxAndMinmun()
        return {
            minX,
            minY,
            maxX,
            maxY,
            id: this.id,
            w: maxX - minX,
            h: maxY - minY
        }
    }
    getMaxAndMinmun() {
        let xArr = []
        let yArr = []
        this.points.forEach(({x,y}) => {
            xArr.push(x)
            yArr.push(y)
        })
        let maxX = Math.max.apply(null, xArr)
        let maxY = Math.max.apply(null, yArr)
        let minX = Math.min.apply(null, xArr)
        let minY = Math.min.apply(null, yArr)
        return {
            maxX,
            minX,
            maxY,
            minY
        }
    }
    getShapeCenter() {
        let { minX, minY, maxX, maxY } = this.getMaxAndMinmun()
        return {
            x: (minX + maxX) / 2,
            y: (minY + maxY) / 2,
        }
    }
}
