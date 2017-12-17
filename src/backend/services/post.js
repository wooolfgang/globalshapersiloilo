import feathersMongo from 'feathers-mongodb';
import hook from 'feathers-authentication-hooks';
import { populate } from 'feathers-hooks-common';
import auth from 'feathers-authentication';
import restrictUser from '../../hooks/restrictUser';

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

    const security = [
      hook.restrictToAuthenticated(),
      restrictUser(),
    ];

    const authorization = [
      auth.hooks.authenticate('jwt'),
    ];

    app.service('api/posts').hooks({
      before: {
        find: [],
        get: [],
        create: [],
        update: [...security],
        patch: [...security],
        remove: [...security],
        all: [...authorization],
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
