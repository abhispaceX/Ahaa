import { Component } from "react";

class User extends Component {
    state = {
      count: 0,
    };
  

//   handleClick = () => {
//     // Update state using a function (recommended)
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };
  render() {
    const { name, age, phone } = this.props;
    const { count } = this.state;

    return (
      <>
        <div>
          <h5>Count: {count}</h5>
          <button onClick={()=>{
            this.setState({count : count+1})
          }}>Count increase</button>
          <h2>Name: {name}</h2>
          <h3>Age: {age}</h3>
          <h4>Phone No.: {phone}</h4>
        </div>
      </>
    );
  }
}

export default User;
