import user from '../models/User';
import jwt from 'jsonwebtoken';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not Found0' });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password not Found' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, 'token', {
        expires: '7d',
      }),
    });
  }
}
export default new SessionController();
