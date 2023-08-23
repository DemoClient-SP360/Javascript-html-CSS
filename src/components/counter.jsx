import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
    }

    handleIncrement = product => {
        console.log(product)
        this.setState({value: this.state.value + 1})
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({id:1})} className='btn btn-secondary btn-sm'>Increment</button>
                <button className='btn btn-danger btn-sm m-2' onClick={ () => this.props.onDelete(this.props.counter.id )} >Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 bg-"
        classes += this.state.value === 0 ? "warning" : "primary"
        return classes
    }

    formatCount() {
        const count = this.state.value;
        return count === 0 ? 'Zero' : count
    };
}

export default Counter;