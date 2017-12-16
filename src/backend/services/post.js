import feathersMongo from 'feathers-mongodb';
import { populate } from 'feathers-hooks-common';
import auth from 'feathers-authentication';

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

    app.service('api/posts').hooks({
      before: {
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
        all: [auth.hooks.authenticate('jwt')],
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
