import Event from "../event/events.js";
import { Matrix } from "../utils/matrix.js";
import RBush from "rbush";

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
let id = 0;
export class Selectable extends Event {
    el = null;
    width = 0;
    height = 0;
    lowerCanvas = null;
    lowerContext = null;
    upperCanvas = null;
    canvasContainer = null;
    cacheCanvas = null
    cacheCtx = null
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
    mask = false
    maskCanvas = null
    maskContext = null
    imageFillMode = "contain"; // 'contain' (baseheight) | 'cover' (default basewidth)
    ratio = {
        x: 1,
        y: 1,
    };
    pixelSize = {
        w: 0,
        h: 0,
    };
    preventDefault = true;
    selection = true; // can or not renderTop
    skipFindTarget = false; // 跳过查找当前元素
    wheel = {
        scale: false, // 是否开启鼠标滚轮缩放
        max: 40,
        min: 0.6,
        scroll: false, // 缩放时是否禁用浏览器滚动功能。
    };
    rightMove = false; // 是否开启鼠标右键拖动画布
    createCanvas = []
    canvasList = []
    contextList = []
    rBush = null
    constructor(el, options) {
        super();
        this.setOptions(options);
        this.el = el;
        id++;
        // this.initLowerCanvas();
        this.initCanvasContainer();
        // this.initUpperCanvas();
        this.createCanvas.length && this.createCanvasElement()
        if (this.mask && this.maskCanvas) this.initMaskCanvas()
        this.cacheCanvas = document.createElement('canvas')
        this.cacheCtx = this.cacheCanvas.getContext('2d')
        this.rBush = new RBush()
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
    createCanvasElement() {
        this.createCanvas.forEach(item => {
            console.log(item)
            this[item.canvasName] = item.el
            this[item.contextName] = item.el.getContext('2d')
            this.setCanvasStyles(this[item.canvasName])
            this[item.canvasName].classList.add(item.canvasName + '-' + id)
            this.canvasList.push(this[item.canvasName])
            this.contextList.push(this[item.contextName])
        })
    }
    initLowerCanvas() {
        if (!this.el) {
            throw new Error(
                "Canvas must have an 'el' parameter and cannot be empty"
            );
        }
        if (!this.lowerCanvas) {
            if (typeof this.el === "string") {
                this.lowerCanvas = document.querySelector(this.el);
            } else {
                this.lowerCanvas = this.el;
            }
            this.canvasList.push(this.lowerCanvas)
            this.lowerCanvas.classList.add("lower-canvas-" + id);
        }
        this.setCanvasStyles(this.lowerCanvas);
        if (!this.lowerContext) {
            this.lowerContext = this.lowerCanvas.getContext("2d"); //get 2d context from the lower-canvas element
            this.contextList.push(this.lowerContext)
        }
    }
    initMaskCanvas() {
        if (this.mask && this.maskCanvas) {
            this.setCanvasStyles(this.maskCanvas);
            this.maskCanvas.classList.add('mask-canvas-' + id);
            this.maskContext = this.maskCanvas.getContext('2d')
            this.canvasList.push(this.maskCanvas)
            this.contextList.push(this.maskContext)
        }
    }
    initCanvasContainer() {
        if (!this.canvasContainer) {
            this.canvasContainer = document.createElement("div");
            this.canvasContainer.classList.add("canvas-container-" + id);
        }
        this.initLowerCanvas()
        this.initUpperCanvas()
        if (this.lowerCanvas?.parentNode !== this.canvasContainer) {
            this.lowerCanvas?.parentNode?.replaceChild(
                this.canvasContainer,
                this.lowerCanvas
            );
            this.canvasContainer.appendChild(this.lowerCanvas);
        }
        this.canvasContainer.style.position = "relative";
        this.canvasContainer.style.width = this.width + "px";
        this.canvasContainer.style.height = this.height + "px";
    }
    initUpperCanvas() {
        if (!this.upperCanvas) {
            this.upperCanvas = document.createElement("canvas");
            this.upperCanvas.classList.add("upper-canvas-" + id);
            this.canvasList.push(this.upperCanvas)
            this.canvasContainer?.appendChild(this.upperCanvas);
        }
        this.upperContext = this.upperCanvas.getContext("2d");
        this.setCanvasStyles(this.upperCanvas);
        this.upperCanvas.style.setProperty('z-index', id)
        // this.canvasList.push(this.upperCanvas)
        // this.contextList.push(this.upperContext)
    }
    setCanvasStyles(element, customCanvasStyle = {}) {
        let styles = {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: this.width + "px",
            height: this.height + "px",
        };
        styles = Object.assign(styles, customCanvasStyle)
        Object.entries(styles).forEach(([property, value]) => {
            element.style.setProperty(property, value);
        });
        element.width = this.width;
        element.height = this.height;
    }
    add(...rest) {
        rest.forEach((item) => {
            item.needControl && item.setCoords && item.setCoords(this.lowerContext, this);
            // this.rBush.insert(item.getBoundingBox())
        });
        this._objects.push(...rest);
        this.emit("obj:add");
        this.requestRenderAll();
    }
    remove(drawObj) {
        this._objects = this._objects.filter((item) => item.id !== drawObj.id);
        this.emit("obj:remove");
    }
    /**
     * remove all objects
     */
    removeAll() {
        this._objects = [];
    }
    requestRenderAll() {
        window.cancelAnimationFrame(this._renderAll.bind(this));
        window.requestAnimationFrame(this._renderAll.bind(this));
    }
    _renderAll() {
        this.contextList.forEach(ctx => {
            ctx.setTransform(this.transformMatrix.clone());
            this.clearContext(ctx);
        })
        if (this.backgroundImage) {
            this.drawBackground(this.lowerContext);
        }
        this.emit("render:before");
        this._objects.forEach((item) => {
            item.target ? item.target.save() : this.lowerContext.save();
            item.render(item.target || this.lowerContext, this)
            item.target ? item.target.restore() : this.lowerContext.restore();
        });
        this.emit("render:after");
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
                if (this.imageFillMode === "cover") {
                    this.bgWidth = this.width;
                    this.bgHeight = this.width / pixel;
                } else if (this.imageFillMode === "contain") {
                    this.bgWidth = this.height * pixel;
                    this.bgHeight = this.height;
                } else if (!options && this.imageFillMode === 'baseCanvas') {
                    this.bgWidth = this.width
                    this.bgHeight = this.height
                }
                if (options?.width && options?.height) {
                    this.bgWidth = options.width;
                    this.bgHeight = options.height;
                }
                this.cacheCanvas.width = this.backgroundImage.naturalWidth
                this.cacheCanvas.height = this.backgroundImage.naturalHeight
                // this.setCanvasStyles(this.lowerCanvas);
                // this.setCanvasStyles(this.upperCanvas);
                this.cacheCtx.drawImage(this.backgroundImage, this.bgLeft || 0, this.bgTop || 0, this.backgroundImage.naturalWidth, this.backgroundImage.naturalHeight)
                this.emit("img:load", this);
            };
            this.requestRenderAll();
            return;
        }
        this.backgroundImage = bg;
        let pixel =
            this.backgroundImage.naturalWidth ? (this.backgroundImage.naturalWidth /
                this.backgroundImage.naturalHeight) : this.backgroundImage.width ? (this.backgroundImage.width / this.backgroundImage.height) : 1920 / 1080;
        // let width, height
        if (this.imageFillMode === "cover") {
            this.bgWidth = this.width;
            this.bgHeight = this.width / pixel;
        } else if (this.imageFillMode === "contain") {
            this.bgWidth = this.height * pixel;
            this.bgHeight = this.height;
        } else if (!options && this.imageFillMode === 'baseCanvas') {
            this.bgWidth = this.width
            this.bgHeight = this.height
        }
        if (options?.width && options?.height) {
            this.bgWidth = options.width;
            this.bgHeight = options.height;
        }
        this.cacheCanvas.width = this.backgroundImage.naturalWidth
        this.cacheCanvas.height = this.backgroundImage.naturalHeight
        this.cacheCtx.drawImage(this.backgroundImage, this.bgLeft || 0, this.bgTop || 0, this.backgroundImage.naturalWidth, this.backgroundImage.naturalHeight)
        this.requestRenderAll();
    }
    drawBackground(ctx) {
        ctx.save();
        ctx.drawImage(this.cacheCanvas, this.bgLeft || 0, this.bgTop || 0, this.bgWidth, this.bgHeight);
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
        y = y * d + f;
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
        this[key] = val;
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
        this._objects.forEach((item) => {
            item.set("isActive", false);
        });
    }
    resetTransformMatrix() {
        this.transformMatrix = this.transformMatrix.reset();
        this.requestRenderAll();
    }
    destroy() {
        // this.canvasContainer?.removeChild(this.upperCanvas)
        // this.canvasContainer?.removeChild(this.lowerCanvas)
        // this.canvasContainer?.replaceChild(this.lowerCanvas, this.canvasContainer)
        this.offAll()
    }
    /**
     *
     * @returns {imgData: ImageData, imgUrl: base64 string}
     */
    toDataUrl() {
        // this.upperCanvas.toDataUrl()
        let canvas = document.createElement("canvas");
        canvas.width = this.lowerCanvas.width;
        canvas.height = this.lowerCanvas.height;
        let ctx = canvas.getContext("2d");
        ctx.setTransform(this.transformMatrix.clone());
        this.clearContext(ctx);
        ctx.save();
        this._objects.forEach((item) => {
            item.render(ctx, this);
        });
        ctx.restore();
        let imgBase64Url = canvas.toDataURL();
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        return {
            imgData,
            imgUrl: imgBase64Url,
        };
    }
    /**
     *
     * @param {*} fillList [{r: number, g: number, b: number, a: number, fill: number}, ...]
     * @returns new Promise() ImageBitmap
     */
    toBitMap(fillList) {
        let { imgData } = this.toDataUrl();
        let data = imgData.data;
        if (fillList) {
            let fillListArr = fillList.map((item) => {
                return item.r + "-" + item.g + "-" + item.b;
            });
            for (let i = 0; i < data.length; i += 4) {
                let index = fillListArr.findIndex(
                    (ite) =>
                        ite === data[i] + "-" + data[i + 1] + "-" + data[i + 2]
                );
                if (~index) {
                    data[i] = fillList[index].fill;
                    data[i + 1] = 0;
                    data[i + 2] = 0;
                    data[i + 3] = 255;
                } else {
                    data[i] = 255;
                    data[i + 1] = 255;
                    data[i + 2] = 255;
                    data[i + 3] = 255;
                }
            }
        } else {
            for (let i = 0; i < data.length; i += 4) {
                if (data[i] || data[i + 1] || data[i + 2] || data[i + 3]) {
                    data[i] = 0;
                    data[i + 1] = 0;
                    data[i + 2] = 0;
                    data[i + 3] = 255;
                } else {
                    data[i] = 255;
                    data[i + 1] = 255;
                    data[i + 2] = 255;
                    data[i + 3] = 255;
                }
            }
        }
        return createImageBitmap(
            imgData,
            0,
            0,
            this.upperCanvas.width,
            this.upperCanvas.height
        );
    }
    toObjects() {
        return {
            objects: this._objects.map(item => {
                let { points,
                    scaleX,
                    scaleY,
                    translateX,
                    translateY,
                    matrix,
                    transformMatrix,
                    width,
                    height,
                    left,
                    top,
                    skewX,
                    skewY,
                    angle,
                    type,
                    stroke,
                    fill,
                    id
                } = item
                return {
                    points,
                    scaleX,
                    scaleY,
                    translateX,
                    translateY,
                    matrix,
                    transformMatrix,
                    width,
                    height,
                    left,
                    top,
                    skewX,
                    skewY,
                    angle,
                    type,
                    stroke,
                    fill,
                    id
                }
            }),
            pixelSize: this.pixelSize,
        };
    }
    setFocusMode({ base = 'w', baseW, baseH, scale }) {
        let { x: cx, y: cy } = this._activeObject.getShapeCenter()
        let { maxX, maxY, minX, minY } = this._activeObject.getMaxAndMinmun()
        let { w, h } = { w: this.width, h: this.height }
        let useW = baseW || w,
            useH = baseH || h
        let scaleY = useH / (maxY - minY) - 0.2
        let scaleX = useW / (maxX - minX) - 0.2
        this.transformMatrix = this.transformMatrix.reset()
        if (base === 'w') {
            this.transformMatrix.scaleU(scale || scaleX)
        } else {
            this.transformMatrix.scaleU(scale || scaleY)
        }
        this.transformMatrix.e += (useW / 2) - cx * this.transformMatrix.a
        this.transformMatrix.f += (useH / 2) - cy * this.transformMatrix.d
        // this.ctx.setTransform(this.transformMatrix.clone())
        this.requestRenderAll()
    }
}
