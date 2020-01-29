import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3005/getSogetiEmployees")
      .then(employees => employees.json())
      .then(employees => {
        console.log(employees)
        this.setState({
          employees: employees
        })
      })
      .catch(err => console.log(err))
  }

  // put a navbar up there
  render() {
    return (
      <div className="App container">
        <h1>Sogeti Employee Directory</h1>
        <div className="row">
          {this.state.employees.map((employees, index) => {
            return (
              <div className="card directory-entry">
                <img src={employees.image} className="card-img-top mx-auto mt-3 directory-image" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{employees.name}{employees.lastName}</h5>
                  <p className="card-text">{employees.from}</p>
                  <a href={employees.linkedIn} className="btn btn-primary directory-button">Check out their LinkedIn</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
