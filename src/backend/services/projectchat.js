import feathersMongo from 'feathers-mongodb';
import { fastJoin, deleteByDot, setNow } from 'feathers-hooks-common';
import auth from '@feathersjs/authentication';
import transformToObjectId from '../../hooks/transformToObjectId';
import restrictToOwner from '../../hooks/restrictToOwner';

function projectChatService(db) {
  return function plugin() {
    const app = this;
    app.use('api/projectchat', feathersMongo({ Model: db.collection('projectchat') }));

    const chatResolvers = {
      joins: {
        sentBy: $select => async (projectChat) => {
          projectChat.sentBy = (await app.service('api/users').get(projectChat.sentById, { query: { $select } }));
        },
      },
    };

    const deleteExcessProps = () => (hook) => {
      deleteByDot(hook.data, 'sentBy.projects');
      deleteByDot(hook.data, 'sentBy.projectIds');
    };

    const hooks = {
      authentication: [auth.hooks.authenticate('jwt')],
      authorization: [restrictToOwner({ userIdField: '_id', ownerField: 'sentById' })],
    };

    app.service('api/projectchat').hooks({
      before: {
        find: [],
        get: [],
        create: [
          setNow('createdAt'),
          transformToObjectId({ propertyFields: ['sentById'] }),
          fastJoin(chatResolvers, { sentBy: [['fullName', 'imgUrl']] }),
          deleteExcessProps(),
        ],
        update: [...hooks.authentication, ...hooks.authorization],
        patch: [...hooks.authentication, ...hooks.authorization],
        remove: [...hooks.authentication, ...hooks.authorization],
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

export default projectChatService;
