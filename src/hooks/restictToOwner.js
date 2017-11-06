const restrictToOwner = (options = { userIdField: '_id', ownerField: '' }) => (hook) => {
  const { userIdField, ownerField } = options;

  if (hook.type !== 'before') {
    throw new Error('The restrictToOwner hook should be used as a before hook');
  }

  if (!hook.params.provider) {
    return hook;
  }

  if (!hook.params.user) {
    throw new Error('No user entity');
  }

  if (!hook.id || hook.method === 'find') {
    throw new Error('Multiple changes not supported yet');
    // add filter hook here
  }

  return hook.service.get(hook.id).then((data) => {
    if (data[ownerField].toString() === hook.params.user[userIdField].toString()) {
      return hook;
    }
    throw new Error('Not authorized');
  });
};

export default restrictToOwner;
