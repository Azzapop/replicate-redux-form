import React, { Component } from 'react';
import InputField from './input-field';
import { updateField, checkErrors } from '../actions'
import { connect } from 'react-redux';

import _ from 'lodash';

export class ReduxForm extends Component {

  constructor(props) {
    super(props);
    const { formName } = this.props;
    const form = this.props.forms[formName];
    this.state = {
      form: (form === undefined ? {} : form),
      fieldChange: updateField(formName),
      buttonClick: checkErrors(formName),
    }
    this.fieldNames = [];
  }

  cloneChild(child) {
    const { form, fieldChange, buttonClick } = this.state;
    const { type, name } = child.props;
    let fieldNames = this.fieldNames;
    switch (type.toLowerCase()) {
      case 'text':
        if (fieldNames.indexOf(name) === -1) fieldNames.push(name);
        const field = form[name];
        const value = (field ? field.value : "");
        const error = (field ? field.error : "");
        const onChange = (x, y) => dispatch(fieldChange(x, y));
        return React.cloneElement(child, { field, value, error, onChange, key: Math.random().toString(36) });
      case 'button':
        const onClick = () => dispatch(buttonClick(fieldNames));
        return React.cloneElement(child, { onClick, key: Math.random().toString(36) });
      default:
        return child;

    }
  }

  render() {
    const { dispatch, children } = this.props;
    const { onChange, onClick } = this.state;
    console.log(children);
    let newChildren = _.map(children, function(child) {
      if (child.props.type.toLowerCase() === 'text') {
        return this.cloneChild(child);
      } else {
        return child;
      }
    }, this);
    newChildren = _.map(children, function(child) {
      if (child.props.type.toLowerCase() === 'button') {
        return this.cloneChild(child);
      } else {
        return child;
      }
    }, this);

    return (
      <div>
        { newChildren }
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
