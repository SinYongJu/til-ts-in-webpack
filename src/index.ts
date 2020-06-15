interface Ainterface {
  alphabet : string,
  id : number
}

function A (a : Ainterface):void{
  console.log(`이 알파벳은 ${a.alphabet} 번째 ${a.alphabet} 입니다`)
}


A({alphabet: 'a', id: 1})