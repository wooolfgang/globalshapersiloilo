import setupApp from './app';

const startServer = async () => {
  const app = await setupApp();
  app.listen(app.get('port') || process.ENV.port, () => {
    console.log('App live at 3000');
  });
};

startServer();
