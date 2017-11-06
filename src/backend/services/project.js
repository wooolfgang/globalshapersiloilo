import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';

function project(db) {
  return async function execute() {
    const app = this;

    app.use('api/projects', feathersMongo({ Model: db.collection('projects') }));

    await db.collection('projects').createIndex({
      organizationName: 'text',
      projectName: 'text',
      sector: 'text',
      proposal: 'text',
    });

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
