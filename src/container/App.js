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

  onDeleteItem = (id) => {
    this.setState((previousState) => ({
      list : previousState.list.filter(item => {
        return item.id !== id;
      })
    }))
  }

  onAddItem = (event) => {
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

  onTypeBoxPress = (event) => {
    if(event.key === 'Enter' ) {
      this.onAddItem(event);
      this.setState({
        textField: '',
      })
    }
  }

  onTypeBoxChange = (event) => {
    this.setState({
      textField: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <TypeBox textField={this.state.textField} onTypeBoxPress={this.onTypeBoxPress} onTypeBoxChange={this.onTypeBoxChange}/>
        <CardList arrayOfNamesObj={this.state.list} onDeleteItem={this.onDeleteItem}/>
      </div>
    );
  }
}

export default App;