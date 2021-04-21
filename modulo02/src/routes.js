import { Router } from 'express';
import user from './app/models/user';
const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gabrielle Silva',
    email: 'biela09@gmail.com',
    password_hash: '12345678',
  });

  return res.json(user);
});

export default routes;
