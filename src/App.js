import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "material-ui/AppBar";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import getMuiTheme from "material-ui/styles/getMuiTheme";
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.opendraw = this.opendraw.bind(this);
  }

  opendraw(event) {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.opendraw}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
