// projectVolunteer service specific hook where it updates the normalized data on user hook.
import { ObjectId } from 'mongodb';

const onVolunteer = () => (hook) => {
  if (hook.type !== 'after') {
    throw new Error('onVolunteer should be used as an after hook');
  }

  const { userId, projectId } = hook.result;

  if (hook.method === 'create') {
    return hook.app.service('api/users').update(userId, { $push: { projectIds: ObjectId(projectId) } }).then(() => hook);
  } else if (hook.method === 'remove') {
    return hook.app.service('api/users').update(userId, { $pull: { projectIds: ObjectId(projectId) } }).then(() => hook);
  }

  throw new Error('onVolunteer hook should only be used on create/remove methods');
};
export default onVolunteer;
