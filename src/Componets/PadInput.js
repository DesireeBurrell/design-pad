import React, { Component } from 'react'

export class PadInput extends Component {
    render() {
        return (
            <div style={{backgroundColor:'blueviolet'}}>





               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    1
                    </div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    2
                    </div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    3
                    </div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    4
                    </div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    5
                    </div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    6
                    </div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               borderRadius:'15px',
               backgroundColor:'lightgray'
               ,}
               }draggable={this.props.bol}> 7</div> 
               <div style={{width:'50px',
               borderRadius:'15px',
               backgroundColor:'lightgray',}}
               draggable={this.props.bol}>
                    8
                    </div> 
                
               
               
            </div>
        )
    }
}

export default PadInput
