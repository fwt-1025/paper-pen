export const calcScaleX = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    let {
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
    } = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos)
    let scale = 1
    scale = target.base === 'left-center' ? (width + pointer.x - msPos.x) / loomObj.width : (width - (pointer.x - msPos.x)) / loomObj.width;
    loomObj.set('scaleX', scale)
    let l = originX + (pointer.x - msPos.x) / 2
    let newC = {
        x: (l - originX) * Math.cos(angle) - (originY - originY) * Math.sin(angle) + originX,
        y: (l - originX) * Math.sin(angle) + (originY - originY) * Math.cos(angle) + originY
    }
    loomObj.set('originX', newC.x)
    loomObj.set('originY', newC.y)
}
export const calcScaleY = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    let {
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
    } = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos)
    let scale = 1
    scale = target.base === 'center-top' ? (height + pointer.y - msPos.y) / loomObj.height : (height + msPos.y - pointer.y) / loomObj.height;
    loomObj.set("scaleY", scale);
    let t = originY + (pointer.y - msPos.y) / 2;
    let newC = {
        x:
            (originX - originX) * Math.cos(angle) -
            (t - originY) * Math.sin(angle) +
            originX,
        y:
            (originX - originX) * Math.sin(angle) +
            (t - originY) * Math.cos(angle) +
            originY,
    };
    loomObj.set("originX", newC.x);
    loomObj.set("originY", newC.y);
}
export const calcScaleAll = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    let {
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
    } = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos)
    let scaleX, scaleY
    switch (target.base) {
        case 'left-top':
            scaleX = (width + pointer.x - msPos.x) / loomObj.width
            scaleY = (height + pointer.y - msPos.y) / loomObj.height
            break
        case 'right-bottom':
            scaleX = (width + msPos.x - pointer.x) / loomObj.width
            scaleY = (height + msPos.y - pointer.y) / loomObj.height
            break
        case 'left-bottom':
            scaleX = (width + pointer.x - msPos.x) / loomObj.width
            scaleY = (height + msPos.y - pointer.y) / loomObj.height
            break
        case 'right-top':
            scaleX = (width + msPos.x - pointer.x) / loomObj.width;
            scaleY = (height + pointer.y - msPos.y) / loomObj.height;
            break
    }
    // let scaleX = target.base === 'left-top' ? (width + pointer.x - msPos.x) / loomObj.width : (width + msPos.x - pointer.x) / loomObj.width;
    // let scaleY = target.base === 'left-top' ? (height + pointer.y - msPos.y) / loomObj.height : (height + msPos.x - pointer.x) / loomObj.height;
    loomObj.set("scaleX", scaleX);
    loomObj.set("scaleY", scaleY);
    let t = originY + (pointer.y - msPos.y) / 2;
    let l = originX + (pointer.x - msPos.x) / 2;
    let newC = {
        x:
            (l - originX) * Math.cos(angle) -
            (t - originY) * Math.sin(angle) +
            originX,
        y:
            (l - originX) * Math.sin(angle) +
            (t - originY) * Math.cos(angle) +
            originY,
    };
    loomObj.set("originX", newC.x);
    loomObj.set("originY", newC.y);
}
export let cache = {
    startPos: null
}
export const rotateObject = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    let {
        originX,
        originY,
        cachePos
    } = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos)
    if (!cache.startPos) {
        cache.startPos = mousedownPos
    }
    let initAngle = Math.atan2(
        cache.startPos.y - originY,
        cache.startPos.x - originX
    );
    let currentAngle = Math.atan2(cachePos.y - originY, cachePos.x - originX);
    let rotate_angle = currentAngle - initAngle;
    // angle += rotate_angle
    loomObj.set("angle", loomObj.angle + rotate_angle);
    // this.startPos = pos;
    cache.startPos = cachePos;
    let degree = 0
    if (loomObj.angle * 180 / Math.PI < 0) {
        degree = 360 + loomObj.angle * 180 / Math.PI
    } else {
        degree = loomObj.angle * 180 / Math.PI
    }
}

function getDefaultParams (target, pointer, defaultTransform, mousedownPos) {
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

export const calcPolygon = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    target.left = pos.x
    target.top = pos.y
    loomObj.points[target.index] = target.getCoords()
}

export const calcPolygonCenter = (target, loomObj, pos) => {
    loomObj.points.splice(
        target.index + 1,
        0,
        target.getCoords()
    )
    // this.activeShape.points.splice(
    //     this.editIndex[1] + 1,
    //     0,
    //     this.activeShape.centerPoints[this.editIndex[1]]
    // );
}

export const moveObject = (target, loomObj, pos, defaultTransform, mousedownPos) => {
    if (loomObj.lockMove) return
    if (!cache.startPos) {
        cache.startPos = mousedownPos
    }
    if (loomObj?.left && loomObj?.top) {
        loomObj.left = loomObj.originX += (pos.x - cache.startPos.x)
        loomObj.top = loomObj.originY += (pos.y - cache.startPos.y)
    } else {
        loomObj.points.forEach(item => {
            item.x += (pos.x - cache.startPos.x)
            item.y += (pos.y - cache.startPos.y)
        })
    }
    cache.startPos = pos
}