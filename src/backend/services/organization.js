import feathersMongo from 'feathers-mongodb';
import auth from '@feathersjs/authentication';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import Organization from '../../models/Organization';

function organizationService(db) {
  return function execute() {
    const app = this;

    app.use('api/organizations', feathersMongo({ Model: db.collection('organizations') }));

    const hooks = {
      authentication: [auth.hooks.authenticate('jwt')],
    };

    app.service('api/organizations').hooks({
      before: {
        find: [],
        get: [],
        create: [transform(Organization), validate(), ...hooks.authentication],
        update: [...hooks.authentication],
        patch: [...hooks.authentication],
        remove: [...hooks.authentication],
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

export default organizationService;
