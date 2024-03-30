function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);
    this.eventList = {};
  }
  _createClass(Event, [{
    key: "on",
    value: function on(eventName, fn) {
      this.eventList[eventName] = this.eventList[eventName] || [];
      this.eventList[eventName].push(fn);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var fns = this.eventList[eventName];
      if (fns) {
        this.eventList[eventName].forEach(function (item) {
          item.call.apply(item, [_this].concat(args));
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName, fn) {
      if (!this.eventList[eventName]) {
        return;
      }
      this.eventList[eventName] = this.eventList[eventName].filter(function (item) {
        return item !== fn;
      });
    }
  }, {
    key: "offAll",
    value: function offAll(eventName) {
      if (eventName) {
        delete this.eventList[eventName];
        return;
      }
      this.eventList = {};
    }
  }]);
  return Event;
}();

var Matrix = /*#__PURE__*/function () {
  function Matrix(a, b, c, d, e, f) {
    _classCallCheck(this, Matrix);
    this.a = a || 1;
    this.b = b || 0;
    this.c = c || 0;
    this.d = d || 1;
    this.e = e || 0;
    this.f = f || 0;
  }
  /**
   * matrix translate
   * 矩阵平移
   * @param {*} x 
   * @param {*} y 
   * @returns 
   */
  _createClass(Matrix, [{
    key: "translate",
    value: function translate(x, y) {
      return this.transform(1, 0, 0, 1, x, y);
    }
    /**
     * matrix scale
     * 矩阵缩放指定倍数
     * @param {*} x 
     * @returns 
     */
  }, {
    key: "scaleU",
    value: function scaleU(x) {
      return this.transform(x, 0, 0, x, 0, 0);
    }
    /**
     * Multiples corresponding to x-axis and y-axis scaling
     * x轴y轴缩放对应的倍数
     * @param {*} x 
     * @param {*} y 
     * @returns 
     */
  }, {
    key: "scale",
    value: function scale(x, y) {
      return this.transform(x, 0, 0, y, 0, 0);
    }
    /**
     * rotate Matrix
     * 旋转矩阵
     * @param {*} radian 
     * @returns 
     */
  }, {
    key: "rotate",
    value: function rotate(radian) {
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
  }, {
    key: "rotateAngle",
    value: function rotateAngle(angle) {
      var radian = angle / 180 * Math.PI;
      return this.rotate(radian);
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
  }, {
    key: "transform",
    value: function transform(a2, b2, c2, d2, e2, f2) {
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
  }, {
    key: "applyToPoint",
    value: function applyToPoint(x, y) {
      var me = this;
      return {
        x: x * me.a + y * me.c + me.e,
        y: x * me.b + y * me.d + me.f
      };
    }
    /**
     * clone a new Matrix
     * 克隆一个新的矩阵
     * @returns new Matrix
     */
  }, {
    key: "clone",
    value: function clone() {
      return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
    }
    /**
     * reset the matrix
     * 1 0 0
     * 0 1 0
     * 0 0 1
     * @returns new Matrix
     */
  }, {
    key: "reset",
    value: function reset() {
      return new Matrix();
    }
  }]);
  return Matrix;
}();

var defaultTransfromMatrix = {
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
  originY: "top"
};
var id = 0;
var Selectable = /*#__PURE__*/function (_Event) {
  _inherits(Selectable, _Event);
  var _super = _createSuper(Selectable);
  function Selectable(el, options) {
    var _this;
    _classCallCheck(this, Selectable);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "el", null);
    _defineProperty(_assertThisInitialized(_this), "width", 0);
    _defineProperty(_assertThisInitialized(_this), "height", 0);
    _defineProperty(_assertThisInitialized(_this), "lowerCanvas", null);
    _defineProperty(_assertThisInitialized(_this), "lowerContext", null);
    _defineProperty(_assertThisInitialized(_this), "upperCanvas", null);
    _defineProperty(_assertThisInitialized(_this), "canvasContainer", null);
    _defineProperty(_assertThisInitialized(_this), "cacheCanvas", null);
    _defineProperty(_assertThisInitialized(_this), "cacheCtx", null);
    _defineProperty(_assertThisInitialized(_this), "transform", [1, 0, 0, 1, 0, 0]);
    _defineProperty(_assertThisInitialized(_this), "transformMatrix", new Matrix());
    _defineProperty(_assertThisInitialized(_this), "defaultTransform", defaultTransfromMatrix);
    _defineProperty(_assertThisInitialized(_this), "_objects", []);
    _defineProperty(_assertThisInitialized(_this), "_activeObject", null);
    _defineProperty(_assertThisInitialized(_this), "selection", true);
    _defineProperty(_assertThisInitialized(_this), "selectionLineWidth", 1);
    _defineProperty(_assertThisInitialized(_this), "selectionColor", "#00f");
    _defineProperty(_assertThisInitialized(_this), "selectionBorderColor", "#000");
    _defineProperty(_assertThisInitialized(_this), "selectionOpacity", 0.3);
    _defineProperty(_assertThisInitialized(_this), "background", "");
    _defineProperty(_assertThisInitialized(_this), "backgroundImage", new Image());
    _defineProperty(_assertThisInitialized(_this), "mask", false);
    _defineProperty(_assertThisInitialized(_this), "maskCanvas", null);
    _defineProperty(_assertThisInitialized(_this), "maskContext", null);
    _defineProperty(_assertThisInitialized(_this), "imageFillMode", "contain");
    // 'contain' (baseheight) | 'cover' (default basewidth)
    _defineProperty(_assertThisInitialized(_this), "ratio", {
      x: 1,
      y: 1
    });
    _defineProperty(_assertThisInitialized(_this), "pixelSize", {
      w: 0,
      h: 0
    });
    _defineProperty(_assertThisInitialized(_this), "preventDefault", true);
    _defineProperty(_assertThisInitialized(_this), "selection", true);
    // can or not renderTop
    _defineProperty(_assertThisInitialized(_this), "skipFindTarget", false);
    // 跳过查找当前元素
    _defineProperty(_assertThisInitialized(_this), "wheel", {
      scale: false,
      // 是否开启鼠标滚轮缩放
      max: 40,
      min: 0.6,
      scroll: false // 缩放时是否禁用浏览器滚动功能。
    });
    _defineProperty(_assertThisInitialized(_this), "rightMove", false);
    // 是否开启鼠标右键拖动画布
    _defineProperty(_assertThisInitialized(_this), "createCanvas", []);
    _defineProperty(_assertThisInitialized(_this), "canvasList", []);
    _defineProperty(_assertThisInitialized(_this), "contextList", []);
    _this.setOptions(options);
    _this.el = el;
    id++;
    _this.initLowerCanvas();
    _this.initCanvasContainer();
    _this.initUpperCanvas();
    _this.createCanvas.length && _this.createCanvasElement();
    if (_this.mask && _this.maskCanvas) _this.initMaskCanvas();
    _this.cacheCanvas = document.createElement('canvas');
    _this.cacheCtx = _this.cacheCanvas.getContext('2d');
    return _this;
  }
  _createClass(Selectable, [{
    key: "setOptions",
    value: function setOptions(options) {
      for (var key in options) {
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
  }, {
    key: "createCanvasElement",
    value: function createCanvasElement() {
      var _this2 = this;
      this.createCanvas.forEach(function (item) {
        console.log(item);
        _this2[item.canvasName] = item.el;
        _this2[item.contextName] = item.el.getContext('2d');
        _this2.setCanvasStyles(_this2[item.canvasName]);
        _this2[item.canvasName].classList.add(item.canvasName + '-' + id);
        _this2.canvasList.push(_this2[item.canvasName]);
        _this2.contextList.push(_this2[item.contextName]);
      });
    }
  }, {
    key: "initLowerCanvas",
    value: function initLowerCanvas() {
      if (!this.el) {
        throw new Error("Canvas must have an 'el' parameter and cannot be empty");
      }
      if (typeof this.el === "string") {
        this.lowerCanvas = document.querySelector(this.el);
      } else {
        this.lowerCanvas = this.el;
      }
      this.setCanvasStyles(this.lowerCanvas);
      this.lowerCanvas.classList.add("lower-canvas-" + id);
      this.lowerContext = this.lowerCanvas.getContext("2d"); //get 2d context from the lower-canvas element
      this.canvasList.push(this.lowerCanvas);
      this.contextList.push(this.lowerContext);
    }
  }, {
    key: "initMaskCanvas",
    value: function initMaskCanvas() {
      if (this.mask && this.maskCanvas) {
        this.setCanvasStyles(this.maskCanvas);
        this.maskCanvas.classList.add('mask-canvas-' + id);
        this.maskContext = this.maskCanvas.getContext('2d');
        this.canvasList.push(this.maskCanvas);
        this.contextList.push(this.maskContext);
      }
    }
  }, {
    key: "initCanvasContainer",
    value: function initCanvasContainer() {
      var _this$lowerCanvas;
      this.canvasContainer = document.createElement("div");
      this.canvasContainer.classList.add("canvas-container-" + id);
      (_this$lowerCanvas = this.lowerCanvas) === null || _this$lowerCanvas === void 0 || (_this$lowerCanvas = _this$lowerCanvas.parentNode) === null || _this$lowerCanvas === void 0 ? void 0 : _this$lowerCanvas.replaceChild(this.canvasContainer, this.lowerCanvas);
      this.canvasContainer.appendChild(this.lowerCanvas);
      this.canvasContainer.style.position = "relative";
      this.canvasContainer.style.width = this.width + "px";
      this.canvasContainer.style.height = this.height + "px";
    }
  }, {
    key: "initUpperCanvas",
    value: function initUpperCanvas() {
      var _this$canvasContainer;
      this.upperCanvas = document.createElement("canvas");
      this.upperCanvas.classList.add("upper-canvas-" + id);
      this.upperContext = this.upperCanvas.getContext("2d");
      this.setCanvasStyles(this.upperCanvas);
      this.canvasList.push(this.upperCanvas);
      this.upperCanvas.style.setProperty('z-index', id);
      (_this$canvasContainer = this.canvasContainer) === null || _this$canvasContainer === void 0 ? void 0 : _this$canvasContainer.appendChild(this.upperCanvas);
      // this.canvasList.push(this.upperCanvas)
      // this.contextList.push(this.upperContext)
    }
  }, {
    key: "setCanvasStyles",
    value: function setCanvasStyles(element) {
      var customCanvasStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var styles = {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: this.width + "px",
        height: this.height + "px"
      };
      styles = Object.assign(styles, customCanvasStyle);
      Object.entries(styles).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          property = _ref2[0],
          value = _ref2[1];
        element.style.setProperty(property, value);
      });
      element.width = this.width;
      element.height = this.height;
    }
  }, {
    key: "add",
    value: function add() {
      var _this3 = this,
        _this$_objects;
      for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }
      rest.forEach(function (item) {
        item.setCoords && item.setCoords(_this3.lowerContext, _this3);
      });
      (_this$_objects = this._objects).push.apply(_this$_objects, rest);
      this.emit("obj:add");
      this.requestRenderAll();
    }
  }, {
    key: "remove",
    value: function remove(drawObj) {
      this._objects = this._objects.filter(function (item) {
        return item.id !== drawObj.id;
      });
      this.emit("obj:remove");
    }
    /**
     * remove all objects
     */
  }, {
    key: "removeAll",
    value: function removeAll() {
      this._objects = [];
    }
  }, {
    key: "requestRenderAll",
    value: function requestRenderAll() {
      window.cancelAnimationFrame(this._renderAll.bind(this));
      window.requestAnimationFrame(this._renderAll.bind(this));
    }
  }, {
    key: "_renderAll",
    value: function _renderAll() {
      var _this4 = this;
      this.contextList.forEach(function (ctx) {
        ctx.setTransform(_this4.transformMatrix.clone());
        _this4.clearContext(ctx);
      });
      if (this.backgroundImage) {
        this.drawBackground(this.lowerContext);
      }
      this.emit("render:before");
      this._objects.forEach(function (item) {
        item.target ? item.target.save() : _this4.lowerContext.save();
        item.render(item.target || _this4.lowerContext, _this4);
        item.target ? item.target.restore() : _this4.lowerContext.restore();
      });
      this.emit("render:after");
    }
  }, {
    key: "setBackground",
    value: function setBackground(bg, options) {
      var _this5 = this;
      if (typeof bg === "string") {
        this.backgroundImage.src = bg;
        this.backgroundImage.onload = function () {
          _this5.pixelSize = {
            w: _this5.backgroundImage.naturalWidth,
            h: _this5.backgroundImage.naturalHeight
          };
          var pixel = _this5.backgroundImage.naturalWidth / _this5.backgroundImage.naturalHeight;
          // let width, height
          if (_this5.imageFillMode === "cover") {
            _this5.bgWidth = _this5.width;
            _this5.bgHeight = _this5.width / pixel;
          } else if (_this5.imageFillMode === "contain") {
            _this5.bgWidth = _this5.height * pixel;
            _this5.bgHeight = _this5.height;
          }
          if (options !== null && options !== void 0 && options.width && options !== null && options !== void 0 && options.height) {
            _this5.bgWidth = options.width;
            _this5.bgHeight = options.height;
          }
          _this5.cacheCanvas.width = _this5.bgWidth;
          _this5.cacheCanvas.height = _this5.bgHeight;
          // this.setCanvasStyles(this.lowerCanvas);
          // this.setCanvasStyles(this.upperCanvas);
          _this5.cacheCtx.drawImage(_this5.backgroundImage, _this5.bgLeft || 0, _this5.bgTop || 0, _this5.bgWidth, _this5.bgHeight);
          _this5.emit("img:load", _this5);
        };
        this.requestRenderAll();
        return;
      }
      this.backgroundImage = bg;
      var pixel = this.backgroundImage.naturalWidth ? this.backgroundImage.naturalWidth / this.backgroundImage.naturalHeight : this.backgroundImage.width ? this.backgroundImage.width / this.backgroundImage.height : 1920 / 1080;
      // let width, height
      if (this.imageFillMode === "cover") {
        this.bgWidth = this.width;
        this.bgHeight = this.width / pixel;
      } else if (this.imageFillMode === "contain") {
        this.bgWidth = this.height * pixel;
        this.bgHeight = this.height;
      }
      if (options !== null && options !== void 0 && options.width && options !== null && options !== void 0 && options.height) {
        this.bgWidth = options.width;
        this.bgHeight = options.height;
      }
      this.cacheCanvas.width = this.bgWidth;
      this.cacheCanvas.height = this.bgHeight;
      this.cacheCtx.drawImage(this.backgroundImage, this.bgLeft || 0, this.bgTop || 0, this.bgWidth, this.bgHeight);
      this.requestRenderAll();
    }
  }, {
    key: "drawBackground",
    value: function drawBackground(ctx) {
      ctx.save();
      ctx.drawImage(this.cacheCanvas, this.bgLeft || 0, this.bgTop || 0, this.bgWidth, this.bgHeight);
      ctx.restore();
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, this.width, this.height); //Clear canvas
      ctx.restore();
    }
  }, {
    key: "renderTop",
    value: function renderTop() {
      var ctx = this.upperContext;
      this.clearContext(ctx);
      this.renderTopLayer(ctx);
      // todo: how do i know if the after:render is for the top or normal contex?
    }
  }, {
    key: "renderTopLayer",
    value: function renderTopLayer(ctx) {
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
  }, {
    key: "_drawSelection",
    value: function _drawSelection(ctx) {
      var _this$_groupSelector = this._groupSelector,
        x = _this$_groupSelector.x,
        y = _this$_groupSelector.y,
        deltaX = _this$_groupSelector.deltaX,
        deltaY = _this$_groupSelector.deltaY;
      var _this$transformMatrix = this.transformMatrix,
        a = _this$transformMatrix.a;
        _this$transformMatrix.b;
        _this$transformMatrix.c;
        var d = _this$transformMatrix.d,
        e = _this$transformMatrix.e,
        f = _this$transformMatrix.f;
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
  }, {
    key: "setDefaultTransform",
    value: function setDefaultTransform(pointer, target) {
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
        angle: target.angle
      };
    }
  }, {
    key: "set",
    value: function set(key, val) {
      this[key] = val;
    }
  }, {
    key: "_findTarget",
    value: function _findTarget(pos, coords) {
      var _this6 = this;
      var p = pos;
      var points = coords.map(function (control) {
        return control.getCoords(_this6.lowerContext);
      });
      points = coords[0].target.rotate ? points.slice(0, 7) : points;
      var poly = points.map(function (p1, i) {
        return [p1, points[(i + 1) % points.length]];
      });
      var px = p.x,
        py = p.y,
        flag = false;
      //这个for循环是为了遍历多边形的每一个线段
      for (var i = 0, l = poly.length; i < l; i++) {
        var sx = poly[i][0].x,
          //线段起点x坐标
          sy = poly[i][0].y,
          //线段起点y坐标
          tx = poly[i][1].x,
          //线段终点x坐标
          ty = poly[i][1].y; //线段终点y坐标
        // 点与多边形顶点重合
        if (sx === px && sy === py || tx === px && ty === py) {
          return true;
        }

        // 点的射线和多边形的一条边重合，并且点在边上
        if (sy === ty && sy === py && (sx > px && tx < px || sx < px && tx > px)) {
          return true;
        }

        // 判断线段两端点是否在射线两侧
        if (sy < py && ty >= py || sy >= py && ty < py) {
          // 求射线和线段的交点x坐标，交点y坐标当然是py
          var x = sx + (py - sy) * (tx - sx) / (ty - sy);

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
  }, {
    key: "setActiveObject",
    value: function setActiveObject(loomObj) {
      if (loomObj) {
        this._activeObject = loomObj;
      } else {
        this._activeObject && this._activeObject.set("isActive", false);
        this._activeObject = null;
      }
    }
  }, {
    key: "getActiveObject",
    value: function getActiveObject() {
      return this._activeObject;
    }
  }, {
    key: "setCursorFromTarget",
    value: function setCursorFromTarget(target) {
      this.setCursor("pointer");
    }
  }, {
    key: "setCursor",
    value: function setCursor(cursor) {
      this.upperCanvas.style.cursor = cursor;
    }
  }, {
    key: "resetActive",
    value: function resetActive() {
      this._objects.forEach(function (item) {
        item.set("isActive", false);
      });
    }
  }, {
    key: "resetTransformMatrix",
    value: function resetTransformMatrix() {
      this.transformMatrix = this.transformMatrix.reset();
      this.requestRenderAll();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // this.canvasContainer?.removeChild(this.upperCanvas)
      // this.canvasContainer?.removeChild(this.lowerCanvas)
      // this.canvasContainer?.replaceChild(this.lowerCanvas, this.canvasContainer)
      this.offAll();
    }
    /**
     *
     * @returns {imgData: ImageData, imgUrl: base64 string}
     */
  }, {
    key: "toDataUrl",
    value: function toDataUrl() {
      var _this7 = this;
      // this.upperCanvas.toDataUrl()
      var canvas = document.createElement("canvas");
      canvas.width = this.lowerCanvas.width;
      canvas.height = this.lowerCanvas.height;
      var ctx = canvas.getContext("2d");
      ctx.setTransform(this.transformMatrix.clone());
      this.clearContext(ctx);
      ctx.save();
      this._objects.forEach(function (item) {
        item.render(ctx, _this7);
      });
      ctx.restore();
      var imgBase64Url = canvas.toDataURL();
      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      return {
        imgData: imgData,
        imgUrl: imgBase64Url
      };
    }
    /**
     *
     * @param {*} fillList [{r: number, g: number, b: number, a: number, fill: number}, ...]
     * @returns new Promise() ImageBitmap
     */
  }, {
    key: "toBitMap",
    value: function toBitMap(fillList) {
      var _this$toDataUrl = this.toDataUrl(),
        imgData = _this$toDataUrl.imgData;
      var data = imgData.data;
      if (fillList) {
        var fillListArr = fillList.map(function (item) {
          return item.r + "-" + item.g + "-" + item.b;
        });
        var _loop = function _loop(i) {
          var index = fillListArr.findIndex(function (ite) {
            return ite === data[i] + "-" + data[i + 1] + "-" + data[i + 2];
          });
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
        };
        for (var i = 0; i < data.length; i += 4) {
          _loop(i);
        }
      } else {
        for (var _i = 0; _i < data.length; _i += 4) {
          if (data[_i] || data[_i + 1] || data[_i + 2] || data[_i + 3]) {
            data[_i] = 0;
            data[_i + 1] = 0;
            data[_i + 2] = 0;
            data[_i + 3] = 255;
          } else {
            data[_i] = 255;
            data[_i + 1] = 255;
            data[_i + 2] = 255;
            data[_i + 3] = 255;
          }
        }
      }
      return createImageBitmap(imgData, 0, 0, this.upperCanvas.width, this.upperCanvas.height);
    }
  }, {
    key: "toObjects",
    value: function toObjects() {
      return {
        objects: this._objects.map(function (item) {
          var points = item.points,
            scaleX = item.scaleX,
            scaleY = item.scaleY,
            translateX = item.translateX,
            translateY = item.translateY,
            matrix = item.matrix,
            transformMatrix = item.transformMatrix,
            width = item.width,
            height = item.height,
            left = item.left,
            top = item.top,
            skewX = item.skewX,
            skewY = item.skewY,
            angle = item.angle,
            type = item.type,
            stroke = item.stroke,
            fill = item.fill,
            id = item.id;
          return {
            points: points,
            scaleX: scaleX,
            scaleY: scaleY,
            translateX: translateX,
            translateY: translateY,
            matrix: matrix,
            transformMatrix: transformMatrix,
            width: width,
            height: height,
            left: left,
            top: top,
            skewX: skewX,
            skewY: skewY,
            angle: angle,
            type: type,
            stroke: stroke,
            fill: fill,
            id: id
          };
        }),
        pixelSize: this.pixelSize
      };
    }
  }]);
  return Selectable;
}(Event);

var cache = {
  startPos: null
};
function getDefaultParams(target, pointer, defaultTransform, mousedownPos) {
  var width = defaultTransform.width,
    height = defaultTransform.height,
    left = defaultTransform.left,
    top = defaultTransform.top,
    originX = defaultTransform.originX,
    originY = defaultTransform.originY,
    angle = defaultTransform.angle;
  var mx = mousedownPos.x,
    my = mousedownPos.y;
  var cachePos = JSON.parse(JSON.stringify(pointer));
  var msPos = {
    x: (mx - originX) * Math.cos(-angle) - (my - originY) * Math.sin(-angle) + originX,
    y: (mx - originX) * Math.sin(-angle) + (my - originY) * Math.cos(-angle) + originY
  };
  pointer = {
    x: (pointer.x - originX) * Math.cos(-angle) - (pointer.y - originY) * Math.sin(-angle) + originX,
    y: (pointer.x - originX) * Math.sin(-angle) + (pointer.y - originY) * Math.cos(-angle) + originY
  };
  return {
    width: width,
    height: height,
    left: left,
    top: top,
    originX: originX,
    originY: originY,
    angle: angle,
    msPos: msPos,
    pointer: pointer,
    cachePos: cachePos
  };
}

// export const editPolygon = (target, loomObj, pos, defaultTransform, mousedownPos) => {
//     target.left = pos.x
//     target.top = pos.y
//     loomObj.points[target.index] = target.getCoords()
// }

// export const editPolygonCenter = (target, loomObj, pos) => {
//     loomObj.points.splice(
//         target.index + 1,
//         0,
//         target.getCoords()
//     )
// }

var moveObject = function moveObject(target, loomObj, pos, defaultTransform, mousedownPos) {
  console.log(target);
  if (loomObj.lockMove) return;
  if (!cache.startPos) {
    cache.startPos = mousedownPos;
  }
  if (loomObj !== null && loomObj !== void 0 && loomObj.left && loomObj !== null && loomObj !== void 0 && loomObj.top) {
    loomObj.originX += pos.x - cache.startPos.x;
    loomObj.originY += pos.y - cache.startPos.y;
  } else {
    loomObj.points.forEach(function (item) {
      item.x += pos.x - cache.startPos.x;
      item.y += pos.y - cache.startPos.y;
    });
  }
  cache.startPos = pos;
};

var addEvent = function addEvent(el, eventFnName, fn) {
  el.addEventListener(eventFnName, fn);
};
var removeEvent = function removeEvent(el) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  return el.removeEventListener.apply(el, args);
};
var Canvas = /*#__PURE__*/function (_Selectable) {
  _inherits(Canvas, _Selectable);
  var _super = _createSuper(Canvas);
  // renderTop
  // background = '' // image  canvas  video
  function Canvas(el, options) {
    var _this;
    _classCallCheck(this, Canvas);
    _this = _super.call(this, el, options || {});
    _defineProperty(_assertThisInitialized(_this), "targetCornerIndex", -1);
    _defineProperty(_assertThisInitialized(_this), "mousedownPos", {
      x: 0,
      y: 0
    });
    // the position of mousedown
    _defineProperty(_assertThisInitialized(_this), "corner", null);
    // Control
    _defineProperty(_assertThisInitialized(_this), "_groupSelector", null);
    _this.initBindEvents();
    _this.initEvents();
    return _this;
  }
  _createClass(Canvas, [{
    key: "initBindEvents",
    value: function initBindEvents() {
      var _this2 = this;
      ["handleMouseDown", "handleMouseMove", "handleMouseUp", "handleMouseWheel"].forEach(function (eventFnName) {
        _this2[eventFnName] = _this2[eventFnName].bind(_this2);
      });
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      if (this.upperCanvas instanceof HTMLElement) {
        addEvent(this.upperCanvas, "mousedown", this.handleMouseDown);
        addEvent(this.upperCanvas, "mousemove", this.handleMouseMove);
        addEvent(this.upperCanvas, "mouseup", this.handleMouseUp);
        addEvent(this.upperCanvas, "mousewheel", this.handleMouseWheel);
        this.preventDefault && addEvent(this.upperCanvas, 'contextmenu', function (e) {
          e.preventDefault();
        });
        // this.upperCanvas.addEventListener('mousedown', this.handleMouseDown)
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(evt) {
      var _this3 = this;
      var optEvent = this.getMousePosInfo(evt);
      if (evt.button === 2) {
        this.emit("mouse:down", optEvent);
        if (this.rightMove) {
          var pointer = this.getPointer(optEvent);
          var moveCanvas = function moveCanvas(opt) {
            var rightEvent = _this3.getMousePosInfo(opt);
            var me = _this3.getPointer(rightEvent);
            var x = me.x - pointer.x;
            var y = me.y - pointer.y;
            _this3.transformMatrix.translate(x, y);
            _this3.requestRenderAll();
          };
          var removeMoveCanvas = function removeMoveCanvas() {
            removeEvent(_this3.upperCanvas, "mousemove", moveCanvas);
            removeEvent(_this3.upperCanvas, "mouseup", removeMoveCanvas);
          };
          addEvent(this.upperCanvas, "mousemove", moveCanvas);
          addEvent(this.upperCanvas, "mouseup", removeMoveCanvas);
        }
        return;
      }
      this.emit("mouse:down", optEvent);
      var p = this.getPointer(optEvent);
      this.mousedownPos = p;
      var target = this.getActiveObject();
      if (this.corner && target && !this.skipFindTarget) {
        this.corner.isEditing = true;
        this.setDefaultTransform(p, target);
        this.corner.mousedownHandler && this.corner.mousedownHandler(this.corner, this.corner.target, this.mousedownPos);
        this.requestRenderAll();
        return;
      }
      if (!this.corner && !this.skipFindTarget) {
        var t = this.findTarget(p);
        if (t && t !== target) {
          target && target.set('isActive', false);
          this.setActiveObject(t);
          t.emit('mouse:down', optEvent);
          t.set('isActive', true);
        }
        if (!t) {
          this.setActiveObject(null);
        }
        this.requestRenderAll();
      }
      if (this._activeObject && !this.skipFindTarget) {
        this.objectMoving = true;
      }
      if (this.selection && !this.getActiveObject()) {
        this._groupSelector = {
          x: p.x,
          y: p.y,
          deltaX: 0,
          deltaY: 0
        };
      }
      addEvent(this.upperCanvas, "mousemove", this.handleMouseMove);
      this.requestRenderAll();
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(evt) {
      var _this$corner;
      var optEvent = this.getMousePosInfo(evt);
      var pointer = this.getPointer(optEvent);
      if (this._activeObject && !this.skipFindTarget && !(this !== null && this !== void 0 && (_this$corner = this.corner) !== null && _this$corner !== void 0 && _this$corner.isEditing)) {
        var _this$_activeObject$c;
        for (var i = 0; i < this._activeObject.coords.length; i++) {
          var item = this._activeObject.coords[i];
          if (item.isPointInControl(this.getPointer(evt), this.transformMatrix)) {
            this.corner = item;
            var cur = this.corner.cursorHandler && this.corner.cursorHandler(this._activeObject, this.corner);
            this.setCursor(cur || item.cursor);
            break;
          } else {
            this.setCursor('default');
            this.corner = null;
          }
        }
        if ((_this$_activeObject$c = this._activeObject.centerControlCoords) !== null && _this$_activeObject$c !== void 0 && _this$_activeObject$c.length && !this.corner) {
          for (var _i = 0; _i < this._activeObject.centerControlCoords.length; _i++) {
            var _item = this._activeObject.centerControlCoords[_i];
            if (_item.isPointInControl(this.getPointer(evt), this.transformMatrix)) {
              this.corner = _item;
              this.setCursor(_item.cursor);
              break;
            } else {
              this.setCursor('default');
              this.corner = null;
            }
          }
        }
      }
      if (this.corner && this.corner.isEditing && !this.skipFindTarget) {
        this.corner.mousemoveHandler && this.corner.mousemoveHandler(this.corner, this.corner.target, pointer, this.defaultTransform, this.mousedownPos);
        this.requestRenderAll();
      }
      if (this.objectMoving && this._activeObject) {
        moveObject(this.corner, this._activeObject, pointer, this.defaultTransform, this.mousedownPos);
        this.requestRenderAll();
      }
      var groupSelector = this._groupSelector;
      if (groupSelector) {
        groupSelector.deltaX = pointer.x - groupSelector.x;
        groupSelector.deltaY = pointer.y - groupSelector.y;
        this.renderTop();
      }
      if (!this.corner) {
        var target = this.findTarget(pointer);
        if (target) {
          this.setCursor('move');
          optEvent.target = target;
          this.emit('obj:mouseover', target);
        } else {
          this.setCursor('default');
          this.emit('obj:mouseout', target);
        }
      }
      this.emit("mouse:move", optEvent);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(evt) {
      var optEvent = this.getMousePosInfo(evt);
      this.emit("mouse:up", optEvent);
      if (this.corner && this.corner.isEditing && !this.skipFindTarget) {
        this._activeObject.emit('obj:edit', this._activeObject);
      }
      if (this.objectMoving && this._activeObject) {
        this._activeObject.emit('obj:move', this._activeObject);
      }
      // let p = this.getPointer(optEvent)
      this.objectMoving = false;
      cache.startPos = null;
      this._groupSelector = null;
      if (evt.button === 2) {
        return;
      }
      // if ((this.corner && !this.skipFindTarget) || this.skipFindTarget) {
      //     return
      // }
      this.corner = null;
      if (this.contextTopDirty) this.clearContext(this.upperContext);
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
  }, {
    key: "handleMouseWheel",
    value: function handleMouseWheel(evt) {
      var _this$wheel, _this$wheel2;
      var optEvent = this.getMousePosInfo(evt);
      if ((_this$wheel = this.wheel) !== null && _this$wheel !== void 0 && _this$wheel.scroll) {
        var preventDefault = function preventDefault(e) {
          if (e.target.tagName === 'CANVAS') {
            e.preventDefault();
          } else {
            window.removeEventListener('mousewheel', preventDefault, {
              passive: false
            });
          }
        };
        window.addEventListener('mousewheel', preventDefault, {
          passive: false
        });
      }
      if ((_this$wheel2 = this.wheel) !== null && _this$wheel2 !== void 0 && _this$wheel2.scale) {
        var pos = this.getPointer(optEvent);
        var scale = optEvent.deltaY < 0 ? 1 + 0.2 : 1 - 0.2;
        this.transformMatrix.translate(pos.x, pos.y).scaleU(scale);
        if (this.transformMatrix.a > this.wheel.max) this.transformMatrix.scaleU(this.wheel.max / this.transformMatrix.a);
        if (this.transformMatrix.a < this.wheel.min) this.transformMatrix.scaleU(this.wheel.min / this.transformMatrix.a);
        this.transformMatrix.translate(-pos.x, -pos.y);
        this.requestRenderAll();
      }
      this.emit("mouse:wheel", optEvent);
    }
  }, {
    key: "getMousePosInfo",
    value: function getMousePosInfo(evt) {
      var optEvent = {
        clientX: evt.clientX,
        clientY: evt.clientY,
        type: evt.type,
        button: evt.button,
        offsetX: evt.offsetX,
        offsetY: evt.offsetY,
        ctrlKey: evt.ctrlKey,
        shiftKey: evt.shiftKey,
        deltaY: evt.deltaY
      };
      return optEvent;
    }
  }, {
    key: "getPointer",
    value: function getPointer(evt) {
      var _this$upperCanvas;
      var boundClientRect = (_this$upperCanvas = this.upperCanvas) === null || _this$upperCanvas === void 0 ? void 0 : _this$upperCanvas.getBoundingClientRect();
      return {
        x: (evt.clientX - boundClientRect.left - this.transformMatrix.e) / this.transformMatrix.a,
        // left side of the client area of the canvas element.
        y: (evt.clientY - boundClientRect.top - this.transformMatrix.f) / this.transformMatrix.d // top side of the client area of the canvas element.
      };
    }
  }, {
    key: "findTarget",
    value: function findTarget(pos) {
      // px，py为p点的x和y坐标
      for (var i = this._objects.length - 1; i >= 0; i--) {
        var _this$_objects$i, _this$_objects$i2, _this$_objects$i3;
        if (this._objects[i].notNeedFindTarget) continue;
        if ((_this$_objects$i = this._objects[i]) !== null && _this$_objects$i !== void 0 && _this$_objects$i.isPointInPath) {
          var result = this._objects[i].isPointInPath(pos);
          if (result) {
            return this._objects[i];
          }
          continue;
        }
        if (!((_this$_objects$i2 = this._objects[i]) !== null && _this$_objects$i2 !== void 0 && (_this$_objects$i2 = _this$_objects$i2.coords) !== null && _this$_objects$i2 !== void 0 && _this$_objects$i2.length) || !((_this$_objects$i3 = this._objects[i]) !== null && _this$_objects$i3 !== void 0 && _this$_objects$i3.coords)) return;
        if (this._findTarget(pos, this._objects[i].coords)) {
          return this._objects[i];
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      removeEvent(this.upperCanvas, 'mousedown', this.handleMouseDown);
      removeEvent(this.upperCanvas, 'mousemove', this.handleMouseMove);
      removeEvent(this.upperCanvas, 'mouseup', this.handleMouseUp);
      removeEvent(this.upperCanvas, 'mousewheel', this.handleMouseWheel);
    }
  }]);
  return Canvas;
}(Selectable);

var getRandomId = function getRandomId() {
  var str = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz12334567890-_';
  var id = '';
  for (var i = 0; i < 8; i++) {
    var index = Math.floor(Math.random() * str.length);
    id += str[index];
  }
  return id;
};

var DrawObject = /*#__PURE__*/function (_Event) {
  _inherits(DrawObject, _Event);
  var _super = _createSuper(DrawObject);
  function DrawObject(options) {
    var _this;
    _classCallCheck(this, DrawObject);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "type", "Object");
    _defineProperty(_assertThisInitialized(_this), "scaleX", 1);
    _defineProperty(_assertThisInitialized(_this), "scaleY", 1);
    _defineProperty(_assertThisInitialized(_this), "skewX", 0.0);
    // Degrees, 0.0 to 3.14
    _defineProperty(_assertThisInitialized(_this), "skewY", 0.0);
    // Degrees, 0.0 to 3.14
    _defineProperty(_assertThisInitialized(_this), "translateX", 0.0);
    _defineProperty(_assertThisInitialized(_this), "translateY", 0.0);
    _defineProperty(_assertThisInitialized(_this), "isActive", false);
    _defineProperty(_assertThisInitialized(_this), "displayGraph", true);
    _defineProperty(_assertThisInitialized(_this), "lineCap", 'round');
    _defineProperty(_assertThisInitialized(_this), "lineJoin", 'round');
    _defineProperty(_assertThisInitialized(_this), "fill", "");
    _defineProperty(_assertThisInitialized(_this), "stroke", "");
    _defineProperty(_assertThisInitialized(_this), "opacity", 1.0);
    _defineProperty(_assertThisInitialized(_this), "lineWidth", 1.0);
    _defineProperty(_assertThisInitialized(_this), "left", 0);
    _defineProperty(_assertThisInitialized(_this), "top", 0);
    _defineProperty(_assertThisInitialized(_this), "width", 0);
    _defineProperty(_assertThisInitialized(_this), "height", 0);
    _defineProperty(_assertThisInitialized(_this), "angle", 0);
    _defineProperty(_assertThisInitialized(_this), "originX", 0);
    _defineProperty(_assertThisInitialized(_this), "originY", 0);
    _defineProperty(_assertThisInitialized(_this), "offsetX", 0);
    _defineProperty(_assertThisInitialized(_this), "offsetY", 0);
    _defineProperty(_assertThisInitialized(_this), "coords", []);
    _defineProperty(_assertThisInitialized(_this), "rotate", false);
    _defineProperty(_assertThisInitialized(_this), "points", []);
    _defineProperty(_assertThisInitialized(_this), "ratio", {
      x: 1,
      y: 1
    });
    _defineProperty(_assertThisInitialized(_this), "cornerSize", 10);
    _defineProperty(_assertThisInitialized(_this), "cornerStyle", 'rect');
    _defineProperty(_assertThisInitialized(_this), "cornerBorderColor", '#000');
    _defineProperty(_assertThisInitialized(_this), "cornerColor", '');
    _defineProperty(_assertThisInitialized(_this), "cornerOpacity", 1);
    _defineProperty(_assertThisInitialized(_this), "transformMatrix", {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    });
    _defineProperty(_assertThisInitialized(_this), "notNeedFindTarget", false);
    _defineProperty(_assertThisInitialized(_this), "needControl", true);
    _defineProperty(_assertThisInitialized(_this), "lockMove", false);
    _this.setOptions(options);
    _this.id = getRandomId();
    return _this;
  }
  _createClass(DrawObject, [{
    key: "setOptions",
    value: function setOptions(options) {
      for (var key in options) {
        // For each key in options object...
        this[key] = options[key];
      }
      if (this.left && this.top) {
        this.originX = this.left + this.width / 2;
        this.originY = this.top + this.height / 2;
      }
    }
  }, {
    key: "render",
    value: function render(ctx, canvas) {
      if (!this.displayGraph) return;
      this.ratio = canvas.ratio;
      this.transformMatrix = canvas.transformMatrix;
      ctx.save();
      ctx.lineWidth = this.lineWidth / Math.abs(this.transformMatrix.a);
      ctx.lineCap = this.lineCap;
      ctx.lineJoin = this.lineJoin;
      ctx.globalAlpha = this.opacity;
      this.transform(ctx);
      this._render(ctx);
      ctx.restore();
      this.setCoords && this.setCoords(ctx);
      this.isActive && this.needControl && this._drawControls(ctx);
      this.isActive && this._drawBorders();
    }
  }, {
    key: "transform",
    value: function transform(ctx) {
      ctx.translate(this.originX, this.originY);
      ctx.rotate(this.angle);
      // ctx.scale(this.scaleX, this.scaleY)
      // let mat = ctx.getTransform()
      // ctx.transform(
      //     Math.cos(this.angle),
      //     Math.sin(this.angle),
      //     -Math.sin(this.angle),
      //     Math.cos(this.angle),
      //     this.left * mat.a + mat.e,
      //     this.top * mat.a + mat.f
      // )
    }
  }, {
    key: "_render",
    value: function _render(ctx) {
      // 每个对象有自己的绘制逻辑
    }
  }, {
    key: "_drawControls",
    value: function _drawControls(ctx) {
      var _this2 = this,
        _this$centerControlCo;
      // 绘制控制点
      ctx.save();
      this.coords.forEach(function (item) {
        // console.log(item)
        item.display && item.drawControl(ctx, _this2.angle);
      });
      ((_this$centerControlCo = this.centerControlCoords) === null || _this$centerControlCo === void 0 ? void 0 : _this$centerControlCo.length) && this.centerControlCoords.forEach(function (item) {
        item.drawControl(ctx, _this2.angle);
      });
      ctx.restore();
    }
  }, {
    key: "_drawBorders",
    value: function _drawBorders() {
      // 绘制边框线
    }
  }, {
    key: "set",
    value: function set(key, val) {
      // console.log(key, val);
      this._set(key, val);
    }
  }, {
    key: "_set",
    value: function _set(key, val) {
      this[key] = val;
    }
  }, {
    key: "strokeOrFill",
    value: function strokeOrFill(ctx) {
      this.stroke && ctx.stroke();
      this.fill && ctx.fill();
    }
  }, {
    key: "getCommonConfig",
    value: function getCommonConfig() {
      return {
        cornerSize: this.cornerSize,
        cornerStyle: this.cornerStyle,
        cornerColor: this.cornerColor,
        cornerBorderColor: this.cornerBorderColor,
        cornerOpacity: this.cornerOpacity
      };
    }
  }, {
    key: "getBoundingBox",
    value: function getBoundingBox() {
      if (this.type === 'Text') {
        return;
      }
      if (!(0 in this.points) || !this.points) {
        console.error('当前形状' + this.type + '没有points字段');
        return;
      }
      var xArr = [];
      var yArr = [];
      this.points.forEach(function (_ref) {
        var x = _ref.x,
          y = _ref.y;
        xArr.push(x);
        yArr.push(y);
      });
      var maxX = Math.max.apply(null, xArr);
      var maxY = Math.max.apply(null, yArr);
      var minX = Math.min.apply(null, xArr);
      var minY = Math.min.apply(null, yArr);
      return {
        x: minX,
        y: minY,
        w: maxX - minX,
        h: maxY - minY
      };
    }
  }]);
  return DrawObject;
}(Event);

var Control = /*#__PURE__*/function () {
  function Control(options) {
    _classCallCheck(this, Control);
    _defineProperty(this, "cornerSize", 10);
    _defineProperty(this, "cornerStyle", 'square');
    _defineProperty(this, "cornerBorderColor", '#000');
    _defineProperty(this, "cornerColor", '');
    _defineProperty(this, "cornerOpacity", 1);
    _defineProperty(this, "left", 0);
    _defineProperty(this, "top", 0);
    _defineProperty(this, "center", null);
    _defineProperty(this, "cursor", 'move');
    _defineProperty(this, "isEditing", false);
    _defineProperty(this, "display", true);
    // target = null
    _defineProperty(this, "mousemoveHandler", function () {
      return null;
    });
    _defineProperty(this, "mousedownHandler", function () {
      return null;
    });
    _defineProperty(this, "mouseupHandler", function () {
      return null;
    });
    this.setOptions(options);
    // this.cornerSize ||= this.target.cornerSize
    // this.cornerColor ||= this.target.cornerColor
    // this.cornerBorderColor ||= this.target.cornerBorderColor
    // this.cornerStyle ||= this.target.cornerStyle
    // this.cornerOpacity ||= this.target.cornerOpacity
  }
  _createClass(Control, [{
    key: "setOptions",
    value: function setOptions(options) {
      for (var key in options) {
        this[key] = options[key];
      }
    }
  }, {
    key: "drawControl",
    value: function drawControl(ctx, angle) {
      var mat = ctx.getTransform();
      ctx.save();
      ctx.translate(this.left, this.top);
      ctx.lineWidth = 1 / mat.a;
      ctx.globalAlpha = this.cornerOpacity;
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.strokeStyle = this.cornerBorderColor;
      ctx.fillStyle = this.cornerColor;
      if (this.cornerStyle === 'circle') {
        ctx.arc(0, 0, this.cornerSize / 2 / mat.a, 0, 2 * Math.PI, false);
      } else {
        ctx.rect(-this.cornerSize / 2 / mat.a, -this.cornerSize / 2 / mat.a, this.cornerSize / mat.a, this.cornerSize / mat.a);
      }
      ctx.closePath();
      this.cornerBorderColor && ctx.stroke();
      this.cornerColor && ctx.fill();
      ctx.restore();
    }
  }, {
    key: "isPointInControl",
    value: function isPointInControl(_ref, _ref2) {
      var x = _ref.x,
        y = _ref.y;
      var a = _ref2.a;
      var left = this.left,
        top = this.top;
      if (x >= left - this.cornerSize / 2 / a && x <= left + this.cornerSize / 2 / a && y >= top - this.cornerSize / 2 / a && y <= top + this.cornerSize / 2 / a) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      var _this$center = this.center,
        x = _this$center.x,
        y = _this$center.y;
      var newX = (this.left - x) * Math.cos(angle) - (this.top - y) * Math.sin(angle) + x;
      var newY = (this.left - x) * Math.sin(angle) + (this.top - y) * Math.cos(angle) + y;
      this.left = newX;
      this.top = newY;
    }
  }, {
    key: "getCoords",
    value: function getCoords() {
      // ctx.beginPath()
      // ctx.fillRect(this.left, this.top, 10, 10)
      // ctx.closePath()
      return {
        x: this.left,
        y: this.top
      };
    }
  }, {
    key: "set",
    value: function set(key, val) {
      this[key] = val;
    }
  }, {
    key: "updatePointPosition",
    value: function updatePointPosition() {}
  }]);
  return Control;
}();

var scaleCursor$1 = function scaleCursor(obj, control) {
  var scaleMap = ['e', 'se', 's', 'sw', 'w', 'nw', 'n', 'ne', 'e'];
  var _obj$matrix = obj.matrix,
    a = _obj$matrix.a,
    b = _obj$matrix.b;
  var angle = Math.atan2(b, a);
  var cornerAngle = angle / (Math.PI / 180) + Math.atan2(control.y, control.x) / (Math.PI / 180) + 360;
  var cursor = scaleMap[Math.round(cornerAngle % 360 / 45) % 4];
  return "".concat(cursor, "-resize");
};
var calcScaleX$1 = function calcScaleX(target, loomObj, pos, defaultTransform, mousedownPos) {
  var _getDefaultParams = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos),
    width = _getDefaultParams.width,
    originX = _getDefaultParams.originX,
    originY = _getDefaultParams.originY,
    angle = _getDefaultParams.angle,
    msPos = _getDefaultParams.msPos,
    pointer = _getDefaultParams.pointer;
  var scale = 1;
  scale = target.base === 'left-center' ? (width + pointer.x - msPos.x) / loomObj.width : (width - (pointer.x - msPos.x)) / loomObj.width;
  loomObj.set('scaleX', scale);
  var l = originX + (pointer.x - msPos.x) / 2;
  var newC = {
    x: (l - originX) * Math.cos(angle) - (originY - originY) * Math.sin(angle) + originX,
    y: (l - originX) * Math.sin(angle) + (originY - originY) * Math.cos(angle) + originY
  };
  loomObj.set('originX', newC.x);
  loomObj.set('originY', newC.y);
};
var calcScaleY$1 = function calcScaleY(target, loomObj, pos, defaultTransform, mousedownPos) {
  var _getDefaultParams2 = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos),
    height = _getDefaultParams2.height,
    originX = _getDefaultParams2.originX,
    originY = _getDefaultParams2.originY,
    angle = _getDefaultParams2.angle,
    msPos = _getDefaultParams2.msPos,
    pointer = _getDefaultParams2.pointer;
  var scale = 1;
  scale = target.base === 'center-top' ? (height + pointer.y - msPos.y) / loomObj.height : (height + msPos.y - pointer.y) / loomObj.height;
  loomObj.set("scaleY", scale);
  var t = originY + (pointer.y - msPos.y) / 2;
  var newC = {
    x: (originX - originX) * Math.cos(angle) - (t - originY) * Math.sin(angle) + originX,
    y: (originX - originX) * Math.sin(angle) + (t - originY) * Math.cos(angle) + originY
  };
  loomObj.set("originX", newC.x);
  loomObj.set("originY", newC.y);
};
var calcScaleAll$1 = function calcScaleAll(target, loomObj, pos, defaultTransform, mousedownPos) {
  var _getDefaultParams3 = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos),
    width = _getDefaultParams3.width,
    height = _getDefaultParams3.height,
    originX = _getDefaultParams3.originX,
    originY = _getDefaultParams3.originY,
    angle = _getDefaultParams3.angle,
    msPos = _getDefaultParams3.msPos,
    pointer = _getDefaultParams3.pointer;
  var scaleX, scaleY;
  switch (target.base) {
    case 'left-top':
      scaleX = (width + pointer.x - msPos.x) / loomObj.width;
      scaleY = (height + pointer.y - msPos.y) / loomObj.height;
      break;
    case 'right-bottom':
      scaleX = (width + msPos.x - pointer.x) / loomObj.width;
      scaleY = (height + msPos.y - pointer.y) / loomObj.height;
      break;
    case 'left-bottom':
      scaleX = (width + pointer.x - msPos.x) / loomObj.width;
      scaleY = (height + msPos.y - pointer.y) / loomObj.height;
      break;
    case 'right-top':
      scaleX = (width + msPos.x - pointer.x) / loomObj.width;
      scaleY = (height + pointer.y - msPos.y) / loomObj.height;
      break;
  }
  // let scaleX = target.base === 'left-top' ? (width + pointer.x - msPos.x) / loomObj.width : (width + msPos.x - pointer.x) / loomObj.width;
  // let scaleY = target.base === 'left-top' ? (height + pointer.y - msPos.y) / loomObj.height : (height + msPos.x - pointer.x) / loomObj.height;
  loomObj.set("scaleX", scaleX);
  loomObj.set("scaleY", scaleY);
  var t = originY + (pointer.y - msPos.y) / 2;
  var l = originX + (pointer.x - msPos.x) / 2;
  var newC = {
    x: (l - originX) * Math.cos(angle) - (t - originY) * Math.sin(angle) + originX,
    y: (l - originX) * Math.sin(angle) + (t - originY) * Math.cos(angle) + originY
  };
  loomObj.set("originX", newC.x);
  loomObj.set("originY", newC.y);
};

var rotateObject$1 = function rotateObject(target, loomObj, pos, defaultTransform, mousedownPos) {
  var _getDefaultParams = getDefaultParams(loomObj, pos, defaultTransform, mousedownPos),
    originX = _getDefaultParams.originX,
    originY = _getDefaultParams.originY,
    cachePos = _getDefaultParams.cachePos;
  if (!cache.startPos) {
    cache.startPos = mousedownPos;
  }
  var initAngle = Math.atan2(cache.startPos.y - originY, cache.startPos.x - originX);
  var currentAngle = Math.atan2(cachePos.y - originY, cachePos.x - originX);
  var rotate_angle = currentAngle - initAngle;
  // angle += rotate_angle
  loomObj.set("angle", loomObj.angle + rotate_angle);
  // this.startPos = pos;
  cache.startPos = cachePos;
  if (loomObj.angle * 180 / Math.PI < 0) {
    360 + loomObj.angle * 180 / Math.PI;
  } else {
    loomObj.angle * 180 / Math.PI;
  }
};

/**
 * class Point
 * 点坐标的计算
 * author fwt-1025
 */
var Point$1 = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);
    this.x = x;
    this.y = y;
  }
  _createClass(Point, [{
    key: "add",
    value: function add(num) {
      this.x += num;
      this.y += num;
      return this;
    }
  }, {
    key: "addApplyPos",
    value: function addApplyPos(_ref) {
      var x = _ref.x,
        y = _ref.y;
      this.x += x;
      this.y += y;
      return this;
    }
  }, {
    key: "del",
    value: function del(num) {
      this.x -= num;
      this.y -= num;
      return this;
    }
  }, {
    key: "delApplyPos",
    value: function delApplyPos(_ref2) {
      var x = _ref2.x,
        y = _ref2.y;
      this.x -= x;
      this.y -= y;
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(angle, origin) {
      /*
      * angle 弧度
      * origin 原点 基点
      * cos sin  0
      * -sin cos 0
      * 0    0   1
      */
      return {
        x: (this.x - origin.x) * Math.cos(angle) - (this.y - origin.y) * Math.sin(angle) + origin.x,
        y: (this.x - origin.x) * Math.sin(angle) + (this.y - origin.y) * Math.cos(angle) + origin.y
      };
      // this.x = (this.x - origin.x) * Math.cos(angle) - (this.y - origin.y) * Math.sin(angle) + origin.x
      // this.y = (this.x - origin.x) * Math.sin(angle) + (this.y - origin.y) * Math.cos(angle) + origin.y
      // return this
    }
  }]);
  return Point;
}();

var Rect = /*#__PURE__*/function (_DrawObject) {
  _inherits(Rect, _DrawObject);
  var _super = _createSuper(Rect);
  function Rect(options) {
    var _this;
    _classCallCheck(this, Rect);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "textX", void 0);
    _defineProperty(_assertThisInitialized(_this), "textY", void 0);
    _this.type = "Rect";
    return _this;
  }
  _createClass(Rect, [{
    key: "_render",
    value: function _render(ctx) {
      ctx.save();
      var x = -this.width * this.scaleX / 2,
        y = -this.height * this.scaleY / 2,
        w = this.width * this.scaleX,
        h = this.height * this.scaleY;
      ctx.beginPath();
      ctx.lineWidth = this.lineWidth / Math.abs(this.transformMatrix.a);
      ctx.strokeStyle = this.stroke;
      ctx.fillStyle = this.fill;
      ctx.rect(x, y, w, h);
      ctx.closePath();
      this.strokeOrFill(ctx);
      ctx.restore();
      this.matrix = ctx.getTransform();
    }
  }, {
    key: "setCoords",
    value: function setCoords() {
      var _this2 = this;
      var w = this.width * this.scaleX,
        h = this.height * this.scaleY,
        x = this.originX,
        y = this.originY;
      var objCenter = {
        x: this.originX,
        y: this.originY
      };
      var commonConfig = this.getCommonConfig();
      this.coords = [new Control(_objectSpread2({
        x: -w / 2,
        y: -h / 2,
        left: x - w / 2,
        top: y - h / 2,
        target: this,
        base: "right-bottom",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleAll$1
      }, commonConfig)), new Control(_objectSpread2({
        x: 0,
        y: -h / 2,
        left: x,
        top: y - h / 2,
        target: this,
        base: "center-bottom",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleY$1
      }, commonConfig)), new Control(_objectSpread2({
        x: w / 2,
        y: -h / 2,
        left: x + w / 2,
        top: y - h / 2,
        target: this,
        base: "left-bottom",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleAll$1
      }, commonConfig)), new Control(_objectSpread2({
        x: w / 2,
        y: 0,
        left: x + w / 2,
        top: y,
        target: this,
        base: "left-center",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleX$1
      }, commonConfig)), new Control(_objectSpread2({
        x: w / 2,
        y: h / 2,
        left: x + w / 2,
        top: y + h / 2,
        target: this,
        base: "left-top",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleAll$1
      }, commonConfig)), new Control(_objectSpread2({
        x: 0,
        y: h / 2,
        left: x,
        top: y + h / 2,
        target: this,
        base: "center-top",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleY$1
      }, commonConfig)), new Control(_objectSpread2({
        x: -w / 2,
        y: h / 2,
        left: x - w / 2,
        top: y + h / 2,
        target: this,
        base: "right-top",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleAll$1
      }, commonConfig)), new Control(_objectSpread2({
        x: -w / 2,
        y: 0,
        left: x - w / 2,
        top: y,
        target: this,
        base: "right-center",
        cursorHandler: scaleCursor$1,
        mousemoveHandler: calcScaleX$1
      }, commonConfig))];
      var coords = this.coords.map(function (item) {
        return item.getCoords();
      });
      var minX = Math.min.apply(Math, _toConsumableArray(coords.map(function (item) {
        return item.x;
      })));
      var minY = Math.min.apply(Math, _toConsumableArray(coords.map(function (item) {
        return item.y;
      })));
      this.textX = minX;
      this.textY = minY;
      if (this.rotate) {
        this.coords.push(new Control(_objectSpread2({
          left: x,
          top: minY - 40,
          target: this,
          base: "center-center",
          cursor: "crosshair",
          mousemoveHandler: rotateObject$1
        }, commonConfig)));
      }
      this.coords.forEach(function (item, index) {
        var pot = new Point$1(item.left, item.top);
        var _pot$rotate = pot.rotate(_this2.angle, objCenter),
          x = _pot$rotate.x,
          y = _pot$rotate.y;
        item.left = x;
        item.top = y;
      });
      this.points = [this.coords[0].getCoords(), this.coords[2].getCoords(), this.coords[4].getCoords(), this.coords[6].getCoords()];
    }
  }]);
  return Rect;
}(DrawObject);

var Polygon = /*#__PURE__*/function (_DrawObject) {
  _inherits(Polygon, _DrawObject);
  var _super = _createSuper(Polygon);
  function Polygon(options) {
    var _this;
    _classCallCheck(this, Polygon);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "centerControlPoints", []);
    _defineProperty(_assertThisInitialized(_this), "needCenterControl", true);
    _defineProperty(_assertThisInitialized(_this), "centerPointsStyle", 'square');
    _defineProperty(_assertThisInitialized(_this), "centerPointsSize", 10);
    _defineProperty(_assertThisInitialized(_this), "centerPointsStroke", '#f00');
    _defineProperty(_assertThisInitialized(_this), "centerPointsFill", '#fff');
    _defineProperty(_assertThisInitialized(_this), "needArrow", false);
    _defineProperty(_assertThisInitialized(_this), "textX", void 0);
    _defineProperty(_assertThisInitialized(_this), "textY", void 0);
    _this.type = 'Polygon';
    _this.setOptions(options);
    return _this;
  }
  _createClass(Polygon, [{
    key: "_render",
    value: function _render(ctx) {
      ctx.save();
      ctx.globalCompositeOperation = this.globalCompositeOperation || 'source-over';
      ctx.beginPath();
      ctx.strokeStyle = this.stroke || '#000';
      ctx.fillStyle = this.fill || '#000';
      this.points.forEach(function (item, index) {
        ctx[index ? 'lineTo' : 'moveTo'](item.x, item.y);
      });
      this.type === 'Line' && this.strokeOrFill(ctx);
      ctx.closePath();
      this.type === 'Polygon' && this.strokeOrFill(ctx);
      ctx.restore();
      this.needArrow && this.drawArrow(ctx, this.points[0].x, this.points[0].y, (this.points[0].x + this.points[1].x) / 2, (this.points[0].y + this.points[1].y) / 2);
      this.needCenterControl && this.renderCenterControl(ctx);
    }
  }, {
    key: "drawArrow",
    value: function drawArrow(ctx, ax, ay, bx, by) {
      ctx.save();
      ctx.beginPath();
      var drawArrow = function drawArrow(x1, y1, x2, y2) {
        var l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;
        var θ = arguments.length > 5 ? arguments[5] : undefined;
        // console.log('角度', θ);
        var a = Math.atan2(y2 - y1, x2 - x1);
        var x3 = x2 - l * Math.cos(a + θ * Math.PI / 180);
        var y3 = y2 - l * Math.sin(a + θ * Math.PI / 180);
        var x4 = x2 - l * Math.cos(a - θ * Math.PI / 180);
        var y4 = y2 - l * Math.sin(a - θ * Math.PI / 180);
        return [x3, y3, x4, y4];
      };
      var _drawArrow = drawArrow(ax, ay, bx, by, 15, 30),
        _drawArrow2 = _slicedToArray(_drawArrow, 4),
        x3 = _drawArrow2[0],
        y3 = _drawArrow2[1],
        x4 = _drawArrow2[2],
        y4 = _drawArrow2[3];
      // 
      // ctx.moveTo(ax, ay)
      // ctx.lineTo(bx, by)
      var _this$transformMatrix = this.transformMatrix;
        _this$transformMatrix.a;
        _this$transformMatrix.b;
        _this$transformMatrix.c;
        _this$transformMatrix.d;
        _this$transformMatrix.e;
        _this$transformMatrix.f;
      ctx.moveTo(x3, y3);
      ctx.lineTo(bx, by);
      ctx.lineTo(x4, y4);
      ctx.lineWidth = 5 / this.transformMatrix.a;
      ctx.strokeStyle = this.stroke;
      ctx.fillStyle = '#000';
      ctx.globalAlpha = 1;
      ctx.stroke();
      // ctx.fill()
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: "setCoords",
    value: function setCoords() {
      var _this2 = this;
      this.coords = this.points.map(function (item, index) {
        return new Control(_objectSpread2({
          left: item.x,
          top: item.y,
          target: _this2,
          cursor: "pointer",
          index: index,
          mousemoveHandler: _this2.editPolygon
        }, _this2.getCommonConfig()));
      });
    }
  }, {
    key: "renderCenterControl",
    value: function renderCenterControl(ctx) {
      var _this3 = this;
      this.centerControlPoints = this.points.map(function (p1, i) {
        return [p1, _this3.points[(i + 1) % _this3.points.length]];
      }).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          p1 = _ref2[0],
          p2 = _ref2[1];
        return {
          x: (p1.x + p2.x) / 2,
          y: (p1.y + p2.y) / 2
        };
      });
      this.type === 'Line' && this.centerControlPoints.pop();
      this.centerControlCoords = this.centerControlPoints.map(function (item, index) {
        return new Control({
          left: item.x,
          top: item.y,
          target: _this3,
          cursor: "copy",
          index: index,
          cornerStyle: _this3.centerPointsStyle,
          cornerSize: _this3.centerPointsSize,
          cornerBorderColor: _this3.centerPointsStroke,
          cornerColor: _this3.centerPointsFill,
          mousedownHandler: _this3.editPolygonCenter
        });
      });
    }
  }, {
    key: "editPolygon",
    value: function editPolygon(target, loomObj, pos) {
      target.left = pos.x;
      target.top = pos.y;
      loomObj.points[target.index] = target.getCoords();
    }
  }, {
    key: "editPolygonCenter",
    value: function editPolygonCenter(target, loomObj) {
      loomObj.points.splice(target.index + 1, 0, target.getCoords());
    }
  }]);
  return Polygon;
}(DrawObject);

var Line = /*#__PURE__*/function (_Polygon) {
  _inherits(Line, _Polygon);
  var _super = _createSuper(Line);
  function Line(options) {
    var _this;
    _classCallCheck(this, Line);
    _this = _super.call(this, options);
    _this.type = 'Line';
    _this.setOptions(options);
    return _this;
  }
  // _render(ctx) {
  //     ctx.save()
  //     ctx.beginPath()
  //     ctx.strokeStyle = this.stroke || '#000'
  //     ctx.fillStyle = this.fill || '#000'
  //     this.points.forEach((item, index) => {
  //         ctx[index ? 'lineTo' : 'moveTo'](item.x, item.y)
  //     })
  //     ctx.stroke()
  //     ctx.closePath()
  //     ctx.restore()
  //     this.needCenterControl && this.renderCenterControl(ctx)
  // }
  // setCoords() {
  //     this.coords = this.points.map((item, index) => {
  //         return new Control({
  //             left: item.x,
  //             top: item.y,
  //             target: this,
  //             cursor: "pointer",
  //             index,
  //             mousemoveHandler: editPolygon,
  //             ...this.getCommonConfig()
  //         })
  //     })
  // }
  // renderCenterControl() {
  //     this.centerControlPoints = this.points.map((p1, i) => [p1, this.points[(i + 1) % this.points.length]]).map(([p1, p2]) => ({
  //         x: (p1.x + p2.x) / 2,
  //         y: (p1.y + p2.y) / 2
  //     }))
  //     this.centerControlPoints = this.centerControlPoints.slice(0, this.centerControlPoints.length - 1)
  //     this.centerControlCoords = this.centerControlPoints.map((item, index) => {
  //         return new Control({
  //             left: item.x,
  //             top: item.y,
  //             target: this,
  //             cursor: "copy",
  //             index,
  //             mousedownHandler: editPolygonCenter
  //         })
  //     })
  // }
  _createClass(Line, [{
    key: "isPointInPath",
    value: function isPointInPath(pos) {
      var _this2 = this;
      var newPoints = this.points.map(function (p1, i) {
        return [p1, _this2.points[(i + 1) % _this2.points.length]];
      });
      for (var i = 0, len = newPoints.length; i < len; i++) {
        var p1 = newPoints[i][0];
        var p2 = newPoints[i][1];
        var l1 = Math.sqrt(Math.pow(pos.x - p1.x, 2) + Math.pow(pos.y - p1.y, 2));
        var l2 = Math.sqrt(Math.pow(pos.x - p2.x, 2) + Math.pow(pos.y - p2.y, 2));
        var l3 = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
        if (l2 + l1 - l3 < 0.5 / this.transformMatrix.a) {
          return true;
        }
      }
    }
  }]);
  return Line;
}(Polygon);

var Dot = /*#__PURE__*/function (_DrawObject) {
  _inherits(Dot, _DrawObject);
  var _super = _createSuper(Dot);
  function Dot(options) {
    var _this;
    _classCallCheck(this, Dot);
    _this = _super.call(this, options);
    _this.type = 'Dot';
    return _this;
  }
  _createClass(Dot, [{
    key: "_render",
    value: function _render(ctx) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, this.radius / this.transformMatrix.a, 0, 2 * Math.PI);
      ctx.strokeStyle = this.stroke;
      ctx.fillStyle = this.fill;
      ctx.closePath();
      this.strokeOrFill(ctx);
      ctx.restore();
    }
  }, {
    key: "setCoords",
    value: function setCoords() {
      this.coords = [new Control({
        left: this.originX,
        top: this.originY,
        target: this,
        cursor: 'pointer',
        mousemoveHandler: moveObject
      })];
    }
  }, {
    key: "isPointInPath",
    value: function isPointInPath(pos) {
      var radius = this.radius / this.transformMatrix.a;
      if (pos.x < this.originX + radius && pos.y < this.originY + radius && pos.x > this.originX - radius && pos.y > this.originY - radius) {
        return true;
      }
    }
  }]);
  return Dot;
}(DrawObject);

/**
 * 
 * Rect
 * 
 */
var Arrow = /*#__PURE__*/function (_DrawObject) {
  _inherits(Arrow, _DrawObject);
  var _super = _createSuper(Arrow);
  // start = []
  // end = []
  // points = []
  // declare arrow: [number, number]
  function Arrow(options) {
    var _this;
    _classCallCheck(this, Arrow);
    _this = _super.call(this, options);
    var points = options.points;
    _this.width = Math.abs(points[0].x - points[1].x);
    _this.height = Math.abs(points[0].y - points[1].y);
    _this.type = 'Arrow';
    return _this;
  }
  _createClass(Arrow, [{
    key: "_render",
    value: function _render(ctx) {
      var mat = ctx.getTransform();
      ctx.save();
      ctx.beginPath();
      var _this$points$ = this.points[0],
        ax = _this$points$.x,
        ay = _this$points$.y; //第一个点
      var _this$points$2 = this.points[1],
        bx = _this$points$2.x,
        by = _this$points$2.y; //二
      var drawArrow = function drawArrow(x1, y1, x2, y2) {
        var l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 50;
        var θ = arguments.length > 5 ? arguments[5] : undefined;
        var a = Math.atan2(y2 - y1, x2 - x1);
        var x3 = x2 - l * Math.cos(a + θ * Math.PI / 180);
        var y3 = y2 - l * Math.sin(a + θ * Math.PI / 180);
        var x4 = x2 - l * Math.cos(a - θ * Math.PI / 180);
        var y4 = y2 - l * Math.sin(a - θ * Math.PI / 180);
        return [x3, y3, x4, y4];
      };
      var _drawArrow = drawArrow(ax, ay, bx, by, 20, 30),
        _drawArrow2 = _slicedToArray(_drawArrow, 4),
        x3 = _drawArrow2[0],
        y3 = _drawArrow2[1],
        x4 = _drawArrow2[2],
        y4 = _drawArrow2[3];
      // 
      ctx.moveTo(ax, ay);
      ctx.lineTo(bx, by);
      ctx.moveTo(x3, y3);
      ctx.lineTo(bx, by);
      ctx.lineTo(x4, y4);
      ctx.lineWidth = this.lineWidth / mat.a;
      ctx.strokeStyle = this.stroke;
      ctx.globalAlpha = this.opacity;
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: "setCoords",
    value: function setCoords(ctx) {
      var w = this.width * this.scaleX,
        h = this.height * this.scaleY,
        x,
        y;
      if (this.points[0].x < this.points[1].x) {
        x = this.points[0].x + this.width / 2;
      } else {
        x = this.points[1].x + this.width / 2;
      }
      if (this.points[0].y < this.points[1].y) {
        y = this.points[0].y + this.height / 2;
      } else {
        y = this.points[1].y + this.height / 2;
      }
      var objCenter = {
        x: x,
        y: y
      };
      this.coords = [new Control({
        x: x - w / 2,
        y: y - h / 2,
        center: objCenter,
        target: this,
        base: 'right-bottom',
        // cursor: this.rotate ? 'pointer' : 'se-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleAll
      }), new Control({
        x: x,
        y: y - h / 2,
        center: objCenter,
        target: this,
        base: 'center-bottom',
        // cursor: this.rotate ? 'pointer' : 'n-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleY
      }), new Control({
        x: x + w / 2,
        y: y - h / 2,
        center: objCenter,
        target: this,
        base: 'left-bottom',
        // cursor: this.rotate ? 'pointer' : 'ne-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleAll
      }), new Control({
        x: x + w / 2,
        y: y,
        center: objCenter,
        target: this,
        base: 'left-center',
        // cursor: this.rotate ? 'pointer' : 'w-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleX
      }), new Control({
        x: x + w / 2,
        y: y + h / 2,
        center: objCenter,
        target: this,
        base: 'left-top',
        // cursor: this.rotate ? 'pointer' : 'se-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleAll
      }), new Control({
        x: x,
        y: y + h / 2,
        center: objCenter,
        target: this,
        base: 'center-top',
        // cursor: this.rotate ? 'pointer' : 'n-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleY
      }), new Control({
        x: x - w / 2,
        y: y + h / 2,
        center: objCenter,
        target: this,
        base: 'right-top',
        // cursor: this.rotate ? 'pointer' : 'ne-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleAll
      }), new Control({
        x: x - w / 2,
        y: y,
        center: objCenter,
        target: this,
        base: 'right-center',
        // cursor: this.rotate ? 'pointer' : 'w-resize',
        cursor: 'not-allowed'
        // mousemoveHandler: calcScaleX
      })];
      // if (this.rotate) {
      //     this.coords.push(
      //         new Control({
      //             x,
      //             y: (y - h / 2 - 40 / mat.a),
      //             center: objCenter,
      //             target: this,
      //             base: 'center-center',
      //             cursor: 'crosshair',
      //             mousemoveHandler: rotateObject
      //         })
      //     );
      // }
      if (this.isActive) {
        ctx.beginPath();
        this.coords.forEach(function (item, index) {
          ctx[index ? 'lineTo' : 'moveTo'](item.x, item.y);
        });
        ctx.closePath();
        ctx.stroke();
      }
    }
    // isPointInPath(e) {

    // }
  }]);
  return Arrow;
}(DrawObject);

var Ruler = /*#__PURE__*/function (_DrawObject) {
  _inherits(Ruler, _DrawObject);
  var _super = _createSuper(Ruler);
  function Ruler(options) {
    var _this;
    _classCallCheck(this, Ruler);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "xScales", []);
    // x轴的刻度
    _defineProperty(_assertThisInitialized(_this), "yScales", []);
    // y轴的刻度
    _defineProperty(_assertThisInitialized(_this), "coords", []);
    _defineProperty(_assertThisInitialized(_this), "fontSize", 12);
    _this.type = 'Ruler';
    _this.fontSize = options.fontSize;
    return _this;
  }
  _createClass(Ruler, [{
    key: "_render",
    value: function _render(ctx) {
      ctx.strokeStyle = this.stroke;
      ctx.fillStyle = this.stroke;
      var fontSize;
      var rulerWLength, rulerHLength;
      var baseStep;
      var fillTextStep;
      if (this.transformMatrix.a > 5) {
        rulerWLength = ctx.canvas.width;
        rulerHLength = ctx.canvas.height;
        baseStep = 1;
        fillTextStep = 10;
      } else if (this.transformMatrix.a < .6) {
        rulerWLength = ctx.canvas.width / 50;
        rulerHLength = ctx.canvas.height / 50;
        baseStep = 50;
        fillTextStep = 100;
      } else {
        rulerWLength = ctx.canvas.width / 5;
        rulerHLength = ctx.canvas.height / 5;
        baseStep = 5;
        fillTextStep = 50;
      }
      ctx.save();
      ctx.setTransform(this.transformMatrix.a, 0, 0, this.transformMatrix.a, this.transformMatrix.e, 0);
      // ctx.translate(this.transformMatrix.e, 0)
      fontSize = this.fontSize / this.transformMatrix.a;
      ctx.font = "bold ".concat(fontSize, "px Alibaba_PuHuiTi_Regular");
      for (var i = 0; i <= rulerWLength; i++) {
        ctx.beginPath();
        ctx.moveTo(i * baseStep, 0);
        if (i * baseStep % fillTextStep === 0) {
          ctx.lineTo(i * baseStep, 15 / this.transformMatrix.a);
          var text = ctx.measureText(i * baseStep);
          var w = text.width;
          ctx.fillText(i * baseStep, i * baseStep - w / 2, 30 / this.transformMatrix.a);
        } else {
          ctx.lineTo(i * baseStep, 5 / this.transformMatrix.a);
        }
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
      ctx.save();
      ctx.setTransform(this.transformMatrix.a, 0, 0, this.transformMatrix.a, 0, this.transformMatrix.f);
      fontSize = this.fontSize / this.transformMatrix.a;
      ctx.font = "bold ".concat(fontSize, "px Alibaba_PuHuiTi_Regular");
      for (var _i = 0; _i <= rulerHLength; _i++) {
        ctx.beginPath();
        ctx.moveTo(0, _i * baseStep);
        if (_i * baseStep % fillTextStep === 0) {
          ctx.lineTo(15 / this.transformMatrix.a, _i * baseStep);
          var _text = ctx.measureText(_i * baseStep);
          _text.width;
          // console.log(w)
          ctx.fillText(_i * baseStep, 20 / this.transformMatrix.a, _i * baseStep + 5 / this.transformMatrix.a);
        } else {
          ctx.lineTo(5 / this.transformMatrix.a, _i * baseStep);
        }
        ctx.stroke();
        ctx.closePath();
      }
      ctx.restore();
    }
  }]);
  return Ruler;
}(DrawObject);

var Text = /*#__PURE__*/function (_DrawObject) {
  _inherits(Text, _DrawObject);
  var _super = _createSuper(Text);
  function Text(options) {
    var _this;
    _classCallCheck(this, Text);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "fillText", true);
    _defineProperty(_assertThisInitialized(_this), "relationShipId", '');
    _defineProperty(_assertThisInitialized(_this), "fontSize", 20);
    _defineProperty(_assertThisInitialized(_this), "parent", null);
    _defineProperty(_assertThisInitialized(_this), "textX", 0);
    _defineProperty(_assertThisInitialized(_this), "textY", 0);
    _defineProperty(_assertThisInitialized(_this), "text", '');
    _this.type = 'Text';
    _this.setOptions(options);
    return _this;
  }
  _createClass(Text, [{
    key: "_render",
    value: function _render(ctx) {
      var _this$parent, _this$parent2;
      // console.log(this.parent.coords[0].x)
      ctx.save();
      ctx.translate(((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.textX) || this.textX, ((_this$parent2 = this.parent) === null || _this$parent2 === void 0 ? void 0 : _this$parent2.textY) || this.textY);
      // ctx.rotate(this.parent.angle)
      var fontSize = this.fontSize / this.transformMatrix.a;
      ctx.font = "bold ".concat(fontSize, "px Alibaba_PuHuiTi_Regular");
      ctx.beginPath();
      ctx.fillStyle = this.fill;
      this.fillText && ctx.fillText(this.text, 0, -5 / this.transformMatrix.a);
      ctx.closePath();
      ctx.restore();
    }
  }, {
    key: "isPointInPath",
    value: function isPointInPath() {}
  }]);
  return Text;
}(DrawObject);

// import { editPolygon, editPolygonCenter } from '../utils/editObject';
var Mask = /*#__PURE__*/function (_DrawObject) {
  _inherits(Mask, _DrawObject);
  var _super = _createSuper(Mask);
  function Mask(options) {
    var _this;
    _classCallCheck(this, Mask);
    _this = _super.call(this, options);
    _this.imgBitMap = options.imgBitMap;
    _this.globalCompositeOperation = options.globalCompositeOperation;
    return _this;
  }
  _createClass(Mask, [{
    key: "_render",
    value: function _render(ctx) {
      // console.log(this)
      ctx.globalCompositeOperation = this.globalCompositeOperation || 'source-over';
      ctx.save();
      ctx.strokeStyle = this.stroke || '#000';
      ctx.fillStyle = this.fill || '#000';
      ctx.drawImage(this.imgBitMap, this.x, this.y, this.width, this.height);
      ctx.restore();
    }
  }, {
    key: "setCoords",
    value: function setCoords() {
      var _this2 = this;
      this.coords = this.points.map(function (item, index) {
        return new Control(_objectSpread2({
          left: item.x,
          top: item.y,
          target: _this2,
          cursor: "pointer",
          index: index
        }, _this2.getCommonConfig()));
      });
    }
  }]);
  return Mask;
}(DrawObject);

var Image$1 = /*#__PURE__*/function (_DrawObject) {
  _inherits(Image, _DrawObject);
  var _super = _createSuper(Image);
  function Image(options) {
    _classCallCheck(this, Image);
    return _super.call(this, options); // this.img = options.img
    // this.imgOptions = options.imgOptions || [] // []
  }
  _createClass(Image, [{
    key: "_render",
    value: function _render(ctx) {
      ctx.beginPath();
      if (!this.imgOptions.length) {
        console.error("你需要提供imgOptions参数，参数个数分别为2个 4个 8个，但是程序收到了0个");
        return;
      }

      // console.log(this.imgUrl)
      // this.imgUrl.onload = () => {
      if (this.imgOptions.length === 2) {
        var _this$imgOptions = _slicedToArray(this.imgOptions, 2),
          sx = _this$imgOptions[0],
          sy = _this$imgOptions[1];
        ctx.drawImage(this.img, sx, sy);
      } else if (this.imgOptions.length === 4) {
        var _this$imgOptions2 = _slicedToArray(this.imgOptions, 4),
          _sx = _this$imgOptions2[0],
          _sy = _this$imgOptions2[1],
          sw = _this$imgOptions2[2],
          sh = _this$imgOptions2[3];
        ctx.drawImage(this.img, _sx, _sy, sw, sh);
      } else if (this.imgOptions.length === 8) {
        var _this$imgOptions3 = _slicedToArray(this.imgOptions, 8),
          _sx2 = _this$imgOptions3[0],
          _sy2 = _this$imgOptions3[1],
          _sw = _this$imgOptions3[2],
          _sh = _this$imgOptions3[3],
          dx = _this$imgOptions3[4],
          dy = _this$imgOptions3[5],
          dw = _this$imgOptions3[6],
          dh = _this$imgOptions3[7];
        ctx.drawImage(this.img, _sx2, _sy2, _sw, _sh, dx, dy, dw, dh);
      }
      // }

      ctx.closePath();
    }
  }, {
    key: "setCoords",
    value: function setCoords() {
      var _this = this;
      var sw, sh;
      if (this.imgOptions.length > 2) {
        var _this$imgOptions4 = _slicedToArray(this.imgOptions, 4);
        _this$imgOptions4[0];
        _this$imgOptions4[1];
        sw = _this$imgOptions4[2];
        sh = _this$imgOptions4[3];
      }
      var w = sw * this.scaleX,
        h = sh * this.scaleY,
        x = this.originX,
        y = this.originY;
      var objCenter = {
        x: this.originX,
        y: this.originY
      };
      var commonConfig = this.getCommonConfig();
      this.coords = [new Control(_objectSpread2({
        x: -w / 2,
        y: -h / 2,
        left: x - w / 2,
        top: y - h / 2,
        target: this,
        base: "right-bottom",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleAll
      }, commonConfig)), new Control(_objectSpread2({
        x: 0,
        y: -h / 2,
        left: x,
        top: y - h / 2,
        target: this,
        base: "center-bottom",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleY
      }, commonConfig)), new Control(_objectSpread2({
        x: w / 2,
        y: -h / 2,
        left: x + w / 2,
        top: y - h / 2,
        target: this,
        base: "left-bottom",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleAll
      }, commonConfig)), new Control(_objectSpread2({
        x: w / 2,
        y: 0,
        left: x + w / 2,
        top: y,
        target: this,
        base: "left-center",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleX
      }, commonConfig)), new Control(_objectSpread2({
        x: w / 2,
        y: h / 2,
        left: x + w / 2,
        top: y + h / 2,
        target: this,
        base: "left-top",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleAll
      }, commonConfig)), new Control(_objectSpread2({
        x: 0,
        y: h / 2,
        left: x,
        top: y + h / 2,
        target: this,
        base: "center-top",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleY
      }, commonConfig)), new Control(_objectSpread2({
        x: -w / 2,
        y: h / 2,
        left: x - w / 2,
        top: y + h / 2,
        target: this,
        base: "right-top",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleAll
      }, commonConfig)), new Control(_objectSpread2({
        x: -w / 2,
        y: 0,
        left: x - w / 2,
        top: y,
        target: this,
        base: "right-center",
        cursorHandler: scaleCursor,
        mousemoveHandler: calcScaleX
      }, commonConfig))];
      var coords = this.coords.map(function (item) {
        return item.getCoords();
      });
      var minX = Math.min.apply(Math, _toConsumableArray(coords.map(function (item) {
        return item.x;
      })));
      var minY = Math.min.apply(Math, _toConsumableArray(coords.map(function (item) {
        return item.y;
      })));
      this.textX = minX;
      this.textY = minY;
      if (this.rotate) {
        this.coords.push(new Control(_objectSpread2({
          left: x,
          top: minY - 40,
          target: this,
          base: "center-center",
          cursor: "crosshair",
          mousemoveHandler: rotateObject
        }, commonConfig)));
      }
      this.coords.forEach(function (item, index) {
        var pot = new Point(item.left, item.top);
        var _pot$rotate = pot.rotate(_this.angle, objCenter),
          x = _pot$rotate.x,
          y = _pot$rotate.y;
        item.left = x;
        item.top = y;
      });
      this.points = [this.coords[0].getCoords(), this.coords[2].getCoords(), this.coords[4].getCoords(), this.coords[6].getCoords()];
    }
  }]);
  return Image;
}(DrawObject);

var CrosshairLine = /*#__PURE__*/function (_DrawObject) {
  _inherits(CrosshairLine, _DrawObject);
  var _super = _createSuper(CrosshairLine);
  function CrosshairLine(options) {
    var _this;
    _classCallCheck(this, CrosshairLine);
    _this = _super.call(this, options);
    _this.type = 'Crosshairline';
    return _this;
  }
  _createClass(CrosshairLine, [{
    key: "_render",
    value: function _render(ctx) {
      var x = this.points.x * this.transformMatrix.a + this.transformMatrix.e;
      var y = this.points.y * this.transformMatrix.a + this.transformMatrix.f;
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.lineWidth = 1;
      ctx.strokeStyle = this.stroke;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ctx.canvas.height);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      ctx.save();
      ctx.lineWidth = 1;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.strokeStyle = this.stroke;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ctx.canvas.width, y);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
      this.drawXScale(ctx);
    }
  }, {
    key: "drawXScale",
    value: function drawXScale(ctx) {
      var baseStep, fillTextStep;
      if (this.transformMatrix.a > 5) {
        ctx.canvas.width;
        ctx.canvas.height;
        baseStep = 1;
        fillTextStep = 10;
      } else if (this.transformMatrix.a < .6) {
        ctx.canvas.width;
        ctx.canvas.height;
        baseStep = 1;
        fillTextStep = 100;
      } else {
        ctx.canvas.width;
        ctx.canvas.height;
        baseStep = 1;
        fillTextStep = 50;
      }
      var x = this.points.x * this.transformMatrix.a + this.transformMatrix.e;
      var y = this.points.y * this.transformMatrix.a + this.transformMatrix.f;
      ctx.save();
      ctx.resetTransform();
      ctx.lineWidth = 1;
      // console.log(x, y)
      ctx.height - y;
      ctx.width - x;
      // ctx.moveTo(x - 1, y)
      // ctx.lineTo(x - 1, y - 10)
      // ctx.stroke()
      // ctx.moveTo(x - 10, y)
      // ctx.lineTo(x - 10, y - 10)
      // ctx.stroke()
      var drawLongLine = function drawLongLine(i) {
        if (i % fillTextStep === 0) {
          ctx.moveTo(i, y);
          ctx.lineTo(i, y - 15);
          var text = ctx.measureText(i);
          text.width;
          ctx.fillText(x - i, i, y - 10);
        } else if (i % baseStep === 0) {
          ctx.moveTo(i, y);
          ctx.lineTo(i, y - 5);
        }
      };
      for (var i = 0; i <= x; i += baseStep) {
        ctx.beginPath();
        ctx.strokeStyle = '#0f0';
        // ctx.lineTo(i, y - 10)
        drawLongLine(i);
        ctx.closePath();
        ctx.stroke();
      }
      // for(let i = x; i <= ctx.canvas.width; i+=baseStep) {
      //     ctx.beginPath()
      //     ctx.strokeStyle = '#0f0'
      //     ctx.moveTo(i, y)
      //     // ctx.lineTo(i, y - 10)
      //     drawLongLine(i)
      //     ctx.closePath()
      //     ctx.stroke()
      // }

      // for(let i = y; i >= 0; i-= baseStep) {
      //     ctx.beginPath()
      //     ctx.strokeStyle = '#0f0'
      //     ctx.moveTo(x, y)
      //     ctx.lineTo(x + 10, y)
      //     ctx.closePath()
      //     ctx.stroke()
      // }
      // for(let i = x; i <= ctx.canvas.width; i+=baseStep) {
      //     ctx.beginPath()
      //     ctx.strokeStyle = '#0f0'
      //     ctx.moveTo(i, y)
      //     ctx.lineTo(i, y - 10)
      //     ctx.closePath()
      //     ctx.stroke()
      // }
      ctx.restore();
    }
  }]);
  return CrosshairLine;
}(DrawObject);

export { Arrow, Canvas, Image$1 as CanvasImage, Control, CrosshairLine, Dot, DrawObject, Line, Mask, Matrix, Polygon, Rect, Ruler, Text };
