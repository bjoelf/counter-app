import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Footer from "./components/Footer";
//import getProducts from "./api/prodApi";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  /*
  componentDidMount() {
    const _this = this;
    getProducts().then((pl) => {
      _this.setState({ productList: pl });
      console.log("loaded products");
    });
  }
  */

  handleIncrement = (counter) => { 
    //get a new array of counters...
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}; 
    counters[index].value++; 
    console.log(this.state.counters[0]);
    this.setState({counters});
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  handleDelete = (counterId) => {
    console.log("Event handler called!", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
