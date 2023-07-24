### LOOM

> canvas annotation

- Quick start
```
    import Canvas from 'loom'
    let canvas = new Canvas(
        el: document.querySelector('#c'),
        { // options
            width: 1600, // canvas width
            height: 700, // canvas height
            preventDefault: true, prevent right click
            selection: true, // can or not renderTop
            skipFindTarget: true // skip find target
        }
    )
    c.setBackground('Your Image Url') // set background
    canvas.on('img:load', () => {
        // do anything
    })
```

> Now you hava a `1600 * 700` canvas and set a background image for it.

- How to draw other shape(Rect、Polygon、Line、Point、and so on.)

  - For example --- Rect
  ```
    import { Rect } from 'loom'
    let rect = new Rect({
        left: 300,
        top: 300,
        width: 100,
        height: 100,
        stroke: '#000',
        opacity: 0.5
    })
    canvas.add(rect)

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

- methods

| name | description| parameter |
| :-----| :-----| :----------|
| setBackground | set canvas background | Image\|Video\|Canvas\|bitmap
| getPointer | Obtain the coordinates of the mouse on the canvas | null
| add | Add elements to object list | loomObject |
| remove | remove elements from object list | loomObject |
| setActiveObject | set the current object to active | loomObject|
| setCursor | set the cursor of canvas | css cursor |
| resetActive | Deactivate all objects | null
| toObjects | get all elements on the canvas | null
| requestRenderAll | clear all Objects on the canvas, draw all objects on the canvas | null

- eventListener

| name | description | callback |
| :-----| :----- | :-----|
| mouse:down | mouse down event | 
| mouse:move |
| mouse:wheel|
| mouse:up |
| after:render |