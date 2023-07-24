export const rotatePoint = (pos, origin, angle) => {
    // pos 点基于 origin点旋转angle°得到的点坐标
    return {
        x:
            (pos.x - origin.x) * Math.cos(angle) -
            (pos.y - origin.y) * Math.sin(angle) +
            origin.x,

        y:
            (pos.x - origin.x) * Math.sin(angle) +
            (pos.y - origin.y) * Math.cos(angle) +
            origin.y,
    };
};
