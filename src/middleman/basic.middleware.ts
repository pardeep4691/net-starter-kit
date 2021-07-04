import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
const applyBasicMiddleware = (app: express.Express): boolean => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(compression());
  app.use(helmet());
  return true;
};
console.log('test');
export default applyBasicMiddleware;
