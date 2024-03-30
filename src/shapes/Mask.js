import { Control } from '../control/Controls'
import { DrawObject } from './DrawObject'
// import { editPolygon, editPolygonCenter } from '../utils/editObject';

class Mask extends DrawObject {
    constructor(options) {
        super(options)
        this.imgBitMap = options.imgBitMap
        this.globalCompositeOperation = options.globalCompositeOperation
    }
    _render(ctx) {
        // console.log(this)
        ctx.globalCompositeOperation = this.globalCompositeOperation || 'source-over'
        ctx.save()
        ctx.strokeStyle = this.stroke || '#000'
        ctx.fillStyle = this.fill || '#000'
        ctx.drawImage(this.imgBitMap, this.x, this.y, this.width, this.height)
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
                // mousemoveHandler: editPolygon,
                ...this.getCommonConfig()
            })
        })
    }
}

export {
    Mask
}