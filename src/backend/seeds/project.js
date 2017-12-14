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
      imgUrl: 'https://images.unsplash.com/photo-1512300336117-ff710065ae51?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ce966b76fb7d94345dc6d27d8839881e',
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
      imgUrl: 'https://images.unsplash.com/photo-1510741149781-bb76bb644d5f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=040a394f95c0930f6d4de66bd1e051d6',
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
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
      imgUrl: 'https://images.unsplash.com/photo-1512764681944-6d20bb8d197e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=5d94852facd90768b1f214cb48c1c710',
      ownerId: ObjectId('D2133E4769E046781F282A09'),
    },
    {
      organizationId: ObjectId('54D28449847D3079184E3455'),
      name: 'Love Life Project',
      projectChallenge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteerReason: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      volunteersNeeded: 20,
      volunteerHoursNeeded: 50,
      volunteers: [],
      imgUrl: 'https://images.unsplash.com/photo-1513025936308-61df238b83f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=845fc99dd7d44068770a7e817fdcfd9f',
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
      imgUrl: 'https://images.unsplash.com/photo-1511776026786-010b6f4c4bde?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e16fd9903b5a4753c484b7dcecd0f6e5',
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
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
      imgUrl: 'https://images.unsplash.com/photo-1510698112132-2c547563a3c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=eebd8105ef9870090507fd837380ca7b',
      ownerId: ObjectId('D2133E4769E046781F282A09'),
    },
  ];

  const service = app.service('api/projects');
  await service.remove(null);
  return Promise.all(projects.map(match => service.create(match)));
};

export default seed;
