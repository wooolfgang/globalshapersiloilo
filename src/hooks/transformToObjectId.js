import { ObjectId } from 'mongodb';

const transformToObjectId = (options = { propertyFields: ['_id'] }) => (hook) => {
  const { propertyFields } = options;

  if (hook.type !== 'before') {
    throw new Error('transformToObjectId should be used as a before hook');
  }

  if (!(propertyFields instanceof Array)) {
    throw new Error('propertyFields should be an array');
  }

  propertyFields.forEach((prop) => {
    hook.data[prop] = ObjectId(hook.data[prop]);
  });
};

export default transformToObjectId;
