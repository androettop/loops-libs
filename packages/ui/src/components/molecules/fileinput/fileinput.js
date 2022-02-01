import React, { createRef } from "react";
import PropTypes from "prop-types";
import TextInput from "../../atoms/textinput/textinput";
import { StyledFileInput } from "./fileinput.styles";

const FileInput = ({
  onChange,
  label,
  placeholder = "Examinar",
  value,
  disabled,
  error,
  touched,
  required,
  ...props
}) => {
  const inputRef = createRef();

  const fileChange = (e) => {
    const file = e?.target?.files?.[0];
    if (file) {
      if (onChange) {
        onChange({
          name: file.name,
          type: file.type,
          url: URL.createObjectURL(file),
          file,
          ext: file.name.split(".").pop().toLowerCase(),
        });
      }
    } else {
      onChange();
    }
  };
  return (
    <StyledFileInput>
      <TextInput
        label={label}
        value={value?.name || ""}
        placeholder={placeholder}
        readOnly
        error={error}
        required={required}
        touched={touched}
        disabled={disabled}
        onClick={() => inputRef?.current?.click()}
        icon="folder"
      />
      <input
        {...props}
        disabled={disabled}
        ref={inputRef}
        type="file"
        onChange={fileChange}
      />
    </StyledFileInput>
  );
};

FileInput.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
  required: PropTypes.bool,
};

FileInput.defaultProps = {
  onChange: undefined,
  label: "",
  placeholder: "",
  value: undefined,
  disabled: false,
  error: "",
  touched: false,
  required: false,
};

export default FileInput;
