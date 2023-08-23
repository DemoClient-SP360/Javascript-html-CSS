import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag 1', 'tag 2', 'tag 3']
    }
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
                <ul>{this.state.tags.map(tag => <li key={tag} >{tag}</li>)}</ul>
            </React.Fragment>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 bg-"
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes
    }

    formatCount() {
        const count = this.state.count;
        return count === 0 ? 'Zero' : count
    };
}

export default Counter;