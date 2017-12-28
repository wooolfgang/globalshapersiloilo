import feathersMongo from 'feathers-mongodb';
import auth from '@feathersjs/authentication';
import restrictToOwner from '../../hooks/restrictToOwner';
import transformToObjectId from '../../hooks/transformToObjectId';

function projectVolunteer(db) {
  return function execute() {
    const app = this;

    app.use('api/projectvolunteers', feathersMongo({ Model: db.collection('projectvolunteers') }));

    const hooks = {
      authentication: [auth.hooks.authenticate('jwt')],
      authorization: [restrictToOwner({ userIdField: '_id', ownerField: 'userId' })],
    };

    app.service('api/projectvolunteers').hooks({
      before: {
        find: [],
        get: [],
        create: [transformToObjectId({ propertyFields: ['userId', 'projectId'] }), ...hooks.authentication],
        update: [...hooks.authentication, ...hooks.authorization],
        patch: [...hooks.authentication, ...hooks.authorization],
        remove: [...hooks.authentication, ...hooks.authorization],
      },
      after: {
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
        all: [],
      },
    });
  };
}

export default projectVolunteer;
