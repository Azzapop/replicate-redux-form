import React, { Component } from 'react';
import styles from './app.css';

import ReduxForm from './redux-form';
import InputField from './input-field';
export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <ReduxForm formName="testForm">
          <InputField value={value1} name={name1} onChange={(x, y) => dispatch(onChange(x, y))} />
          <InputField value={value2} name={name2} onChange={(x, y) => dispatch(onChange(x, y))} />
          <button onClick={() => dispatch(doThis(names))}>Submit</button>
        </ReduxForm>
      </div>
    );
  }
}
