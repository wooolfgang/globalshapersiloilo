import transform from '../../hooks/transform';
import validate from '../../hooks/validate';
import Organization from '../../models/Organization';

function organizationService() {
  return function execute() {
    const app = this;

    app.service('api/organizations').hooks({
      before: {
        find: [],
        get: [],
        create: [transform(Organization), validate()],
        patch: [],
        remove: [],
        all: [],
      },
      after: {
        find: [transform(Organization)],
        get: [],
        create: [],
        patch: [],
        remove: [],
        all: [],
      },
    });
  };
}

export default organizationService;
