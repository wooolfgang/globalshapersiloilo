import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';
import auth from '@feathersjs/authentication';
import restrictToOwner from '../../hooks/restrictToOwner';

function postService(db) {
  return function execute() {
    const app = this;

    app.use('api/posts', feathersMongo({ Model: db.collection('posts') }));

    const postSchema = {
      include: [
        {
          service: 'api/userfollowers',
          nameAs: 'followers',
          parentField: 'ownerId',
          childField: 'ownerId',
          query: {
            $select: ['followerIds'],
          },
        },
        {
          service: 'api/users',
          nameAs: 'owner',
          parentField: 'ownerId',
          childField: '_id',
          query: {
            $select: ['fullName', 'imgUrl'],
          },
        },
      ],
    };

    const hooks = {
      authentication: [auth.hooks.authenticate('jwt')],
      authorization: [restrictToOwner({ userIdField: '_id', ownerField: 'ownerId' })],
    };

    app.service('api/posts').hooks({
      before: {
        find: [],
        get: [],
        create: [...hooks.authentication],
        update: [...hooks.authentication, ...hooks.authorization],
        patch: [...hooks.authentication, ...hooks.authorization],
        remove: [...hooks.authentication, ...hooks.authorization],
        all: [],
      },
      after: {
        find: [populate({ schema: postSchema })],
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

export default postService;
