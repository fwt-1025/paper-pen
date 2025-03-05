### paper-pen.js

> canvas、 annotation、annotate、Rect、Polygon、Line、Dot、Text、Matrix.

- Quick start

> npm i paper-pen --save

> `<script src='https://unpkg.com/paper-pen@0.0.5/dist/paper-pen.esm.min.js'></script>`

[online example](https://fwt-1025.github.io/paper-pen/test/)

- features (待实现)
    - mask 超像素标注
    - group 编组
    - text editor

- demo
```js
    //demo.html
    <canvas id='c'></canvas>
    // demo.js
    import { Canvas } from 'paper-pen'
    let paperPen = new Canvas(
        '#c', // id 、class string (#c, .c)| HTMLCanvasElement
        { // options
            width: 1600, // canvas width
            height: 700, // canvas height
            preventDefault: true, // prevent right click
            selection: true, // can or not renderTop
            skipFindTarget: false // skip find target， default false
        }
    )
    paperPen.setBackground('Your Image Url') // set background
    paperPen.on('img:load', () => {
        // do anything
    })
```


> Now you hava a `1600 * 700` canvas and set a background image for it.

- 是否开启滚轮缩放 (Whether to enable wheel scaling)

> `wheel: {scale: true}`

```js
    import { Canvas } from 'paper-pen'
    let canvas = new Canvas({
        '#c',
        {
            wheel: {
                scale: true, // 开启此项，会使滚轮支持画布缩放
                scroll: true, // 开启此项，会使鼠标滚轮在画布中禁用滚动条
            }
        }
    })

```

- 是否开启鼠标右键拖动画布(Do you want to enable the right mouse button to drag the canvas)

> `rightMove: true`

```js
import { Canvas } from 'paper-pen'
    let canvas = new Canvas({
        '#c',
        {
            rightMove: true
        }
    })
```

- How to draw other shape(Rect、Polygon、Line、Point、and so on.)

  - For example --- Rect
  ```js
    import { Rect, Polygon } from 'paper-pen'
    let rect = new Rect({
        left: 300,
        top: 300,
        width: 100,
        height: 100,
        stroke: '#000',
        opacity: 0.5
    })
    paperPen.add(rect)

    let poly = new Polygon({
        points: [{x: 100, y: 100}, {x: 200, y:100}, {x:150, y: 350}],
        stroke: '#0f0',
        opacity: .5,
        fill: '#00f',
        lineWidth: 5
    })
    paperPen.add(poly)
  ```
  > Now you get a Rect

  this Library provide (Rect、Polygon、Line、Point、CrossLine、Text、Ruler、Arrow), Of course you can custom other Shapes by this Library.

#### API

- class
> need to call with 'new' `new Rect()` `new Line()`...

| name | description |
| :--------| :------|
| Canvas | Canvas Instance
| Rect | draw Rectangle, Instance |
| Polygon | draw Polygon, Instance |
| Point | draw Point, Instance |
| Line | draw Line, Instance |
| CrossLine | draw CrossLine, Instance |
| Text | draw Text, Instance |
| Ruler | draw Ruler, Instance |
| Arrow | draw Arrow, Instance |
| Matrix | Matrix transform |


- Canvas properties

| name | type | description |
| :----- | :------| :------ |
| width | number | canvas width |
| height | number | canvas height |
| skipFindTarget | boolean | skip find element
| preventDefault | boolean | prevent right click |
| selection | boolean | can or not renderTop
| transformMatrix | object | matrix {a,b,c,d,e,f}
| _objects | array | [shape, shape]
| imageFillMode | string | 'contain'、'cover',针对backgroundImage |
| wheel | object| 鼠标滚轮相关 |
| wheel.scale | boolean | 是否开启滚轮缩放，default false |
| wheel.scroll | boolean | 是否缩放时禁用浏览器滚动条 default false |
| wheel.max | number | 缩放最大范围 |
| wheel.min | number | 缩放最小范围 |
| rightMove | boolean | 右键移动画布 default false |

- shape common properties

| name | type | description |
| :----- | :------| :------ |
| stroke | string | canvas strokeStyle |
| fill | string | canvas fillStyle |
| lineWidth | number | lineWidth |
| opacity | number | 0-1 globalAlpha |
| cornerSize | number | 
| cornerStyle | string | 'square | circle'
| cornerBorderColor | string | color
| cornerColor | string | 
| cornerOpacity | number | 0 - 1 |
| lockMove | boolean |
| displayGraph | boolean | 用来决定是否显示当前图形default true |
| needControl | boolean | 是否显示控制点 default true |

- shape common methods

| name | type | description |
| :----- | :------| :------ |
| getBoundingBox |  | 获取包围盒 |
| getCommonConfig | | 获取控制点默认配置 |

- rect properties

| name | type | description |
| :----- | :------| :------ |
| left | number |  |
| top | number |  |
| width | number | width |
| height | number | height |

-polygon properties

| name | type | description |
| :----- | :------| :------ |
| points | Array<{x: number, y: number}> |  |
| needArrow | boolean | 是否需要起始箭头 |
| needCenterControl | boolean | 是否需要线段中点 |
| centerPointsStyle | string | 'square'\| 'circle' 中点样式 |
| centerPointsSize | number | 中点大小 |
| centerPointsStroke | string | 中点描边颜色 |
| centerPointsFill | string | 中点填充颜色 |

- instance methods

| name | description| parameter | return |
| :-----| :-----| :----------| :--------- |
| setBackground | set canvas background | imgUrl\|Image\|Video\|Canvas\|bitmap | 
| getPointer | Obtain the coordinates of the mouse on the canvas | null | {x number,  y:number}
| add | Add elements to object list | DrawObject | |
| remove | remove elements from object list | DrawObject | |
| setActiveObject | set the current object to active | DrawObject| |
| setCursor | set the cursor of canvas | css cursor | |
| resetActive | Deactivate all objects | null| |
| toJSON | get all elements on the canvas | null | [{},{}] |
| requestRenderAll | clear all Objects on the canvas, draw all objects on the canvas | null |
| toDataUrl | 将画布转换为图片（Convert Canvas to Pictures）| null | {imgData, imgUrl}
| toBitMap | 将画布转换为单通道位图（Convert the canvas to a single channel bitmap）| [{r:number,g: number,b:number,a?:number},...]\|null | new Promise (ImageBitmap) 不传参数，默认转为二值图（黑白）
| off | 卸载指定事件 | (事件名称，回调函数) | |
| offAll | 卸载监听事件， 不传参，卸载所有实例监听事件 | 事件名称，如：'mouse:down',将会卸载所有的mouse:down事件 | |

- eventListener

| name | description | callback |
| :-----| :----- | :-----|
| mouse:down | 鼠标按下事件 | 
| mouse:move | 鼠标移动事件 |
| mouse:wheel| 鼠标滚轮事件 |
| mouse:up | 鼠标抬起事件 |
| img:load | 当背景图是在线地址时，等图片加载完成后的回调  |
| render:before | 画布元素渲染前 |
| render:after | 画布元素渲染后 |
| obj:add | 元素被添加到画布后 |
| obj:remove | 元素从画布中删除后 |
| obj:edit | 元素被编辑后 |
| obj:move | 元素被移动后 |

```js
    // paper-pen为开发者提供了mouse:down 、mouse:move、mouse:up、img:load、after:render事件回调。
    paperPen.on('mouse:down', opt => {
        let pos = paperPen.getPointer(opt) // 获取鼠标按下的点映射到当前画布的真实坐标位置。
        console.log(pos)
        // 您能在此处做想要做的业务。
    })
    paperPen.off('mouse:down') // 此方法会去掉画布上所有的mouse:down事件, 最好指定第二个参数来删除对应的事件。
    paperPen.on('mouse:down', handleMouseDown)
    paperPen.off('mouse:down', handleMouseDown)
```

- Matrix， Support chain operation（支持链式操作）

| name | decription | params | type
| :----- | :---- | :------ | :----- |
| translate | translate matrix | x , y | number
| scale | Multiples corresponding to x-axis and y-axis scaling | x, y | number
| scaleU | scale Matrix | scaler | number
| rotate | rotate matrix | radian| number
| transform | transform matrix | a,b,c,d,e,f | number
| applyToPoint | Apply the current matrix to point | x, y | number

```js
    import { Matrix } from 'paper-pen'
    let mat = new Matrix() /*
        默认生成单位矩阵
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    */
    mat.translate(10, 10) // (1, 0, 0, 1, 10, 10) 返回新的矩阵
    mat.translate(100, 100).scale(1.5, 2) // 这里的换算都是用矩阵的叉乘。
```

