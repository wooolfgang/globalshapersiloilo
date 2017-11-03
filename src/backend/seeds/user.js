import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const users = [
    {
      _id: ObjectId('429BDC3BAFF43767141EF562'),
      username: 'wooolfgang',
      password: 'password',
      fullName: 'Li Arolf Rey',
    },
    {
      _id: ObjectId('D2133E4769E046781F282A09'),
      username: 'dummy',
      password: 'password',
      fullName: 'Robert De Niro',
    },
    {
      _id: ObjectId('B25752FC70EDC7EE6D81FF0F'),
      username: 'jeanna',
      password: 'password',
      fullName: 'Wesley Snipers',
    },
  ];

  const service = app.service('api/users');
  await service.remove(null);
  return Promise.all(users.map(user => service.create(user)));
};

export default seed;
