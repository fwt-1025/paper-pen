### paper-pen.js

> canvas、 annotation、annotate、Rect、Polygon、Matrix.

- Quick start

> npm i paper-pen --save

> `<script src='https://unpkg.com/paper-pen@0.0.5/dist/paper-pen.esm.min.js'></script>`

[online example](https://fwt-1025.github.io/paper-pen/test/)

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
            skipFindTarget: false // skip find target default false
        }
    )
    paperPen.setBackground('Your Image Url') // set background
    paperPen.on('img:load', () => {
        // do anything
    })
```


> Now you hava a `1600 * 700` canvas and set a background image for it.

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

- methods

| name | description| parameter |
| :-----| :-----| :----------|
| setBackground | set canvas background | imgUrl\|Image\|Video\|Canvas\|bitmap
| getPointer | Obtain the coordinates of the mouse on the canvas | null
| add | Add elements to object list | DrawObject |
| remove | remove elements from object list | DrawObject |
| setActiveObject | set the current object to active | DrawObject|
| setCursor | set the cursor of canvas | css cursor |
| resetActive | Deactivate all objects | null
| toObjects | get all elements on the canvas | null
| requestRenderAll | clear all Objects on the canvas, draw all objects on the canvas | null

- eventListener

| name | description | callback |
| :-----| :----- | :-----|
| mouse:down | mouse down event | 
| mouse:move | mouse move event |
| mouse:wheel| mouse wheel event |
| mouse:up | mouse up event |
| img:load | When the background image is an online link, it is necessary to ensure that the image has been loaded completely  |
| render:before | before render |
| render:after | render after |
| obj:add | Object has been added |
| obj:remove | the object has been remove |

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