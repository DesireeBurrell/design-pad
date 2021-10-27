import React, { Component } from 'react'
import PadInput from './PadInput'
import DesignBoard from './DesignBoard'
export class DesignContainer extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
           edit: false
       }
    }
    updateEdit = () =>{
        if(this.state.edit === false ){
            this.setState({edit:true}) 
            
        }
        console.log(this.state.edit)
        
    }
    render() {
        return (
            <div>
                <div>
                Design Pad
                </div>
                <button onClick={this.updateEdit}>Edit</button>
                <PadInput bol={this.state.edit}>

                </PadInput>
                <DesignBoard>

                </DesignBoard>
            </div>
        )
    }
}

export default DesignContainer
