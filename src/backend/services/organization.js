import feathersMongo from 'feathers-mongodb';
import auth from 'feathers-authentication';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import Organization from '../../models/Organization';
import restrictUser from '../../hooks/restrictUser';

function organizationService(db) {
  return function execute() {
    const app = this;

    app.use('api/organizations', feathersMongo({ Model: db.collection('organizations') }));

    const security = [
      restrictUser(),
    ];

    const authorization = [
      auth.hooks.authenticate('jwt'),
    ];

    app.service('api/organizations').hooks({
      before: {
        find: [],
        get: [],
        create: [transform(Organization), validate(), ...authorization],
        update: [...security, ...authorization],
        patch: [...security, ...authorization],
        remove: [...security, ...authorization],
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
