import { Selectable } from "./Selectable";
import { cache, moveObject } from '../utils/editObject'
const addEvent = (el, eventFnName, fn) => {
    el.addEventListener(eventFnName, fn);
};
const removeEvent = (el, ...args) => el.removeEventListener(...args);

export class Canvas extends Selectable {
    targetCornerIndex = -1;
    mousedownPos = {
        x: 0,
        y: 0,
    }; // the position of mousedown
    corner = null; // Control
    _groupSelector = null // renderTop
    // background = '' // image  canvas  video
    constructor(el, options) {
        super(el, options || {});
        this.initBindEvents();
        this.initEvents();
    }
    initBindEvents() {
        [
            "handleMouseDown",
            "handleMouseMove",
            "handleMouseUp",
            "handleMouseWheel",
        ].forEach((eventFnName) => {
            this[eventFnName] = this[eventFnName].bind(this);
        });
    }
    initEvents() {
        if (this.upperCanvas instanceof HTMLElement) {
            addEvent(this.upperCanvas, "mousedown", this.handleMouseDown);
            addEvent(this.upperCanvas, "mousemove", this.handleMouseMove);
            addEvent(this.upperCanvas, "mouseup", this.handleMouseUp);
            addEvent(this.upperCanvas, "mousewheel", this.handleMouseWheel);
            this.preventDefault && addEvent(this.upperCanvas, 'contextmenu', (e) => {
                e.preventDefault()
            })
            // this.upperCanvas.addEventListener('mousedown', this.handleMouseDown)
        }
    }
    handleMouseDown(evt) {
        let optEvent = this.getMousePosInfo(evt);
        if (evt.button === 2) {
            this.emit("mouse:down", optEvent);
            if (this.rightMove) {
                const pointer = this.getPointer(optEvent)
                const moveCanvas = (opt) => {
                    let rightEvent = this.getMousePosInfo(opt);
                    let me = this.getPointer(rightEvent)
                    let x = me.x - pointer.x
                    let y = me.y - pointer.y
                    this.transformMatrix.translate(x, y)
                    this.requestRenderAll()
                }
                const removeMoveCanvas = () => {
                    removeEvent(this.upperCanvas, "mousemove", moveCanvas)
                    removeEvent(this.upperCanvas, "mouseup", removeMoveCanvas)
                }
                addEvent(this.upperCanvas, "mousemove", moveCanvas);
                addEvent(this.upperCanvas, "mouseup", removeMoveCanvas)
            }
            return
        }
        
        const p = this.getPointer(optEvent);
        this.mousedownPos = p;
        let target = this.getActiveObject();
        if (this.corner && target && !this.skipFindTarget) {
            this.corner.isEditing = true;
            this.setDefaultTransform(p, target);
            this.corner.mousedownHandler && this.corner.mousedownHandler(this.corner, this.corner.target, this.mousedownPos)
            this.requestRenderAll()
            return
        }
        if (!this.corner && !this.skipFindTarget) {
            let t = this.findTarget(p)
            if (t && t !== target) {
                target && target.set('isActive', false)
                this.setActiveObject(t)
                t.set('isActive', true)
            }
            if (!t) {
                this.setActiveObject(null)
            }
            this.requestRenderAll()
        }
        this.emit("mouse:down", optEvent);
        if (this._activeObject && !this.skipFindTarget) {
            this.objectMoving = true
        }
        if (this.selection && !this.getActiveObject()) {
            this._groupSelector = {
                x: p.x,
                y: p.y,
                deltaX: 0,
                deltaY: 0
            }
        }
        addEvent(this.upperCanvas, "mousemove", this.handleMouseMove);
        this.requestRenderAll();
    }
    handleMouseMove(evt) {
        let optEvent = this.getMousePosInfo(evt);
        const pointer = this.getPointer(optEvent);
        if (this._activeObject && !this.skipFindTarget && !this?.corner?.isEditing) {
            for (let i = 0; i < this._activeObject.coords.length; i++) {
                let item = this._activeObject.coords[i];
                if (item.isPointInControl(this.getPointer(evt), this.transformMatrix)) {
                    this.corner = item;
                    let cur = this.corner.cursorHandler && this.corner.cursorHandler(this._activeObject, this.corner)
                    this.setCursor(cur || item.cursor);
                    break;
                } else {
                    this.setCursor('default')
                    this.corner = null
                }
            }
            if (this._activeObject.centerControlCoords?.length && !this.corner) {
                for (let i = 0; i < this._activeObject.centerControlCoords.length; i++) {
                    let item = this._activeObject.centerControlCoords[i];
                    if (item.isPointInControl(this.getPointer(evt), this.transformMatrix)) {
                        this.corner = item;
                        this.setCursor(item.cursor);
                        break;
                    } else {
                        this.setCursor('default')
                        this.corner = null
                    }
                }
            }
        }
        if (this.corner && this.corner.isEditing  && !this.skipFindTarget) {
            this.corner.mousemoveHandler && this.corner.mousemoveHandler(
                this.corner,
                this.corner.target,
                pointer,
                this.defaultTransform,
                this.mousedownPos
            );
            this.requestRenderAll();
        }
        if (this.objectMoving && this._activeObject) {
            moveObject(this.corner, this._activeObject,
                pointer,
                this.defaultTransform,
                this.mousedownPos)
            this.requestRenderAll()
        }
        const groupSelector = this._groupSelector
        if (groupSelector) {
            groupSelector.deltaX = pointer.x - groupSelector.x;
            groupSelector.deltaY = pointer.y - groupSelector.y;
            this.renderTop();
        }

        if (!this.corner) {
            let target = this.findTarget(pointer)
            if (target) {
                this.setCursor('move')
                optEvent.target = target
            } else {
                this.setCursor('default')
            }
        }
        this.emit("mouse:move", optEvent);

    }
    handleMouseUp(evt) {
        let optEvent = this.getMousePosInfo(evt);
        this.emit("mouse:up", optEvent);
        // let p = this.getPointer(optEvent)
        this.objectMoving = false
        cache.startPos = null
        this._groupSelector = null
        if (evt.button === 2) {
            return
        }
        // if ((this.corner && !this.skipFindTarget) || this.skipFindTarget) {
        //     return
        // }
        this.corner = null;
        if (this.contextTopDirty) this.clearContext(this.upperContext)
        // let target = this.getActiveObject()
        // if (!this.corner) {
        //     let t = this.findTarget(p)
        //     if (t && t !== target) {
        //         target && target.set('isActive', false)
        //         this.setActiveObject(t)
        //         t.set('isActive', true)
        //     }
        //     if (!t) {
        //         this.setActiveObject(null)
        //     }
        //     this.requestRenderAll()
        // }
    }
    handleMouseWheel(evt) {
        let optEvent = this.getMousePosInfo(evt);
        this.emit("mouse:wheel", optEvent);
        if (this.wheel?.scale) {
            let pos = this.getPointer(optEvent)
            let scale = optEvent.deltaY < 0 ? 1 + 0.2 : 1 - 0.2
            this.transformMatrix.translate(pos.x, pos.y).scaleU(scale)
            if (this.transformMatrix.a > 40) this.transformMatrix.scaleU(40 / this.transformMatrix.a)
            if (this.transformMatrix.a < 0.6) this.transformMatrix.scaleU(0.6 / this.transformMatrix.a)
            this.transformMatrix.translate(-pos.x, -pos.y)
            this.requestRenderAll()
        }
    }
    getMousePosInfo(evt) {
        let optEvent = {
            clientX: evt.clientX,
            clientY: evt.clientY,
            type: evt.type,
            button: evt.button,
            offsetX: evt.offsetX,
            offsetY: evt.offsetY,
            ctrlKey: evt.ctrlKey,
            shiftKey: evt.shiftKey,
            deltaY: evt.deltaY,
        };
        return optEvent;
    }
    getPointer(evt) {
        let boundClientRect = this.upperCanvas?.getBoundingClientRect();
        return {
            x:
                (evt.clientX - boundClientRect.left - this.transformMatrix.e) /
                this.transformMatrix.a, // left side of the client area of the canvas element.
            y:
                (evt.clientY - boundClientRect.top - this.transformMatrix.f) /
                this.transformMatrix.d, // top side of the client area of the canvas element.
        };
    }
    findTarget(pos) {
        // px，py为p点的x和y坐标
        for (let i = this._objects.length - 1; i >= 0; i--) {
            if (this._objects[i].notNeedFindTarget) continue
            if (this._objects[i]?.isPointInPath) {
                let result = this._objects[i].isPointInPath(pos)
                if (result) {
                    return this._objects[i]
                }
                continue
            }
            if (!this._objects[i]?.coords?.length || !this._objects[i]?.coords) return
            if (this._findTarget(pos, this._objects[i].coords)) {
                return this._objects[i];
            }
        }
    }
    destroy() {
        removeEvent(this.upperCanvas, 'mousedown', this.handleMouseDown)
        removeEvent(this.upperCanvas, 'mousemove', this.handleMouseMove)
        removeEvent(this.upperCanvas, 'mouseup', this.handleMouseUp)
        removeEvent(this.upperCanvas, 'mousewheel', this.handleMouseWheel)
    }
}
