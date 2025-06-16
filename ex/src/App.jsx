import { Component } from "react";

class HelloWorld extends Component {

  title = "Hello World"
  text = "Il paragrafo"

  render() {
    return (
      <>
        <h1>{this.title}</h1>
        <p>{this.text}</p>
      </>)
  }
}

export default HelloWorld;