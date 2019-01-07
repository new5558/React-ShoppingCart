import React, { Component } from 'react';
import CardList from '../component/CardList';
import TypeBox from '../component/TypeBox';

class App extends Component {
  constructor() {
    super();
    this.counter = 0;
    this.state = {
      list: [],
      textField: '',
    }
  }

  onDelete = (id) => {
    console.log(id);
    this.setState((previousState) => ({
      list : previousState.list.filter(item => {
        return item.id !== id;
      })
    }))
  }

  onAdd = (event) => {
    const name = event.target.value;
    if(name === "") {
        return;
    }
    this.setState((previousState) => ({
      list : [...previousState.list, {
        name: name,
        id: ++this.counter,
      }]
    }))
  }

  onPress = (event) => {
    if(event.key === 'Enter' ) {
      this.onAdd(event);
      this.setState({
        textField: '',
      })
    } 
  }

  onChange = (event) => {
    this.setState({
      textField: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <TypeBox textField={this.state.textField} onPress={this.onPress} onChange={this.onChange}/>
        <CardList arrayOfNamesObj={this.state.list} onDelete={this.onDelete}/>
      </div>
    );
  }
}

export default App;