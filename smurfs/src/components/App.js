import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */ 
import { connect } from 'react-redux';
import{ getSmurf, deleteSmurf} from "../actions";
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount(){
    this.props.getSmurf()
  }
  removeSmurf =(event, index) =>{
    event.preventDefault()
    this.props.deleteSmurf(index)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfForm />
        <Smurf delete={this.removeSmurf} smurf={this.props.smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    smurf: state.smurfs,
    fetching: state.fetching,
    error: state.error
  }
}
export default connect(mapStateToProps,{getSmurf,deleteSmurf})(App);
