const customizeProviderData = () => async (hook) => {
  if (hook.type !== 'before') {
    throw new Error('Validate hook should be used as a before hook');
  }

  if (hook.data.facebook) {
    const { email, name, id } = hook.data.facebook.profile._json;
    hook.data.email = email;
    hook.data.fullName = name;
    hook.data.password = id;
    hook.data.username = email;
    hook.data.provider = 'facebook';
    return hook;
  } else if (hook.data.google) {
    const { emails, name, id, displayName } = hook.data.google.profile._json;
    hook.data.email = emails[0].value;
    hook.data.fullName = `${name.givenName} ${name.familyName}`;
    hook.data.password = id;
    hook.data.username = emails[0].value;
    hook.data.provider = 'google';
    return hook;
  }
};


export default customizeProviderData;
