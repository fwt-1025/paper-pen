/**
 * 数据响应式
 */
export class Observe{
    constructor() {}
    get(key) {
        return this[key]
    }
    set(key, val) {
        this[key] = val
    }
}