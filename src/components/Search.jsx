import React from "react";
import { Form, FormControl, Button, Navbar, Nav } from "react-bootstrap";
import Elements from "./Elements.jsx";

export default class Search extends React.Component {
  state = {
    queryA: "",
    queryB: "",
  };

  filterSearchPosition = (e) => {
    this.setState({ queryA: e.target.value });
    console.log(`${this.state.queryA}`);
  };

  filterSearchLocation = (e) => {
    this.setState({ queryB: e.target.value });
  };
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Form inline>
            <FormControl
              type="text"
              className="mr-sm-2"
              placeholder="Filter Position"
              onChange={this.filterSearchPosition}
              value={this.state.queryA}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Form inline>
            <FormControl
              type="text"
              className="mr-sm-2"
              placeholder="Filter Location"
              onChange={this.filterSearchLocation}
              value={this.state.queryB}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar>
        <Elements
          //   position={this.state.queryA}
          //   location={this.state.queryB}
          position="frontend"
          location="berlin"
        ></Elements>
      </>
    );
  }
}
