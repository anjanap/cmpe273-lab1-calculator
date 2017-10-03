import React, {Component} from 'react';
import * as API from '../api/API';
import './Display.css';

class Display extends Component {
    state = {
        data:'',
        inp1:'',
        inp2:'',
        op:''
    };

    handleSubmit = (x,y) => {
      x.op=y;
        API.result(x)
            .then((output) => {
                    this.setState({
                        data: output
                    });
                  })
                };

    buttonClick = (val) => {
      this.setState({inp: this.state.inp+val});
    };

    render() {
        return (
          <div className="container well div1">
          <center>
          <h1><b>CALCULATOR</b></h1><br/>
          <form>
           <input id="number1" type="number" pattern="^[0-9]*$" placeholder="Number 1" onChange={(event)=>{
                                         this.setState({inp1: event.target.value});}} value={this.state.inp1}></input>
           <input id="number2" type="number" pattern="^[0-9]*$" placeholder="Number 2" onChange={(event)=>{
                                         this.setState({inp2: event.target.value});}} value={this.state.inp2}></input><br/><br/>

          <input type="button" id="add" value="+" onClick={()=> this.handleSubmit(this.state,'+')}></input>
          <input type="button" id="sub" value="-" onClick={()=> this.handleSubmit(this.state,'-')}></input><br/>

          <input type="button" id="mul" value="*" onClick={()=> this.handleSubmit(this.state,'*')}></input>
          <input type="button" id="div" value="/" onClick={()=> this.handleSubmit(this.state,'/')}></input><br/><br/>

          <input type="button" id="clear" value="clear" onClick={() => this.setState({data:"",
                                                                                      inp1:"",
                                                                                      inp2:""})}></input><br/><br/>
          <b>RESULT:</b> <input type="text" id="outString" value={this.state.data}></input><br/>
         </form>
         </center>
         </div>
        );
    }
}

export default Display;
