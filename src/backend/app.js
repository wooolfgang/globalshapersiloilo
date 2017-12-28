import feathers from '@feathersjs/feathers';
import express from '@feathersjs/express';
import path from 'path';
import rest from '@feathersjs/express/rest';
import socketio from '@feathersjs/socketio';
import config from '@feathersjs/configuration';
import { MongoClient } from 'mongodb';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';
import channels from './channel';
import services from './services';

const app = express(feathers());

if (!process.env.NODE_ENV) {
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}

if (process.env.NODE_ENV) {
  app.get('*.js', (req, res, next) => {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });
}

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.configure(rest());
app.configure(socketio({ wsEngine: 'uws' }));
app.configure(config(path.join(process.cwd())));

const setupApp = async () => {
  const db = await MongoClient.connect(app.get('mongoURI'));
  console.log('Connected to db');
  app.configure(services(db));
  app.configure(channels);

  return app;
};

export default setupApp;

