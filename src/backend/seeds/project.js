import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const projects = [
    {
      organizationId: ObjectId('54D28449847D3079184E3455'),
      name: 'Love Life Project',
      projectChallenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteerReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteersNeeded: 20,
      volunteerHoursNeeded: 50,
      volunteers: [],
      imgUrl: 'https://images.unsplash.com/photo-1491186561459-68c36c4a54ae?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop&s=23f41c6abac49ef5c02ee744a7c28032',
    },
    {
      organizationId: ObjectId('54D28449847D3079184E3455'),
      name: 'Feed the streets',
      projectChallenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteerReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteersNeeded: 20,
      volunteerHoursNeeded: 50,
      volunteers: [],
      imgUrl: 'https://images.unsplash.com/photo-1491944799262-a5be522e2300?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop&s=aa6f6263486da4b88f3cd177b1438f35',
    },
    {
      organizationId: ObjectId('7C01FA057E20618AE4B71579'),
      name: 'Community Giving',
      projectChallenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      volunteerReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
      taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteersNeeded: 20,
      volunteerHoursNeeded: 50,
      volunteers: [],
      imgUrl: 'https://images.unsplash.com/photo-1453687341900-a59ae1416bf7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=200&fit=crop&s=6c5fba93be53f6c037ab4c6789a50756',
    },
  ];

  const service = app.service('api/projects');
  await service.remove(null);
  return Promise.all(projects.map(match => service.create(match)));
};

export default seed;
