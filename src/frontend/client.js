import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';
import services from './services';

const socket = io(location.origin);

const client = feathers();

client.configure(socketio(socket));
client.configure(auth({ storage: window.localStorage }));
client.configure(services());

window.client = client;

export default client;

