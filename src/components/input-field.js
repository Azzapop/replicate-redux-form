import React, { Component } from 'react';

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { name, value, onChange } = this.props;
    console.log(onChange);
    return (
      <div>
        <input value={value} onChange={(e) => onChange(name, e.target.value)} />
      </div>
    );
  }
}

InputField.defaultProps = { type: "text" };
