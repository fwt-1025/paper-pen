import { getDefaultParams } from '../utils/editObject'

export const scaleCursor = (obj, control) => {
    let scaleMap = ['e', 'se', 's', 'sw', 'w', 'nw', 'n', 'ne', 'e'];
    let { a, b } = obj.matrix
    let angle = Math.atan2(b, a)
    let cornerAngle =
      angle / (Math.PI / 180) + Math.atan2(control.y, control.x) / (Math.PI / 180) + 360;
    let cursor = scaleMap[Math.round((cornerAngle % 360) / 45) % 4]
  return `${cursor}-resize`;
}

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