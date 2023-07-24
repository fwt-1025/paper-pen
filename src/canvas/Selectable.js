import Event from "../utils/events";
import { Matrix } from "../utils/matrix";

const defaultTransfromMatrix = {
    scaleX: 1,
    scaleY: 1,
    angle: 0,
    skewX: 0,
    skewY: 0,
    translateX: 0,
    translateY: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    originX: "left",
    originY: "top",
};

export class Selectable extends Event {
    el = null;
    width = 0;
    height = 0;
    lowerCanvas = null;
    lowerContext = null;
    upperCanvas = null;
    canvasContainer = null;
    transform = [1, 0, 0, 1, 0, 0];
    transformMatrix = new Matrix();
    defaultTransform = defaultTransfromMatrix;
    _objects = [];
    _activeObject = null;
    selection = true;
    selectionLineWidth = 1;
    selectionColor = "#00f";
    selectionBorderColor = "#000";
    selectionOpacity = 0.3;
    background = "";
    backgroundImage = new Image();
    baseWidth = false;
    baseHeight = true;
    ratio = {
        x: 1,
        y: 1,
    };
    pixelSize = {
        w: 0,
        h: 0,
    };
    constructor(el, options) {
        super();
        this.setOptions(options);
        this.el = el;
        this.initLowerCanvas();
        this.initCanvasContainer();
        this.initUpperCanvas();
    }
    setOptions(options) {
        for (const key in options) {
            // For each key in options object...
            this[key] = options[key];
        }
        // if (this.background) {
        //     if (typeof this.background === 'string') {
        //         this.backgroundImage.src = this.background
        //     } else {
        //         this.backgroundImage = this.background
        //     }
        // }
    }
    initLowerCanvas() {
        if (!this.el) {
            throw new Error(
                "Canvas must have an 'el' parameter and cannot be empty"
            );
        }
        if (typeof this.el === "string") {
            this.lowerCanvas = document.querySelector(this.el);
        } else {
            this.lowerCanvas = this.el;
        }
        this.setCanvasStyles(this.lowerCanvas);
        this.lowerCanvas.classList.add("lower-canvas");
        this.lowerContext = this.lowerCanvas.getContext("2d"); //get 2d context from the lower-canvas element
    }
    initCanvasContainer() {
        this.canvasContainer = document.createElement("div");
        this.canvasContainer.classList.add("canvas-container");
        this.lowerCanvas?.parentNode?.replaceChild(
            this.canvasContainer,
            this.lowerCanvas
        );
        this.canvasContainer.appendChild(this.lowerCanvas);
        this.canvasContainer.style.position = "relative";
        this.canvasContainer.style.width = this.width + "px";
        this.canvasContainer.style.height = this.height + "px";
    }
    initUpperCanvas() {
        this.upperCanvas = document.createElement("canvas");
        this.upperCanvas.classList.add("upper-canvas");
        this.upperContext = this.upperCanvas.getContext("2d");
        this.setCanvasStyles(this.upperCanvas);
        this.canvasContainer?.appendChild(this.upperCanvas);
    }
    setCanvasStyles(element) {
        let styles = {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: this.width + "px",
            height: this.height + "px",
        };
        Object.entries(styles).forEach(([property, value]) => {
            element.style.setProperty(property, value);
        });
        element.width = this.width;
        element.height = this.height;
    }
    add(...rest) {
        rest.forEach((item) => {
            item.setCoords && item.setCoords(this.lowerContext, this);
        });
        this._objects.push(...rest);
        this.requestRenderAll();
    }
    remove(loomObj) {
        this._objects = this._objects.filter(item => item.id !== loomObj.id)
    }
    requestRenderAll() {
        window.requestAnimationFrame(this._renderAll.bind(this));
    }
    _renderAll() {
        this.clearContext(this.lowerContext);
        if (this.backgroundImage) {
            this.drawBackground(this.lowerContext);
        }
        this.lowerContext.save();
        this._objects.forEach((item) => {
            item.render(this.lowerContext, this);
        });
        this.lowerContext.restore();
    }
    setBackground(bg, options) {
        if (typeof bg === "string") {
            this.backgroundImage.src = bg;
            this.backgroundImage.onload = () => {
                this.pixelSize = {
                    w: this.backgroundImage.naturalWidth,
                    h: this.backgroundImage.naturalHeight,
                };
                let pixel =
                    this.backgroundImage.naturalWidth /
                    this.backgroundImage.naturalHeight;
                // let width, height
                if (this.baseWidth) {
                    this.width = this.width;
                    this.height = this.width / pixel;
                } else if (this.baseHeight) {
                    this.width = this.height * pixel;
                    this.height = this.height;
                }
                if (options?.width && options?.height) {
                    this.width = options.width
                    this.height = options.height
                }
                this.setCanvasStyles(this.lowerCanvas);
                this.setCanvasStyles(this.upperCanvas);
                this.emit('img:load', this)
                this.requestRenderAll();
            };
            return
        }
        this.backgroundImage = bg;
        this.requestRenderAll();
    }
    drawBackground(ctx) {
        ctx.save();
        ctx.drawImage(this.backgroundImage, 0, 0, this.width, this.height);
        ctx.restore();
    }
    clearContext(ctx) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, this.width, this.height); //Clear canvas
        ctx.restore();
    }
    renderTop() {
        const ctx = this.upperContext;
        this.clearContext(ctx);
        this.renderTopLayer(ctx);
        // todo: how do i know if the after:render is for the top or normal contex?
        this.emit("after:render", { ctx });
    }
    renderTopLayer(ctx) {
        ctx.save();
        // brush
        // if (this.isDrawingMode && this._isCurrentlyDrawing) {
        //     this.freeDrawingBrush && this.freeDrawingBrush._render();
        //     this.contextTopDirty = true;
        // }
        // we render the top context - last object
        ctx.globalAlpha = this.selectionOpacity;
        if (this.selection && this._groupSelector) {
            this._drawSelection(ctx);
            this.contextTopDirty = true;
        }

        ctx.restore();
    }
    _drawSelection(ctx) {
        let { x, y, deltaX, deltaY } = this._groupSelector;
        const { a, b, c, d, e, f } = this.transformMatrix;
        x = x * a + e;
        y = y * a + f;
        // deltaX = deltaX * a + e
        // deltaY = deltaY * a + f
        if (this.selectionColor) {
            ctx.fillStyle = this.selectionColor;
            ctx.fillRect(x, y, deltaX * a, deltaY * a);
        }
        if (!this.selectionLineWidth || !this.selectionBorderColor) {
            return;
        }
        ctx.lineWidth = this.selectionLineWidth;
        ctx.strokeStyle = this.selectionBorderColor;
        ctx.strokeRect(x, y, deltaX * a, deltaY * a);
    }
    setDefaultTransform(pointer, target) {
        this.defaultTransform = {
            target: target,
            scaleX: target.scaleX,
            scaleY: target.scaleY,
            originX: target.originX,
            originY: target.originY,
            width: target.width * target.scaleX,
            offsetX: pointer.x - target.left,
            offsetY: pointer.y - target.top,
            left: target.left,
            top: target.top,
            height: target.height * target.scaleY,
            angle: target.angle,
        };
    }
    set(key, val) {
        this[key] = val
    }
    _findTarget(pos, coords) {
        let p = pos;
        let points = coords.map((control) =>
            control.getCoords(this.lowerContext)
        );
        points = coords[0].target.rotate ? points.slice(0, 7) : points;
        let poly = points.map((p1, i) => [p1, points[(i + 1) % points.length]]);
        let px = p.x,
            py = p.y,
            flag = false;
        //这个for循环是为了遍历多边形的每一个线段
        for (let i = 0, l = poly.length; i < l; i++) {
            let sx = poly[i][0].x, //线段起点x坐标
                sy = poly[i][0].y, //线段起点y坐标
                tx = poly[i][1].x, //线段终点x坐标
                ty = poly[i][1].y; //线段终点y坐标
            // 点与多边形顶点重合
            if ((sx === px && sy === py) || (tx === px && ty === py)) {
                return true;
            }

            // 点的射线和多边形的一条边重合，并且点在边上
            if (
                sy === ty &&
                sy === py &&
                ((sx > px && tx < px) || (sx < px && tx > px))
            ) {
                return true;
            }

            // 判断线段两端点是否在射线两侧
            if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
                // 求射线和线段的交点x坐标，交点y坐标当然是py
                let x = sx + ((py - sy) * (tx - sx)) / (ty - sy);

                // 点在多边形的边上
                if (x === px) {
                    return true;
                }

                // x大于px来保证射线是朝右的，往一个方向射，假如射线穿过多边形的边界，flag取反一下
                if (x > px) {
                    flag = !flag;
                }
            }
        }

        // 射线穿过多边形边界的次数为奇数时点在多边形内
        if (flag) {
            return true;
        } else {
            return false;
        }
    }
    setActiveObject(loomObj) {
        if (loomObj) {
            this._activeObject = loomObj;
        } else {
            this._activeObject && this._activeObject.set("isActive", false);
            this._activeObject = null;
        }
    }
    getActiveObject() {
        return this._activeObject;
    }
    setCursorFromTarget(target) {
        this.setCursor("pointer");
    }
    setCursor(cursor) {
        this.upperCanvas.style.cursor = cursor;
    }
    resetActive() {
        this._objects.forEach(item => {
            item.set('isActive', false)
        })
    }
    destroy() {
        // this.canvasContainer?.removeChild(this.upperCanvas)
        // this.canvasContainer?.removeChild(this.lowerCanvas)
        // this.canvasContainer?.replaceChild(this.lowerCanvas, this.canvasContainer)
    }
    toObjects() {
        return {
            objects: this._objects,
            pixelSize: this.pixelSize
        }
    }
}
