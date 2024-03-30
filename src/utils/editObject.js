export let cache = {
    startPos: null
}

export function getDefaultParams (target, pointer, defaultTransform, mousedownPos) {
    const { width, height, left, top, originX, originY, angle } = defaultTransform
    let  {x: mx, y: my} = mousedownPos
    let cachePos = JSON.parse(JSON.stringify(pointer))
    let msPos = {
        x:
            (mx - originX) * Math.cos(-angle) -
            (my - originY) * Math.sin(-angle) +
            originX,
        y:
            (mx - originX) * Math.sin(-angle) +
            (my - originY) * Math.cos(-angle) +
            originY,
    };
    pointer = {
        x:
            (pointer.x - originX) * Math.cos(-angle) -
            (pointer.y - originY) * Math.sin(-angle) +
            originX,
        y:
            (pointer.x - originX) * Math.sin(-angle) +
            (pointer.y - originY) * Math.cos(-angle) +
            originY,
    };
    return {
        width,
        height,
        left,
        top,
        originX,
        originY,
        angle,
        msPos,
        pointer,
        cachePos
    }
}

// export const editPolygon = (target, loomObj, pos, defaultTransform, mousedownPos) => {
//     target.left = pos.x
//     target.top = pos.y
//     loomObj.points[target.index] = target.getCoords()
// }

// export const editPolygonCenter = (target, loomObj, pos) => {
//     loomObj.points.splice(
//         target.index + 1,
//         0,
//         target.getCoords()
//     )
// }

export const moveObject = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    console.log(target)
    if (loomObj.lockMove) return
    if (!cache.startPos) {
        cache.startPos = mousedownPos
    }
    if (loomObj?.left && loomObj?.top) {
        loomObj.originX += (pos.x - cache.startPos.x)
        loomObj.originY += (pos.y - cache.startPos.y)
    } else {
        loomObj.points.forEach(item => {
            item.x += (pos.x - cache.startPos.x)
            item.y += (pos.y - cache.startPos.y)
        })
    }
    cache.startPos = pos
}