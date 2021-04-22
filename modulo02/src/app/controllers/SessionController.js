import user from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

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
      //Informações adicionais para adicionar no token.
      token: jwt.sign({ id }, authConfig.secret, {
        expires: authConfig.expiresIn,
      }),
    });
  }
}
export default new SessionController();
