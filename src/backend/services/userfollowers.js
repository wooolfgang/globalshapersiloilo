import feathersMongo from 'feathers-mongodb';

function userfollowerService(db) {
  return function execute() {
    const app = this;

    app.use('api/userfollowers', feathersMongo({ Model: db.collection('userfollowers') }));

    app.service('api/userfollowers').hooks({
      before: {
        find: [],
        get: [],
        create: [],
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

export default userfollowerService;
