const restrictUser = () => (hook) => {
  if (hook.type === 'before') {
    if ((hook.id).toString() === (hook.params.user._id).toString() || hook.params.user.role === 'admin') {
      return hook;
    }
    throw new Error('User is restricted to do following action');
  }
  throw new Error('Validate hook should be used as a before hook');
};

export default restrictUser;
