import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Button} from 'react-bootstrap'
import '/Users/danil/calculature/src/app.css'
class Calculator extends React.Component{
    state ={
        data: '',
        data_result: '',
        show: false
    };
    DataButton = (e) => {
        this.state.data += e.target.value;
        this.setState({
            data_result: this.state.data,
            show: true
        });
    };

    Result = () =>{
        console.log(this.state.data);
        this.setState({
            data: eval(this.state.data),
            data_result: eval(this.state.data)
        })
    };
    Clear = () => {
      this.setState({
          show: false,
          data: '',
          data_result: ''
      })
    };
    PercentButton = () => {
        const precent = Number(this.state.data) / 100;
        this.setState({
            data: precent,
            data_result: precent

        })

    };
    Factorial = () => {
        function factorial(n) {
            return (n != 1) ? n * factorial(n - 1) : 1;
        }
        this.setState({
            data: factorial(this.state.data),
            data_result: factorial(this.state.data)
        })
    };
  render(){
    return(
        <div className={'calculator'}>
            <div className={'view'}>
                <span>{this.state.show ? this.state.data_result : '0'}</span>
            </div>
            <div className={'button_calc'}>
                <Button variant="secondary"  size="lg" className={'buttons'} onClick={this.Clear}>AC</Button>
                {' '}
                <Button variant="secondary"  size="lg" className={'buttons'} onClick={this.Factorial}>x!</Button>
                {' '}
                <Button variant="secondary"  size="lg" className={'buttons'} onClick={this.PercentButton}>%</Button>
                {' '}
                <Button variant="warning" size="lg" className={'buttons'} value={'/'} onClick={this.DataButton}>/</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} onClick={this.DataButton} value={'7'}>7</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} onClick={this.DataButton} value={'8'}>8</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} onClick={this.DataButton} value={'9'}>9</Button>
                {' '}
                <Button variant="warning" size="lg" className={'buttons'} value={'*'} onClick={this.DataButton}>*</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'4'} onClick={this.DataButton}>4</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'5'} onClick={this.DataButton}>5</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'6'} onClick={this.DataButton}>6</Button>
                {' '}
                <Button variant="warning" size="lg" className={'buttons'} value={'-'} onClick={this.DataButton}>-</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'1'} onClick={this.DataButton}>1</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'2'} onClick={this.DataButton}>2</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'3'} onClick={this.DataButton}>3</Button>
                {' '}
                <Button variant="warning" size="lg" className={'buttons'} value={'+'} onClick={this.DataButton}>+</Button>
                {' '}
                <Button variant="light" size="lg" className={'button_0'} value={'0'} onClick={this.DataButton}>0</Button>
                {' '}
                <Button variant="light" size="lg" className={'buttons'} value={'.'} onClick={this.DataButton}>.</Button>
                {' '}
                <Button variant="warning" size="lg" className={'buttons'} onClick={this.Result}>=</Button>
            </div>
        </div>
    )
  }
}

export default Calculator