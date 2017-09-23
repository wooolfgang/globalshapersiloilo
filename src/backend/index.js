import setupApp from './app';

const startServer = async () => {
  const app = await setupApp();
  app.listen(process.ENV.port || app.get('port'), () => {
    console.log('App live at 3000');
  });
};

startServer();
