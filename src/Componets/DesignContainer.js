import React, { Component } from 'react'
import PadInput from './PadInput'
import DesignBoard from './DesignBoard'
export class DesignContainer extends React.Component {
    
    divStyle = {
        float: 'right',
        marginRight: '50px',
        // backgroundColor: 'black',
        color: 'white',
        border: 'none',
        padding: '20px',
        fontSize: '16px',
        borderRadius: '12px',                    
    }

    textStyle = {
        textAlign: 'center',
        textSizeAdjust: '50px',
        textTransform: 'uppercase',
        color: 'black'
    }

    constructor(props) {
        super(props);
        this.state = {editMode: false, backgroundColor: true}
        this.board = React.createRef();
        this.pad = React.createRef();
    }

    colorChange(){
        this.setState({backgroundColor: !this.state.backgroundColor})
    }

    onEdit = (event) => {
        console.log("Nice")
        //event.preventDefault()
        let mode = !this.state.editMode;                   
        this.setState({editMode: mode})
        this.pad.current.setState({editMode: mode})
        this.setState({backgroundColor: !this.state.backgroundColor})
    }

    render() {
        let btncolor = this.state.backgroundColor ? "blackButton" : "redButton";
        return (
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12" style = {this.textStyle}>
                        {/* <span>Design Pad</span> */}
                        <h1>Design Pad</h1>
                        <button className={btncolor} onClick={() => this.onEdit()} style={this.divStyle}>EDIT</button>
                        <PadInput ref={this.pad}/>
                    </div>
                    <div className="col-12">
                        <DesignBoard ref={this.board}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignContainer
