import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './ToDoList/AddTaskForm/AddTaskForm.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ToDoList/AddTaskForm/AddTasckForm.css'
import Header from './ToDoList/Header/Header.js'


class App extends Component {

    state = {
        checkbox: false,
        counter: 2,
        value: '',
        tasksTexts: [
            {name: 'Sultan', id:1, checkbox: false},
            {name: 'Azamat', id: 2, checkbox: false},
        ],
        pageTitle: 'Tasks',
    };

    onChangeHendler = (event) => {
        this.setState({value : event.target.value})
    };

    onClickAdd = () => {
        let newTask = {name: this.state.value, id: this.state.counter+1};
        let tasksTexts = [...this.state.tasksTexts, newTask];
        this.setState({tasksTexts, value: '' , counter: this.state.counter+1})
    };

    deleteHandler (index) {
        const tasksTexts = [...this.state.tasksTexts];
        const id = this.state.tasksTexts.findIndex(task => task.id === index);
        tasksTexts.splice(id, 1);

        this.setState({tasksTexts, counter: this.state.counter-1});
    }


  render() {


    return (
      <div className="Container">
          <Header
              mainTaitle={this.state.pageTitle}
              valueInput={this.state.value}
              ChangeHendler={(event) => this.onChangeHendler(event)}
              clickHandler={this.onClickAdd}
          />


          {
              this.state.tasksTexts.map((newTask, index) => {
                  return (
                      <AddTaskForm
                          key={index}
                          task={newTask.name}
                          DeleteTasks={this.deleteHandler.bind(this, newTask.id)}>
                      </AddTaskForm>
                  )
              })

          }


      </div>
    );
  }
}

export default App;
