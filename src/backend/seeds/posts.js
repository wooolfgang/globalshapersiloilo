import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const posts = [
    {
      createdAt: '2018-01-22T04:47:00.567Z',
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ,
    },
    {
      createdAt: '2018-01-22T04:47:00.567Z',
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
      post: 'Feeling great today, what are you guys up to? Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
    },
  ];

  const service = app.service('api/posts');
  await service.remove(null);
  return Promise.all(posts.map(post => service.create(post)));
};

export default seed;
