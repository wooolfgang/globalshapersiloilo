const restrictUser = () => (hook) => {
  if (!hook.params.provider) {
    return hook;
  }

  if (hook.type === 'before') {
    if ((hook.id).toString() === (hook.params.user._id).toString() || hook.params.user.role === 'admin') {
      return hook;
    }
    throw new Error('User is restricted to do the following action');
  }
  throw new Error('Restrict User hook should be used as a before hook');
};

export default restrictUser;
