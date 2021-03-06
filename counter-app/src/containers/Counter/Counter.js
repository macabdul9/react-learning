import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from "react-redux";

import * as actionCreators from '../../store/actions/index';

class Counter extends Component {

    render () {
        console.log(this.props.storedResults)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add Random" clicked={this.props.onAddCounter}  />
                <CounterControl label="Sub Random" clicked={this.props.onSubCounter}  />
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
        onIncrementCounter : ()=>dispatch(actionCreators.increment()),
        onDecrementCounter : ()=>dispatch(actionCreators.decrement()),
        onAddCounter : ()=>dispatch(actionCreators.add(Math.floor(Math.random()*10))),
        onSubCounter : ()=>dispatch(actionCreators.sub(Math.floor(Math.random()*10))),
        onStoreResult : (result)=>dispatch(actionCreators.storeResult(result)),
        onDeleteResult : (id)=>dispatch(actionCreators.deleteResult(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);