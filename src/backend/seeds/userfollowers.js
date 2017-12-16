import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const userFollowers = [
    {
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
      followerIds: [
        ObjectId('D2133E4769E046781F282A09'),
      ],
    },
  ];

  const service = app.service('api/userfollowers');
  await service.remove(null);
  return Promise.all(userFollowers.map(userFollower => service.create(userFollower)));
};

export default seed;
