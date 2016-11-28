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
          <InputField type="text" name="field1" />
          <InputField type="text" name="field2" />
          <button type="button">Submit</button>
        </ReduxForm>
      </div>
    );
  }
}
