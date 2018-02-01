import * as express from 'express';
import * as session from 'express-session';
import {renderVM} from './vm';

export function start(port = process.env.PORT || 3000) {
  const app = express();

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  }));

  app.use('/', (req, res) => {
    if (!req.session.visitCount) {
      req.session.visitCount = 0;
    }

    req.session.visitCount++;

    res.send(renderVM('./src/index.vm', {
      visitCount: req.session.visitCount
    }));
  });

  return app.listen(port, () => {
    console.info(`Fake server is running on port ${port}`);
  });
}
