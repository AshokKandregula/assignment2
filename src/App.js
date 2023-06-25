import { Component } from "react";
import { GrFormAdd } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";
import ActionItem from "./component/ActionItem";
import "./App.css";

class App extends Component {
  state = {
    value: false,
    count: 0,

    action: "FollowUp",
    date: "",
    time: "",
    data: [],
  };

  getAction = (event) => this.setState({ action: event.target.value });

  getDate = (event) => this.setState({ date: event.target.value });
  getTime = (event) => this.setState({ time: event.target.value });

  GetValue = () =>
    this.setState((preValue) => ({
      value: !preValue.value,
    }));

  getValue2 = () => {
    return this.setState((preValue) => ({
      value: !preValue.value,
      count: preValue.count - 1,
    }));
  };
  getValue3 = () => alert("Hi");

  GetValue1 = () => {
    const { date, time, action } = this.state;
    const data1 = {
      id: uuidv4(),
      action1: action,
      time1: time,
      date1: date,
    };
    this.setState((preValue) => ({ data: [...preValue.data, data1] }));
    return this.setState((preValue) => ({
      value: !preValue.value,
      count: preValue.count + 1,
    }));
  };

  addValue = () => {
    const { date, time, action } = this.state;
    console.log(date, time, action);
    return (
      <div>
        <div>
          <label htmlFor="inputText">Task Description</label>
          <br />
          <input
            type="text"
            id="inputText"
            value={action}
            onChange={this.getAction}
          />
        </div>
        <div className="timeDate">
          <div>
            <label htmlFor="inputDate">Date</label>
            <br />
            <input
              type="date"
              id="inputDate"
              value={date}
              onChange={this.getDate}
            />
          </div>
          <div>
            <label htmlFor="inputTime">Time</label>
            <br />
            <input
              type="time"
              id="inputTime"
              value={time}
              onChange={this.getTime}
            />
          </div>
        </div>
        <div>
          <label htmlFor="cars1">Assign User</label>
          <br />
          <select id="cars1" className="drop">
            <option value="Plan User">Plan User</option>
            <option value="Planed User">Planed User</option>
            <option value="Required User">Required User</option>
            <option value="Submitted User">Submitted User</option>
          </select>
        </div>
        <div className="button1">
          <button
            onClick={function () {
              this.getValue2();
              this.getValue3();
            }.bind(this)}
          >
            cancel
          </button>
          <button onClick={this.GetValue1}>Save</button>
        </div>
      </div>
    );
  };

  render() {
    const { value, count, data } = this.state;

    return (
      <div className="mainApp">
        <div className="app">
          <div className="mainTask">
            <p className="para1">TASKS {count}</p>
            <GrFormAdd className="icon" onClick={this.GetValue} />
          </div>
          {value && this.addValue()}
        </div>
        <ul className="listStyle">
          {data.map((each) => (
            <ActionItem key={each.id} each={each} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
