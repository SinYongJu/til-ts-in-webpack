export function getCurrentTime () {
    let hh = new Date().getHours()
    let mm = new Date().getMinutes()
    let ss = new Date().getSeconds()
    return {
        hh : hh < 10 ? `0${hh}` : hh,
        mm : mm < 10 ? `0${mm}` : mm,
        ss : ss < 10 ? `0${ss}` : ss
    }
}