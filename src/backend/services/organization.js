import feathersMongo from 'feathers-mongodb';
import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import Organization from '../../models/Organization';

function organizationService(db) {
  return function execute() {
    const app = this;

    app.use('api/organizations', feathersMongo({ Model: db.collection('organizations') }));

    app.service('api/organizations').hooks({
      before: {
        find: [],
        get: [],
        create: [transform(Organization), validate()],
        update: [],
        patch: [],
        remove: [],
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
