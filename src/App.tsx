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
  age: number;
  name: string;
}
// 関数Component
const App = () => {
  const profile = [
    {
      age: 10,
      name: "Taro"
    },
    {
      age: 20,
      name: "hanako"
    }
  ];
  return (
    <React.Fragment>
      {profile.map((contents, i) => {
        return <User key={i} name={contents.name} age={contents.age} />;
      })}
    </React.Fragment>
    // <React.Fragment>
    //   <User name={"Taro"} age={10} />
    // </React.Fragment>
  );
};

const User = (props: IProps) => {
  return (
    <React.Fragment>
      {props.name} & {props.age}
    </React.Fragment>
  );
};

export default App;
