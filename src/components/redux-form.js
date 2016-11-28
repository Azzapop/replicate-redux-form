import React, { Component } from 'react';
import InputField from './input-field';
import { updateField, checkErrors } from '../actions'
import { connect } from 'react-redux';

import _ from 'lodash';

export class ReduxForm extends Component {

  constructor(props) {
    super(props);
    const { formName } = this.props;
    this.state = {
      form: this.props.forms[formName],
      onChange: updateField(formName),
      onClick: checkErrors(formName)
    }
  }

  render() {
    const { dispatch } = this.props;
    const { onChange, onClick } = this.state;
    let form =  this.state.form;
    if (form === undefined) form = {};
    return (
      <div>
      { _.map(this.props.children, function(child) {
          const field = form[child.props.name];
          const value = (field ? field.value : "");
          const error = (field ? field.error : "");
          const onChange = (x, y) => dispatch(onChange(x, y));
          return React.cloneElement(child, {field, value, onChange});
        })
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    forms: state.formReducer,
  });
}

export default connect(mapStateToProps)(ReduxForm);
