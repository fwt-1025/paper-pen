import { Polygon } from "../dist/paper-pen.esm.js"
export default function drawPolygon (canvas) {
    let poly = null
    let s = 'before-draw'
    document.addEventListener('keyup', e => {
        if (e.key === 'q' && poly) {
            if (poly.points.length < 3) {
                console.error('多边形不能少于三个点')
                return
            }
            poly.points.splice(poly.points.length - 1, 2)
            canvas.set('skipFindTarget', false)
            canvas.requestRenderAll()
            poly = null
            s = 'before-draw'
        }
    })
    canvas.on('mouse:down', e => {
        let {x,y} = canvas.getPointer(e)
        if (poly && s === 'drawing') {
            poly.points.splice(poly.points.length - 1, 1, {x, y}, {x, y})
        }
        if (!poly && s === 'before-draw') {
            poly = new Polygon({
                points: [{x, y}, {x, y}],
                fill: '#00f',
                stroke: '#00f',
                opacity: 0.5
            })
            canvas.set('skipFindTarget', true)
            canvas.add(poly)
            s = 'drawing'
        }
    })
    canvas.on('mouse:move', e => {
        if (poly && s === 'drawing') {
            let { x, y } = canvas.getPointer(e)
            poly.points.splice(poly.points.length - 1, 1, {x, y})
            canvas.requestRenderAll()
        }
    })
}