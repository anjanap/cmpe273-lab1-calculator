import React, {Component} from 'react';
import * as API from '../api/API';
import './Display.css';

class Display extends Component {
    state = {
        data:'',
        inp:''
    };

    handleSubmit = (x) => {
        API.result(x)
            .then((output) => {
                    this.setState({
                        data: status
                    });
                  })
                };

    buttonClick = (val) => {
console.log(val);
      this.setState({inp: this.state.inp+val});
    };

    render() {
        return (
          <div>
          <center>
          <h1>CALCULATOR</h1><br/>
          <form>
          <b>INPUT:</b> <input id="numbers" type="text" value={this.state.inp}></input><br/><br/>
          <input type="button" id="one" value="1" onClick={() => this.buttonClick("1")}></input>
          <input type="button" id="two" value="2" onClick={() => this.buttonClick("2")}></input>
          <input type="button" id="three" value="3" onClick={() => this.buttonClick("3")}></input>
          <input type="button" id="add" value="+" onClick={() => this.buttonClick("+")}></input><br/>
          <input type="button" id="four" value="4" onClick={() => this.buttonClick("4")}></input>
          <input type="button" id="five" value="5" onClick={() => this.buttonClick("5")}></input>
          <input type="button" id="six" value="6" onClick={() => this.buttonClick("6")}></input>
          <input type="button" id="sub" value="-" onClick={() => this.buttonClick("-")}></input><br/>
          <input type="button" id="seven" value="7" onClick={() => this.buttonClick("7")}></input>
          <input type="button" id="eight" value="8" onClick={() => this.buttonClick("8")}></input>
          <input type="button" id="nine" value="9" onClick={() => this.buttonClick("9")}></input>
          <input type="button" id="three" value="*" onClick={() => this.buttonClick("*")}></input><br/>
          <input type="button" id="decimal" value="." onClick={() => this.buttonClick(".")}></input>
          <input type="button" id="zero" value="0" onClick={() => this.buttonClick("0")}></input>
          <button type="button" onClick={() => this.handleSubmit(this.state)}> = </button>
          <input type="button" id="div" value="/" onClick={() => this.buttonClick("/")}></input><br/>
          <input type="button" id="clear" value="clear" onClick={() => this.setState({data:"",
                                                                                      inp:""})}></input><br/><br/>
          RESULT: <input type="text" id="outString" value={this.state.data}></input><br/>
         </form>
         </center>
         </div>
        );
    }
}

export default Display;
