import React, { Component } from 'react';
import CardList from '../component/CardList';
import TypeBox from '../component/TypeBox';
import {onAddItem, onDeleteItem, onTypeBoxPress} from '../redux/index_action'
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    textField: state.textField,
    list: state.list,
    count: state.count,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPress: (event) => dispatch(onTypeBoxPress(event)),
    onDelete: (key) => dispatch(onDeleteItem(key)),
    onAdd: (event) => dispatch(onAddItem(event)),
  };
}

class App extends Component {
  // constructor() {
  //   super();
  //   // this.counter = 0;
  //   // this.state = {
  //   //   list: [],
  //   //   textField: '',
  //   // }
  // }

  // onDeleteItem = (id) => {
  //   this.setState((previousState) => ({
  //     list : previousState.list.filter(item => {
  //       return item.id !== id;
  //     })
  //   }))
  // }

  // onAddItem = (event) => {
  //   const name = event.target.value;
  //   if(name === "") {
  //       return;
  //   }
  //   this.setState((previousState) => ({
  //     list : [...previousState.list, {
  //       name: name,
  //       id: ++this.counter,
  //     }]
  //   }))
  // }

  // onTypeBoxPress = (event) => {
  //   if(event.key === 'Enter') {
  //     this.onAddItem(event);
  //     this.setState({
  //       textField: '',
  //     })
  //   }
  // }

  // onTypeBoxChange = (event) => {
  //   this.setState({
  //     textField: event.target.value,
  //   });
  // }

  render() {
    const {textField, onPress, onDelete, list} = this.props;
    return (
      <div>
        <TypeBox textField={textField} onTypeBoxPress={onPress}/>
        <CardList arrayOfNamesObj={list} onDeleteItem={onDelete}/>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);