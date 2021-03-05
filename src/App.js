import React, { Component } from "react";
import "./App.css";
import cybertruck from "./components/cybertruck1.jpg";
import modelx from "./components/modelx.jpg";
import models from "./components/models.jpg";
import logo from "./components/tesla-logo.jpg";
import Car from "./components/Tesla.js";
import cybint from './components/cybint.jpg';
import modelsint from './components/modelsint.jpg';
import modelxint from './components/modelxint.jpg';

class App extends React.Component {
  state = {
     
    cars: [
      { id: 1, image:cybertruck, name: "Cybertruck", price: "32k-50k", color: "Steel", text: " - Cybertruck ready 2021! orders being taken now for as low as £100 deposit", img:cybint},
      { id: 2, image:modelx, name: "Model S", price: "83k", color: "Red,", text: " 412 mile range, top speed of 155mph and 0-60 in 3.1s", img:modelsint},
      { id: 3, image:models, name: "Model X - Plaid!", price: "110k", color: "Grey", text: ", 340 mile range, top speed of 163mph and 0-60 in 2.5s ", img:modelxint},
    ],
  };
  render() {
    const eachCar = this.state.cars.map((cars,  index) => {
      return (
       
        <Car image={cars.image} name={cars.name} price={cars.price} color={cars.color} text={cars.text} key={cars.id} img={cars.img} button={cars.button}/>
      );
    });
    return (
      <div>
        <header><img className="logobanner" src={logo} alt="logo1"/></header>
    
        <div className="carCards">
           {eachCar} 
       </div>
      
      
      </div>
    );
  }
}
export default App;
