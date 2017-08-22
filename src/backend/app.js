import feathers from 'feathers';
import path from 'path';
import bodyParser from 'body-parser';
import rest from 'feathers-rest';
import hooks from 'feathers-hooks';
import { MongoClient } from 'mongodb';
import services from './services';
import socketio from 'feathers-socketio';
import config from 'feathers-configuration';

const app = feathers();

app.configure(config(path.join(process.cwd())));

app.use(feathers.static(path.join(process.cwd(), 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.configure(rest());
app.configure(hooks());
app.configure(socketio({ wsEngine: 'uws' }));

const setupApp = async () => {
  // const db = await MongoClient.connect(app.get('mongoURI'));
  // console.log('Connected to db');

  // app.configure(services(db));

  return app;
};

export default setupApp;

