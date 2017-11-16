import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const organizations = [
    {
      _id: ObjectId('54D28449847D3079184E3455'),
      name: 'The Street Society',
      description: 'Cool Organization',
      website: 'streetsociety.com',
      contactPerson: 'Benjamin Franklin',
      contactNumber: '09219394916',
      email: 'streetorg@gmail.com',
      address: 'Jaro Iloilo City',
    },
    {
      _id: ObjectId('7C01FA057E20618AE4B71579'),
      name: 'Love Wins',
      description: 'An org focused on love',
      website: 'lovewins.com',
      contactPerson: 'Some random guy',
      contactNumber: '09219394916',
      email: 'streetorg@gmail.com',
      address: 'Jaro Iloilo City',
    },
  ];

  const service = app.service('api/organizations');
  await service.remove(null);
  return Promise.all(organizations.map(match => service.create(match)));
};

export default seed;
