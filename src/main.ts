import express from 'express';
import applyBasicMiddleware from './middleman/basic.middleware';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
class Main {
  private app = express();
  constructor() {
    this.startServer();
    applyBasicMiddleware(this.app);
    this.route();
  }
  startServer = () => {
    console.log('SERVER START ON', process.env.PORT || 8000);
    this.app.listen(process.env.PORT || 8000);
  };
  route = () => {
    this.app.get('/', (req, res) => {
      res.send('Hello World');
    });
  };
}






export default new Main();
