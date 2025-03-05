import { Line } from "../dist/paper-pen.esm.js"
export default function drawPolygon (canvas) {
    let line = null
    let s = 'before-draw'
    document.addEventListener('keyup', e => {
        if (e.key === 'q' && line) {
            if (line.points.length < 2) {
                console.error('线段不能少于两个点')
                return
            }
            line.points.splice(line.points.length - 1, 1)
            canvas.set('skipFindTarget', false)
            canvas.requestRenderAll()
            line = null
            s = 'before-draw'
        }
    })
    canvas.on('mouse:down', e => {
        let {x,y} = canvas.getPointer(e)
        canvas.set('skipFindTarget', true)
        if (line && s === 'drawing') {
            line.points.splice(line.points.length - 1, 1, {x, y}, {x, y})
        }
        if (!line && s === 'before-draw') {
            line = new Line({
                points: [{x, y}, {x, y}],
                stroke: '#00f',
                opacity: 0.5
            })
            canvas.add(line)
            s = 'drawing'
        }
    })
    canvas.on('mouse:move', e => {
        if (line && s === 'drawing') {
            let { x, y } = canvas.getPointer(e)
            line.points.splice(line.points.length - 1, 1, {x, y})
            canvas.requestRenderAll()
        }
    })
}