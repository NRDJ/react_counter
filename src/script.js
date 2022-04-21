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

  class ScrollLogger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        scrollY: 0
      };
  
      // bind to the class object so updateScrollY can access this.setState
      this.updateScrollY = this.updateScrollY.bind(this);
    };
  
    updateScrollY(e) {
      this.setState({ scrollY: Math.round(window.scrollY) });
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.updateScrollY);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.updateScrollY);
    }
  
    render() {
      return (
        <div className="position-fixed bg-white p-3" style={{position: 'fixed', right: 0, top: 0}}>
          Scrolled: {this.state.scrollY}px
        </div>
      )
    }
  }

  const App = () => {

    return (
  
      <React.Fragment>
  
        <Counter />  
  
        <ScrollLogger />
  
      </React.Fragment>
  
    )
  
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
