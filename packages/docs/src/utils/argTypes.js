export default (fields = {}) => {
  const argTypes = {};
  Object.keys(fields).forEach((fieldName) => {
    const data = fields[fieldName];
    argTypes[fieldName] = {
      description: data?.description,
      type: {
        name: data?.type,
        required: data?.required,
      },
      defaultValue: data?.defaultValue,
      table: {
        type: {
          summary: data?.type,
        },
        defaultValue: data?.defaultValue,
      },
      options: data?.options,
      control: {
        type: data?.control,
      },
      action: data?.action,
    };
  });
  return argTypes;
};
