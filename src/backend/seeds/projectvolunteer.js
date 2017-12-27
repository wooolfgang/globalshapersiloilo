import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const projectVolunteers = [
    {
      userId: ObjectId('429BDC3BAFF43767141EF562'),
      projectId: ObjectId('54D28449847D3079184E3454'),
    },
  ];

  const service = app.service('api/projectvolunteers');
  await service.remove(null);
  return Promise.all(projectVolunteers.map(projectVolunteer => service.create(projectVolunteer)));
};

export default seed;
