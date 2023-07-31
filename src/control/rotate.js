import { getDefaultParams, cache } from '../utils/editObject'

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