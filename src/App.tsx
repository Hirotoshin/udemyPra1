import * as React from "react";
// classComponent
// class App extends React.Component {
//   public render() {
//     return (
//       <React.Fragment>
//         hogehoge
//       </React.Fragment>
//     );
//   }
// }

interface IProps {
  count: number;
}
// 関数Component
const App = () => {
  return (
    <React.Fragment>
      <Counter />
    </React.Fragment>
  );
};

class Counter extends React.Component<{}, IProps> {
  constructor(props: {}) {
    super(props);
    // console.log(this.state);
    this.state = {
      count: 0
    };
  }

  public handlePlusButton = () => {
    // console.log("hogehoge");
    this.setState({
      count: this.state.count + 1
    });
  };

  public hadleMinusButton = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  public render() {
    return (
      <React.Fragment>
        counter:{this.state.count}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.hadleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
