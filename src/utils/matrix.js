export class Matrix {
    constructor(a, b, c, d, e, f) {
        this.a = a || 1
        this.b = b || 0
        this.c = c || 0
        this.d = d || 1
        this.e = e || 0
        this.f = f || 0
    }
    /**
     * matrix translate
     * 矩阵平移
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    translate(x, y) {
        return this.transform(1, 0, 0, 1, x, y);
    }
    /**
     * matrix scale
     * 矩阵缩放指定倍数
     * @param {*} x 
     * @returns 
     */
    scaleU(x) {
        return this.transform(x, 0, 0, x, 0, 0);
    }
    /**
     * Multiples corresponding to x-axis and y-axis scaling
     * x轴y轴缩放对应的倍数
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    scale(x, y) {
        return this.transform(x, 0, 0, y, 0, 0)
    }
    /**
     * rotate Matrix
     * 旋转矩阵
     * @param {*} radian 
     * @returns 
     */
    rotate(radian) {
        var cos = Math.cos(radian),
            sin = Math.sin(radian);
        return this.transform(cos, sin, -sin, cos, 0, 0);
    }
    /**
     * angle to radian
     * 角度转弧度
     * @param {*} angle 
     * @returns 
     */
    rotateAngle(angle) {
        let radian = angle / 180 * Math.PI
        return this.rotate(radian)
    }
    /**
     * Matrix 叉乘
     * @param {*} a2 
     * @param {*} b2 
     * @param {*} c2 
     * @param {*} d2 
     * @param {*} e2 
     * @param {*} f2 
     * @returns 
     */
    transform(
        a2,
        b2,
        c2,
        d2,
        e2,
        f2
    ) {
        var me = this,
            a1 = this.a,
            b1 = this.b,
            c1 = this.c,
            d1 = this.d,
            e1 = this.e,
            f1 = this.f;

        /* matrix column order is:
         *   a1 b1 0   a2  b2 0   a  c  e  
         *   c1 d1 0   c2  d2 0   b  d  f
         *   e1 f1 1   e2  f2 1
         */
        // console.log(a2,b2,c2,d2,e2,f2, me)

        // a = a1 * a2 + c1 * b2 + 0
        // c = a1 * c2 + c1 * d2 + 0
        // e = a1 * e2 + c1 * f2 + e1

        me.a = a1 * a2 + c1 * b2;
        me.b = b1 * a2 + d1 * b2;
        me.c = a1 * c2 + c1 * d2;
        me.d = b1 * c2 + d1 * d2;
        me.e = a1 * e2 + c1 * f2 + e1;
        me.f = b1 * e2 + d1 * f2 + f1;
        return me;
    }
    /**
     * Apply the current matrix to point
     * 将当前矩阵应用到传入的点
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
    applyToPoint(x, y) {
        var me = this;
        return {
          x: x * me.a + y * me.c + me.e,
          y: x * me.b + y * me.d + me.f
        }
    }
    /**
     * clone a new Matrix
     * 克隆一个新的矩阵
     * @returns new Matrix
     */
    clone() {
        return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f)
    }
    /**
     * reset the matrix
     * 1 0 0
     * 0 1 0
     * 0 0 1
     * @returns new Matrix
     */
    reset() {
        return new Matrix()
    }
}
