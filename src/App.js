import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grams: 0,
      priceOz: 0,
      carotG: 0,
      totalPrice: 0
    };
    
    this.gramsInput = this.gramsInput.bind(this);
    this.priceOzInput = this.priceOzInput.bind(this);
    this.carotInput = this.carotInput.bind(this);
    this.change = this.change.bind(this);
  }

  change(e) {
    e.preventDefault();
    const g = this.state.grams;
    const p = this.state.priceOz;
    const c = this.state.carotG;
    const a = g * (1/31.10); 
    const b = a * (c/24);  
    const cC = b * (p/1);
    this.setState({ totalPrice: cC });
  }
  gramsInput(e) {
    e.preventDefault();
    this.setState({ grams: parseFloat(e.target.value) });
  }
  priceOzInput(e) {
    e.preventDefault();
    this.setState({ priceOz: parseFloat(e.target.value) });
  }
  carotInput(e) {
    e.preventDefault();
    this.setState({ carotG: parseFloat(e.target.value) });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> GOLD PRICE !</h1>
          <br/>
          <br/>
        </header>
          <div>
            <form onSubmit={ this.change } className='left'>
              <div className='row '>
                <div className='col-md-10 mx-auto tl'>
                <div className='card'>

                  <br/>
                  <br/>


                    <div className='row'>
                      <div className='card-body'>
                        <label className='textL '>How many grams boss ?</label>
                        <input className='col-md-12 tl' type='number' value={this.state.grams} onChange={ this.gramsInput }/>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='card-body'>
                        <label className='textL'>What's the Trojan oz of gold going for ?</label>
                        <input className='col-md-12 tl' type='number' value={ this.state.priceOz } onChange={ this.priceOzInput }/>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='card-body'>
                        <label className='textL '>What's the 'K' on that bro ?</label>
                        <input className='col-md-12 tl' type='number' value={this.state.carotG} onChange={ this.carotInput }/>
                      </div>
                    </div>

                    <div className='row' >
                        <div className='card-body ' >

                          <button className='col-md-12 btn btn-primary' name='calculate' type='submit'>

                              Calculate !
                            </button>
                        </div>
                      </div>

                      <div className='row' >
                        <div className='card-body ' >
                          <h4>This is the Price: { this.state.totalPrice }</h4>
                        </div>
                      </div>

                 </div>
                </div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}

export default App;
