export const computedMatrix = (a, b, c) => {
    /**
     * [
        l,m,n,
        o,p,q
       ] * [
        r,s,t,
        u,v,w
       ]
     *  */
    let fMatrix = [
        a[0] * b[0] + a[1] * b[2],
        a[0] * b[1] + a[1] * b[3],
        a[2] * b[0] + a[3] * b[2],
        a[2] * b[1] + a[3] * b[3],
        a[4] * b[0] + a[5] * b[2] + b[4],
        a[4] * b[1] + a[5] * b[3] + b[5],
    ];
    return fMatrix;
};

export class Matrix {
    a = 1;
    b = 0;
    c = 0;
    d = 1;
    e = 0;
    f = 0;
    constructor() {}
    translate(x, y) {
        return this.transform(1, 0, 0, 1, x, y);
    }
    scaleU(x) {
        return this.transform(x, 0, 0, x, 0, 0);
    }
    rotate(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle);
        return this.transform(cos, sin, -sin, cos, 0, 0);
    }
    rotateAngle(angle) {
        let a = angle / 180 * Math.PI
        return this.rotate(a)
    }
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
        // console.log('me---------------', me)
        return me;
    }
    applyToPoint(x, y) {
        var me = this;
        return {
          x: x * me.a + y * me.c + me.e,
          y: x * me.b + y * me.d + me.f
        }
    }
    clone() {
        return {
            a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f
        }
    }
}
