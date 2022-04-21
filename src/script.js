class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.addCount = this.addCount.bind(this);
    }
  
    addCount () {
        console.log(this);
      // add 1 to this.state.count
      this.setState({
        count: this.state.count + 1
      });
    }
    
    render() {
      return (
        <div>
          <h2>Count {this.state.count}</h2>
          <button onClick={this.addCount}>
            +1
          </button>
        </div>
      );
    }
  }
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );