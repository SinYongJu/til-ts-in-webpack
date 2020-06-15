import { setStyles,querySelect, Style } from "./util/index";
// app context
const body = querySelect("body")
const appCtx = querySelect("#app")
const deleteButton = querySelect("#btn_delete")
const startButton = querySelect("#btn_start")
const initButton = querySelect("#btn_init")

const APP_STYLE:Style = {
  width: '500px',
  height: '500px',
  backgroundColor: '#fff'
}
const BODY_STYLE:Style = {
  backgroundColor: '#eee',
  margin:'0',
  padding:'0'
}

const RECT_STYLE:Style = {
  backgroundColor: '#red',
  margin:'0',
  padding:'0',
  width:'50px',
  height:'50px'
}


const createRect = (x:number,y:number) => {
  let div:HTMLDivElement = document.createElement('div')
  setStyles(div,RECT_STYLE)
  x&&(div.style.top = x +"px")
  y&&(div.style.left = y +"px")
}





function move(time:number){
  return () => {
    console.log(time)
    if(moveId === null) moveId = setInterval(()=>{
      console.log('여기')
    },time)
  }
}

let moveId:NodeJS.Timeout=null;

const deleteInterval=(event:Event) => {
  if(moveId !== null) {
    clearInterval(moveId)
    moveId = null
  }  

}

function init():void{
  setStyles(body, BODY_STYLE)
  setStyles(appCtx, APP_STYLE)
  startButton.addEventListener('click',move(1000))
  deleteButton.addEventListener('click',deleteInterval)
  // initButton.addEventListener('click',deleteInterval)

}

init()

