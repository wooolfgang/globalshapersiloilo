import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';

function project(db) {
  return function execute() {
    const app = this;

    app.use('api/projects', feathersMongo({ Model: db.collection('projects') }));

    const projectSchema = {
      include: {
        service: 'api/users',
        nameAs: 'contactPerson',
        parentField: 'contactPersonId',
        childField: '_id',
        query: {
          $select: ['username', 'fullName'],
        },
      },
    };

    app.service('api/projects').hooks({
      before: {
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
      },
      after: {
        find: [populate({ schema: projectSchema })],
        get: [populate({ schema: projectSchema })],
        create: [],
        update: [],
        patch: [],
        remove: [],
      },
    });
  };
}

export default project;
