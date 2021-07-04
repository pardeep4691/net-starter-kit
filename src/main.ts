import express from 'express';
import applyBasicMiddleware from './middleman/basic.middleware';
class Main {
  private app = express();
  constructor() {
    this.startServer();
    applyBasicMiddleware(this.app);
    this.route();
  }
  startServer = () => {
    this.app.listen(process.env.PORT || 8000);
  };
  route = () => {
    this.app.get('/', (req, res) => {
      res.send('Hello World');
    });
  };
}

export default new Main();
