import React from "react";
import { Table } from "react-bootstrap";
export default class Elements extends React.Component {
  state = {
    data: "",
  };
  componentDidMount = async () => {
    const resp = await fetch(
      `https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json?description=${this.props.position}&location=${this.props.location}`
    );

    if (resp.ok) {
      console.log("resp ok");
      const data = await resp.json();
      this.setState({ data: data });
    } else {
      console.log("resp not ok");
    }
  };
  render() {
    console.log(this.state.data);
    const data = this.state.data;
    return (
      <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item) => (
            <tr>
              <td>{item.type}</td>
              <td>Mark</td>
              <td>`${this.props.position}`</td>
              <td>@mdo</td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    );
  }
}
