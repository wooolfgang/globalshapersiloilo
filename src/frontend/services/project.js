import transform from '../../hooks/transform';
import Project from '../../models/Project';

function projectService() {
  return function execute() {
    const app = this;

    app.service('api/projects').hooks({
      before: {
        find: [],
        get: [],
        create: [],
        patch: [],
        remove: [],
        all: [],
      },
      after: {
        find: [transform(Project)],
        get: [transform(Project)],
        create: [],
        patch: [],
        remove: [],
        all: [],
      },
    });
  };
}

export default projectService;
