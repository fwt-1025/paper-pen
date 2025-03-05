import Event from '../event/events'
export class Control extends Event{
    cornerSize = 10
    cornerStyle = 'square'
    cornerBorderColor = '#000'
    cornerColor = ''
    cornerOpacity = 1
    left = 0
    top = 0
    center = null
    cursor = 'move'
    isEditing = false
    display = true
    id = null
    // target = null
    mousemoveHandler = () => null
    mousedownHandler = () => null
    mouseupHandler = () => null
    constructor(options) {
        super()
        this.setOptions(options)
        // this.cornerSize ||= this.target.cornerSize
        // this.cornerColor ||= this.target.cornerColor
        // this.cornerBorderColor ||= this.target.cornerBorderColor
        // this.cornerStyle ||= this.target.cornerStyle
        // this.cornerOpacity ||= this.target.cornerOpacity
    }
    setOptions(options) {
        for (let key in options) {
            this[key] = options[key]
        }
    }
    drawControl(ctx, angle) {
        let mat = ctx.getTransform()
        ctx.save()
        ctx.translate(this.left, this.top)
        ctx.lineWidth = 1 / mat.a
        ctx.globalAlpha = this.cornerOpacity
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.strokeStyle = this.cornerBorderColor
        ctx.fillStyle = this.cornerColor
        if (this.cornerStyle === 'circle') {
            ctx.arc(0, 0, this.cornerSize / 2 / mat.a, 0, 2 * Math.PI, false)
        } else {
            ctx.rect(- this.cornerSize / 2 / mat.a, - this.cornerSize / 2 / mat.a, this.cornerSize / mat.a, this.cornerSize / mat.a)
        }
        ctx.closePath()
        this.cornerBorderColor && ctx.stroke()
        this.cornerColor && ctx.fill()
        ctx.restore()
    }
    isPointInControl({x, y}, {a}) {
        let left = this.left,
            top = this.top
        if (x >= left - this.cornerSize / 2 / a && x <= left + this.cornerSize / 2 / a && y >= top - this.cornerSize / 2 / a && y <= top + this.cornerSize / 2 / a) {
            return true
        } else {
            return false
        }
    }
    setAngle(angle) {
        let {x, y} = this.center
        let newX =
            (this.left - x) * Math.cos(angle) -
            (this.top - y) * Math.sin(angle) +
            x
        let newY =
            (this.left - x) * Math.sin(angle) +
            (this.top - y) * Math.cos(angle) +
            y
        this.left = newX
        this.top = newY
    }
    getCoords() {
        // ctx.beginPath()
        // ctx.fillRect(this.left, this.top, 10, 10)
        // ctx.closePath()
        return {
            x: this.left,
            y: this.top,
            id: this.id
        }
    }
    set(key, val) {
        this[key] = val
    }
    updatePointPosition() {

    }
}