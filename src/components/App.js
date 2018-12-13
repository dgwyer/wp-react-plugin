import React from "react";
import { DebounceInput } from "react-debounce-input";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6,
      postTypes: {},
      postResults: {},
      pages: {},
      results: "",
      blogname: "",
      initialRender: false
    };
    this.handleBlognameChange = this.handleBlognameChange.bind(this);
  }

  handleBlognameChange(event) {
    this.setState({
      blogname: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>WP React Plugin</h1>
        <div>
          <p className="plugin-description">
            The values entered in the input fields is stored in React state and
            automatically updates the label (which is bound to state too).
          </p>
          <div className="input-container">
            <label htmlFor="normal-input">
              <span>Normal Input</span>
              <input
                className="n-input"
                id="normal-input"
                value={this.state.blogname}
                onChange={this.handleBlognameChange}
              />
            </label>

            <label htmlFor="debounced-input">
              <span>Debounced Input</span>
              <DebounceInput
                className="d-input"
                id="debounced-input"
                value={this.state.blogname}
                minLength={0}
                debounceTimeout={300}
                onChange={this.handleBlognameChange}
              />
            </label>
          </div>
          <div style={{ marginTop: 20 }}>
            You entered: {this.state.blogname}
            <span id="wp-spinner" class="spinner" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
