/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';
import routes from './routes'

const app = express();

app
  .set('port', process.env.PORT || 3000)
  .use(express.json())
  .use(routes)

app.listen(app.get('port'), () => {
  console.log(`🚀 Backend runing... PORT: ${app.get('port')}`);
  console.log(`➡️ http://localhost:${app.get('port')}`);
});
