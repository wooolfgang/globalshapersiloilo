const transform = Model => (hook) => {
  const key = hook.type === 'before' ? 'data' : 'result';
  const newHook = { ...hook };

  if (newHook[key].total) { // if service uses paginate
    newHook[key].data = newHook[key].data.map(data => new Model(data));
  } else if (newHook[key] instanceof Array) {
    const transformData = newHook[key].map(data => new Model(data));
    newHook[key] = transformData;
  } else {
    newHook[key] = new Model(newHook[key]);
  }

  return newHook;
};

export default transform;

