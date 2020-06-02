import { Router } from 'express';

const app = Router()

app.get('/', (request, response) => {
  return response.json({ msg: 'Deu certo!' });
})

export default app;