import { setStyles,toPixel,Style } from "./util/index";


interface Directions {
  dx :number,
  dy :number
}

interface Poistion {
  x:number,
  y:number
}

interface Box {
  el : HTMLElement,
  width :number
  d : Directions
  position : Poistion
}
interface RectSpec {
    ctx : HTMLElement
    width : number
    height : number
    boxWidth :number
}
const RECT_STYLE:Style = {
    position: 'absolute',
    backgroundColor: 'red',
    margin:'0',
    padding:'0',
}
const DIRECTIONS = [
    {
      dx : 1,
      dy : 1
    },
    {
      dx : -1,
      dy : 1
    },
    {
      dx : -1,
      dy : -1
    },
    {
      dx : 1,
      dy : -1
    },
  ]
export default class Rect implements RectSpec{
  rects : Array<Box> =[]
  width : number
  height : number
  boxWidth :number
  ctx : HTMLElement
  constructor({
    ctx,
    width,
    height,
    boxWidth,
  }:RectSpec){
    this.width = width
    this.height = height
    this.boxWidth = boxWidth
    this.ctx = ctx
  }
  setWidth(width:number){
    this.width = width
  }
  setHeight(height:number){
    this.height = height
  }
  setBoxWidth(boxWidth:number){
    this.boxWidth = boxWidth
  }
  createRect ({x, y}:Poistion,{dx, dy}:Directions  ) {
  let div:HTMLDivElement = document.createElement('div')
  setStyles(div,{
      ...RECT_STYLE,
      top: toPixel(x),
      left: toPixel(y),
      width: toPixel(this.boxWidth),
      height: toPixel(this.boxWidth)
  })
  this.rects.push({
    el : div, 
    width : this.boxWidth,
    position : {x,y}, 
    d: {dx, dy}
  })
}
  appendRect () {
    this.rects.forEach((rect:Box) =>{
      this.ctx.appendChild(rect.el)
    })
  }
  update(){
    this.rects.forEach((rect:Box) =>{
      let d = rect.d
      rect.position.x += d.dx
      rect.position.y += d.dy
      if(rect.position.x < 0 || rect.position.x > this.width - this.boxWidth){
        rect.d.dx = -d.dx
      }
      if(rect.position.y < 0 || rect.position.y > this.height - this.boxWidth){
        rect.d.dy = -d.dy
      }
      setStyles(rect.el,{
        left : toPixel(rect.position.x), 
        top: toPixel(rect.position.y),
      })
    })
  }
  manipulate(){
    if(this.rects.length > 0){
      let tmp = [...this.rects]
      this.delete()
      tmp.forEach(rect => {
          let  {position} = rect
          let x = position.x
          let y = position.y
          this.createRect({x,y},DIRECTIONS[0])
          this.createRect({x,y},DIRECTIONS[1])
          this.createRect({x,y},DIRECTIONS[2])
          this.createRect({x,y},DIRECTIONS[3])
        })
      this.boxWidth = this.boxWidth/2
      console.log(this)
      this.appendRect()
      this.update()
    }
  }
  delete(){
    if(this.rects.length < 1) return
    this.rects.forEach((rect:Box) =>{
      this.ctx.removeChild(rect.el)
    })
    this.rects = [];
  }
}