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
      email: 'xxxLixxx@gmail.com',
      birthDay: 'May 12, 1997',
      address: 'somewhere',
      phoneNumber: '3510267',
      occupation: 'N/A',
      affiliation: 'N/A',
      imgUrl: 'http://res.cloudinary.com/depjh17m6/image/upload/v1513424033/profile_img_x0qa8u.png',
      projectIds: [ObjectId('54D28449847D3079184E3454')],
    },
    {
      _id: ObjectId('D2133E4769E046781F282A09'),
      username: 'dummy123',
      password: 'password',
      fullName: 'Robert De Niro',
      email: 'xxxRobertxxx@gmail.com',
      birthDay: 'May 12, 1997',
      address: 'somewhere',
      phoneNumber: '3510267',
      occupation: 'N/A',
      affiliation: 'N/A',
      imgUrl: 'http://res.cloudinary.com/depjh17m6/image/upload/v1513431017/Screen-Shot-2014-12-02-at-11.14.42_z5dtfi.png',
      projectIds: [],
    },
    {
      _id: ObjectId('B25752FC70EDC7EE6D81FF0F'),
      username: 'jeanna',
      password: 'password',
      fullName: 'Wesley Snipers',
      email: 'xxxWesleyxxx@gmail.com',
      birthDay: 'May 12, 1997',
      address: 'somewhere',
      phoneNumber: '3510267',
      occupation: 'N/A',
      affiliation: 'N/A',
      imgUrl: 'http://res.cloudinary.com/depjh17m6/image/upload/v1513431014/20150406145944-dos-donts-taking-perfect-linkedin-profile-picture-selfie-mobile-camera-2_ffhjni.jpg',
      projectIds: [],
    },
  ];

  const service = app.service('api/users');
  await service.remove(null);
  return Promise.all(users.map(user => service.create(user)));
};

export default seed;
