import React, { Component } from 'react'
import NavBar from './components/NavBar'

class App extends Component{
  constructor() {
    super();
    this.state = {
      homeLink: "Video"
    };
    
  }

  
  render() {
    return (   
        <div className="container">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>

          {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          /> */}

          <NavBar></NavBar>     
        </div>
    )
  }
}

export default App
