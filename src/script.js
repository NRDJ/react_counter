class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    addCount (amount) {
        console.log(this);
      // add 1 to this.state.count
      this.setState({
        count: this.state.count + amount
      });
    }
    
    render() {
      return (
        <div>

        <h2>Count {this.state.count}</h2>
        <button onClick={() => this.addCount(1)}>
          +1
        </button>
        <button onClick={() => this.addCount(2)}>
          +2
        </button>
        <button onClick={() => this.addCount(3)}>
          +3
        </button>
      </div>
      );
    }
  }
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );