const validateHook = () => (hook) => {
  if (hook.type === 'before') {
    if (hook.data.isValid()) {
      return hook;
    }
    throw hook.data.validate().error;
  }
  throw new Error('Validate hook should be used as a before hook');
};


export default validateHook;
