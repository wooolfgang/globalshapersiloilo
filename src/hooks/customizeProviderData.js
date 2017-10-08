const customizeProviderData = () => async (hook) => {
  if (hook.type === 'before') {
    if (hook.data.facebook) {
      console.log(hook);
      const { email, name, id } = hook.data.facebook.profile._json;
      hook.data.email = email;
      hook.data.fullName = name;
      hook.data.password = id;
      hook.data.username = name;
      hook.data.provider = 'facebook';
      Reflect.deleteProperty(hook.data, 'facebook');
      Reflect.deleteProperty(hook.data, 'facebookId');
      return hook;
    } else if (hook.data.google) {
      const { emails, name, id, displayName } = hook.data.google.profile._json;
      hook.data.email = emails[0].value;
      hook.data.fullName = `${name.givenName} ${name.familyName}`;
      hook.data.password = id;
      hook.data.username = displayName;
      hook.data.provider = 'google';
      Reflect.deleteProperty(hook.data, 'google');
      Reflect.deleteProperty(hook.data, 'googleId');
      return hook;
    }
    throw new Error('Not Valid Provider');

  }
  throw new Error('Validate hook should be used as a before hook');
};


export default customizeProviderData;
