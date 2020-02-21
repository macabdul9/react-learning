import React, { Component } from 'react';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from "react-redux";

class Counter extends Component {

    render () {
        console.log(this.props.storedResults)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult =>(
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr : state.ctr.counter,
        storedResults : state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : ()=>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter : ()=>dispatch({type:actionTypes.DECREMENT}),
        onAddCounter : ()=>dispatch({type:actionTypes.ADD, value:5}),
        onSubCounter : ()=>dispatch({type:actionTypes.SUB, value:5}),
        onStoreResult : (result)=>dispatch({type:actionTypes.STORE_RESULT, result:result}),
        onDeleteResult : (id)=>dispatch({type:actionTypes.DELETE_RESULT, id:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);