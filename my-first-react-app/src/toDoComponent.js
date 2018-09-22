import React from 'react';

export default class ToDoNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            note : '',
            toDoNoteList : []
        }
    }

    addToDoNote = ()=>{
        let data = this.state.note;
        const tempArray = [...this.state.toDoNoteList];
        tempArray.push(data);
        this.setState({
            toDoNoteList : tempArray
        })
    }

    render(){
        return (
            <div>
                <div>
                <input value = {this.state.note} placeholder="to do note" onChange = {(e) => this.setState ({note : e.target.value})}></input>
                <button onClick = {this.addToDoNote}>Add Note</button>
            </div>
            <div>
                <ul>
                    {
                        this.state.toDoNoteList.map(item => <div class="padding-style"><li class="list-style">{item}</li></div>)
                    }
                </ul>
            </div>
            </div>
        )
    }
}