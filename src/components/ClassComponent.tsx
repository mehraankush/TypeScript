import React, { Component } from "react";

type StateType = {
    count:number
}
type PropsType = {
    message:string
}

// props type will come first then state type
export class ClassComponent extends Component<PropsType,StateType> {

    state={count:0,}
    
    handleClick = () => {
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    render() {
        return(
            <div>
              <p>{this.props.message }{this.state.count}</p>
              <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}