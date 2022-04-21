import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "this is the default state of a class component",
            key2: 0,
            title: {
                main: "main title",
                sub: "sub title"
            },
            countries: []
        }
        console.log("1");
    }

    componentDidMount() {
        console.log("3");

        fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then(countriesData => this.setState(
            () => {
                return {countries: countriesData}
            }, 
            () => console.log(this.state)
        ))
    }

    render() {
        console.log("2");
        return (
            <div>
                <p>{this.state.key1}</p>
                <button onClick={() => this.setState({key1: "this is an updated state of the class component"})}>click me</button>
                {/* <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button> */}
               {/*  <button onClick={() => {
                        this.setState({
                            main: "h1",
                            sub: "string"
                        })
                    }
                }>{this.state.title.main}</button> */}
              
                <button onClick={() => {
                    this.setState(
                        () => {
                            return {
                                title: {
                                    main: "h1", 
                                    sub: "h3"
                                }
                            }
                        }, 
                        () => {
                            console.log(this.state)
                        }
                    )
                }}>{this.state.title.main}, {this.state.title.sub}
                </button> 
                <div className='countries'>
                    {this.state.countries.map((country, i) => <div key={i}>{country.name.common}</div> )}
                </div>
            </div>   
        );
    }
}

export default ButtonWithClass;