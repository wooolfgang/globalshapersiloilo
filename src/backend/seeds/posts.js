import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const posts = [
    {
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
      post: "Hi Everyone, I'm so excited to work with you!",
    },
    {
      ownerId: ObjectId('429BDC3BAFF43767141EF562'),
      post: 'Feeling great today, what are you guys up to?',
    },
  ];

  const service = app.service('api/posts');
  await service.remove(null);
  return Promise.all(posts.map(post => service.create(post)));
};

export default seed;
