import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import axios from "axios";
import "./index.css";
import "./App.css";
// import Projects from "./Components/Projects";
// import AddProject from "./Components/AddProject";
// import Todos from "./Components/Todos";
import Navbar from "./Components/Page/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import background from "./Resources/background.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      todos: []
    };
  }

  getTodos() {
    axios
      .get("http://localhost:5000/getCustomers")
      .then(data => {
        this.setState({ todos: data.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    });
  }

  // componentWillMount() {
  //   this.getProjects(0);
  //   this.getTodos();
  // }

  // compoonentDidMount() {
  //   this.getTodos();
  // }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }

  render() {
    let style = {
      height: "100vh",
      backgroundImage: `url(${background})`
    };

    let fontstyle = {
      fontSize: "x-large",
      color: "#22820D",
      fontWeight: "bold"
    };
    return (
      <div className="App" style={style}>
        <Navbar />
        <div className="container" style={fontstyle}>
          <div className="col-md-12">
            <Home />
            <Signup />
            <About />
            <Pricing />
            <Login />
          </div>
        </div>
        {/* <AddProject addProject={this.handleAddProject.bind(this)} />{" "}
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
        <hr />
        <Todos todos={this.state.todos} /> */}
      </div>
    );
  }
}

export default App;
