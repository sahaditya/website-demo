import React from 'react';
export default class FirstComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time : 0,
            inputText : ''
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time : new Date().getTime()
            });
        },500);
    }

    render(){
        return (
            <div>
            <div>{this.state.time}</div>
            <input  value = {this.state.inputText} 
            onChange = { (e) => { this.setState({inputText : e.target.value}) } } />
            </div>
            )
    }
}

