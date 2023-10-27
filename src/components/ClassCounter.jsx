import React, {Component} from 'react';

class ClassCounter extends Component {
    // способ 1
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }
    plus() {
        this.setState({count: this.state.count + 1})
    }
    minus() {
        this.setState({count: this.state.count - 1})
    }

    // способ 2
    // state = {
    //     age: 42,
    // };
    //
    // handleAgeChange = () => {
    //     this.setState({
    //         age: this.state.age + 1
    //     });
    // };

    // способ 3
    // constructor(props) {
    //     super(props);
    //     this.state = { counter: 0 };
    //     this.increment = this.Increment.bind(this);
    //     this.dicrement = this.Dicrement.bind(this);
    // }
    //
    // Increment() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     });
    // }
    // Dicrement() {
    //     this.setState({
    //         counter: this.state.counter - 1
    //     });
    // }

    render() {
        return (
            <>
                <div style={{fontSize: 30}}>{this.state.count}</div>
                <button onClick={ this.plus }>Click +</button>
                <button onClick={ this.minus }>Click -</button>

                {/*<p>Count: {this.state.counter}.</p>*/}
                {/*<button onClick={this.increment}>Increment</button>*/}
                {/*<button onClick={this.dicrement}>Dicrement</button>*/}

            </>
        );
    }
}

export default ClassCounter;