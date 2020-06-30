import * as React from 'react';
import Store from '../store';
import { observer, inject } from 'mobx-react'
import TitleH3 from './title/TitleH3';
import styled from 'styled-components';

interface TimerProps{
    store ?: Store
}



const TimerTitle = styled(TitleH3)`
font-size: 48px
`
// @inject((store) => store)
// @observer
class Timer extends React.Component<TimerProps>{
    state = {
        hh : this.getCurrentTime().hh,
        mm : this.getCurrentTime().mm,
        ss : this.getCurrentTime().ss
    }
    getCurrentTime(){
        let hh = new Date().getHours()
        let mm = new Date().getMinutes()
        let ss = new Date().getSeconds()
        return {
            hh : hh < 10 ? `0${hh}` : hh,
            mm : mm < 10 ? `0${mm}` : mm,
            ss : ss < 10 ? `0${ss}` : ss
        }
    }
    timer () {
        setInterval((timeStamp)=>{
            this.setState({
                hh : this.getCurrentTime().hh,
                mm : this.getCurrentTime().mm,
                ss : this.getCurrentTime().ss
            })
        },1000)
    }
    componentDidMount(){
        this.timer()
    }
    render(){
        return (
            <TimerTitle>
                {this.state.hh} : {this.state.mm} : {this.state.ss}        
            </TimerTitle>
        );
    }
};

export default React.memo(Timer);