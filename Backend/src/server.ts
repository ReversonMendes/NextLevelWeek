/* eslint-disable no-console */
import 'dotenv/config';
import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  return response.json({ message: "Hello, world!" });
})

app.listen(app.get('port'), () => {
  console.log(`🚀 Back-end runing... PORT: ${app.get('port')}`);
  console.log(`➡️ http://localhost:${app.get('port')}`);
});