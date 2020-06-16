import { setStyles,querySelect,toPixel, Style } from "./util/index";
import Rect from "./rect";
// constants
const SPEED = 50/1000
const APP_WIDTH = 800
const APP_HEIGHT = 500
const APP_MARGIN = 20
const BOX_INIT_WIDTH = 50
// els
const body = querySelect("body")
const appCtx = querySelect("#app")
const deleteButton = querySelect("#btn_delete")
const startButton = querySelect("#btn_start")
const initButton = querySelect("#btn_init")
const btnManipulate = querySelect("#btn_manipulate")

const INIT_OBJ = {
  ctx : appCtx,
  width: APP_WIDTH,
  height: APP_HEIGHT,
  boxWidth: BOX_INIT_WIDTH
}

const APP_STYLE:Style = {
  position: 'relative',
  width: toPixel(APP_WIDTH),
  height: toPixel(APP_HEIGHT),
  margin: toPixel(APP_MARGIN),
  backgroundColor: '#fff'
}
const BODY_STYLE:Style = {
  backgroundColor: '#eee',
  margin:'0',
  padding:'0'
} 
// animate 기능

let moveId:NodeJS.Timeout=null;
const move = (callback:Function,time:number) => {
  return () => {
    if(moveId === null) moveId = setInterval(()=>{
      // 움직임
      callback()
    },time)
  }
}
const deleteInterval=() => {
  if(moveId !== null) {
    clearInterval(moveId)
    moveId = null
  }  
}

const init = (boxes: Rect) => {
  deleteInterval()
  boxes.delete()
  boxes.setBoxWidth(BOX_INIT_WIDTH)
  boxes.setHeight(APP_HEIGHT)
  boxes.setWidth(APP_WIDTH)
  boxes.createRect({ x:0,y:0},{ dx:1,dy:1})
  boxes.appendRect()
}


function main():void{
  setStyles(body, BODY_STYLE)
  setStyles(appCtx, APP_STYLE)
  let boxes= new Rect({...INIT_OBJ})
  boxes.createRect({ x:0,y:0},{ dx:1,dy:1})
  boxes.appendRect()

  startButton.addEventListener('click',move(boxes.update.bind(boxes),SPEED))
  deleteButton.addEventListener('click',deleteInterval)
  initButton.addEventListener('click',init.bind(null,boxes))
  btnManipulate.addEventListener('click',boxes.manipulate.bind(boxes))
}

main()

