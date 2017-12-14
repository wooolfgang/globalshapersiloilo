import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';
import auth from 'feathers-authentication';
import transformToObjectId from '../../hooks/transformToObjectId';

function project(db) {
  return async function execute() {
    const app = this;

    app.use('api/projects', feathersMongo({
      Model: db.collection('projects'),
      paginate: {
        default: 6,
        max: 10,
      },
    }));

    // initialize collection index for text queries
    await db.collection('projects').createIndex({
      name: 'text',
      projectChallenge: 'text',
      volunteerReason: 'text',
      taskDescription: 'text',
    });

    const projectSchema = {
      include: {
        service: 'api/organizations',
        nameAs: 'organization',
        parentField: 'organizationId',
        childField: '_id',
      },
    };

    const authorization = [
      auth.hooks.authenticate('jwt'),
    ];

    app.service('api/projects').hooks({
      before: {
        find: [],
        get: [],
        create: [transformToObjectId({ propertyFields: ['organizationId'] })],
        update: [...authorization],
        patch: [...authorization],
        remove: [...authorization],
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
