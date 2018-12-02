import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { decrementCounter, incrementCounter } from "./actions/actionCreater";
import { IrootState } from "./reducer/index";

interface IProps {
  incre: (count: number) => void;
  decre: (count: number) => void;
}
interface IState {
  count: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this._increment = this._increment.bind(this);
  }

  public _increment(): void {
    this.props.incre(count);
  }
  public _decrement(count: number): void {
    this.props.incre(count);
  }

  public render() {
    const clickIncre = () => this._increment;
    const clickDecre = () => this._decrement;
    return (
      <React.Fragment>
        <div>{this.props.count}</div>
        <button onClick={clickIncre}>+1</button>
        <button onClick={clickDecre}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IrootState) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    decre: () => dispatch(decrementCounter()),
    incre: () => dispatch(incrementCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
