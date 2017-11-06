const validateHook = () => (hook) => {
  if (hook.type !== 'before') {
    throw new Error('Validate hook should be used as a before hook');
  }

  if (hook.params.oauth) {
    return hook;
  }

  if (hook.data.isValid()) {
    return hook;
  }

  throw hook.data.validate().error;
};


export default validateHook;
