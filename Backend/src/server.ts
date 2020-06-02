/* eslint-disable no-console */
import 'dotenv/config';
import path from 'path';
import express from 'express';
import routes from './routes'

const app = express();
const pathStaticFiles = express.static(path.resolve(__dirname, '..', 'uploads'));

app
  .set('port', process.env.PORT || 3000)
  .use(express.json())
  .use(routes)
  .use('/uploads', pathStaticFiles)

app.listen(app.get('port'), () => {
  console.log(`🚀 Backend runing... PORT: ${app.get('port')}`);
  console.log(`➡️ http://localhost:${app.get('port')}`);
});
