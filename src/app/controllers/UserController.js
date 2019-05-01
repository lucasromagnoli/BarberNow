const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    req.body.avatar = 'teste.teste.teste.jpg'
    await User.create(req.body)

    return res.redirect('/signup')
  }
}

module.exports = new UserController()
