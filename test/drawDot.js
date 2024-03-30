import { Dot } from "../dist/paper-pen.esm.js";
export default function drawDot(canvas) {
    canvas.on('mouse:down', e => {
        let {x,y} = canvas.getPointer(e)
        let dot = new Dot({
            left: x,
            top: y,
            radius: 5,
            stroke: '#f00'
        })
        canvas.add(dot)
    })
}