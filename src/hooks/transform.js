const transform = Model => (hookDetails) => {
  const key = hookDetails.type === 'before' ? 'data' : 'result';

  if (hookDetails[key] instanceof Array) {
    const transformData = hookDetails[key].map(data => new Model(data));
    hookDetails[key] = transformData;
  } else {
    hookDetails[key] = new Model(hookDetails[key]);
  }
};

export default transform;

