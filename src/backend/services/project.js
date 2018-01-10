import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';
import auth from '@feathersjs/authentication';
import transformToObjectId from '../../hooks/transformToObjectId';
import restrictToOwner from '../../hooks/restrictToOwner';

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
      include: [
        {
          service: 'api/organizations',
          nameAs: 'organization',
          parentField: 'organizationId',
          childField: '_id',
        },
        {
          service: 'api/projectvolunteers',
          nameAs: 'volunteers',
          parentField: '_id',
          childField: 'projectId',
          query: {
            $select: ['userId'],
          },
        },
        {
          service: 'api/users',
          nameAs: 'organizers',
          parentField: 'ownerId',
          childField: '_id',
          asArray: true,
          query: {
            $select: ['fullName'],
          },
        },
      ],
    };

    const hooks = {
      authentication: [auth.hooks.authenticate('jwt')],
      authorization: [restrictToOwner({ userIdField: '_id', ownerField: 'ownerId' })],
    };

    app.service('api/projects').hooks({
      before: {
        find: [],
        get: [],
        create: [transformToObjectId({ propertyFields: ['organizationId'] }), ...hooks.authentication],
        update: [...hooks.authentication, ...hooks.authorization],
        patch: [...hooks.authentication, ...hooks.authorization],
        remove: [...hooks.authentication, ...hooks.authorization],
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
