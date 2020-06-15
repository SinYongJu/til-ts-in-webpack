import { setStyles,querySelect, Style } from "./util/index";
// app context
const body = querySelect("body")
const appCtx = querySelect("#app")
const deleteButton = querySelect("#btn_delete")
const startButton = querySelect("#btn_start")
const initButton = querySelect("#btn_init")



const APP_STYLE:Style = {
  position: 'relative',
  width: '800px',
  height: '500px',
  margin: '20px',
  backgroundColor: '#fff'
}
const BODY_STYLE:Style = {
  backgroundColor: '#eee',
  margin:'0',
  padding:'0'
}

const RECT_STYLE:Style = {
  position: 'absolute',
  backgroundColor: 'red',
  margin:'0',
  padding:'0',
  width:'50px',
  height:'50px'
}
let moveId:NodeJS.Timeout=null;
const appWidth = parseInt(APP_STYLE.width.split('px')[0])
const appHeight = parseInt(APP_STYLE.height.split('px')[0])

interface Poistion {
  x:number,
  y:number
}

interface Box {
  el : HTMLElement,
  dx : number 
  dy : number
  position : Poistion
}

class Rect {
  rects : Array<Box> =[]
  width : number
  height : number
  constructor(width:number,height:number){
    this.width = width
    this.height = height
  }
  createRect ({x, y}:Poistion) {
    let div:HTMLDivElement = document.createElement('div')
    setStyles(div,RECT_STYLE)
    div.style.top = x +"px"
    div.style.left = y +"px"
    this.rects.push({el : div, position :{x,y}, dx :1, dy:1})
  }
  appendRect () {
    this.rects.forEach(rect =>{
      appCtx.appendChild(rect.el)
    })
  }
  update(){
    this.rects.forEach(rect =>{
      rect.position.x +=rect.dx
      rect.position.y +=rect.dy

      
      if(rect.position.x < 0 || rect.position.x > this.width - 50){
        rect.dx = -rect.dx
      }
      if(rect.position.y < 0 || rect.position.y > this.height - 50){
        rect.dy = -rect.dy
      }
      

      setStyles(rect.el,{left : rect.position.x +'px', top: rect.position.y +'px'})
    })
  }
}


const move = (callback:Function,time:number) => {
  return () => {
    if(moveId === null) moveId = setInterval(()=>{
      // 움직임
      callback()
    },time)
  }
}

const deleteInterval=(event:Event) => {
  if(moveId !== null) {
    clearInterval(moveId)
    moveId = null
  }  
}

function init():void{
  setStyles(body, BODY_STYLE)
  setStyles(appCtx, APP_STYLE)
  let boxes = new Rect(appWidth,appHeight)
  boxes.createRect({ x:0,y:0})
  boxes.appendRect()
  startButton.addEventListener('click',move(boxes.update.bind(boxes),60/1000))
  deleteButton.addEventListener('click',deleteInterval)
  // initButton.addEventListener('click',deleteInterval)
}

init()

