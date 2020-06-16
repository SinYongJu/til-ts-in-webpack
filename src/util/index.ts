export interface Style {
    [key: string]: string
}

export function setStyles (el : HTMLElement, style : Style){
    Object.keys(style).forEach((key : string)=>{
        let elStyle = el.style as CSSStyleDeclaration
        (<any>elStyle)[key] = style[key];
    })
}


export function toPixel (px:number) : string {
    return px+'px'
}

export function querySelect (selector:string) : HTMLElement {
    return document.querySelector<HTMLElement>(selector)
}