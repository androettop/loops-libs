import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

const FormComponent = ({ children, onSubmit = () => {}, handleSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
);

const mapStateToProps = (_, { form, enableReinitialize, initialValues }) => ({
  form: form || "formSemanticLibs",
  enableReinitialize: enableReinitialize || false,
  initialValues,
});

const Form = connect(mapStateToProps)(reduxForm({})(FormComponent));

FormComponent.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  handleSubmit: PropTypes.func,
};

FormComponent.defaultProps = {
  children: null,
  onSubmit: () => {},
  handleSubmit: () => {},
};

export default Form;
