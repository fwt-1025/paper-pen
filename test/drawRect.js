import { Rect } from '../dist/paper-pen.esm.js'
let s = 'before-draw'
export default function drwaRect(canvas) {
    let rect = null
    canvas.on('mouse:down', e => {
        let { x, y } = canvas.getPointer(e)
        canvas.resetActive()
        if (s === 'before-draw') {
            canvas.set('skipFindTarget', true)
            rect = new Rect({
                left: x,
                top: y,
                width: 0,
                height: 0,
                fill: '#f00',
                opacity: 0.5
            })
            canvas.add(rect)
        }
        if (rect && s === 'drawing') {
            canvas.set('skipFindTarget', false)
            s = 'before-draw'
            rect = null
        }
    })
    canvas.on('mouse:move', e => {
        console.log(s)
        if (rect) {
            s = 'drawing'

            let {x, y} = canvas.getPointer(e)
            rect.setOptions({
                width: x - rect.left,
                height: y - rect.top
            })
            canvas.requestRenderAll()
        }
    })
}