const { User, Appointment } = require('../models')

class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider)
    res.render('appointments/create', { provider })
  }

  async store (req, res) {
    const { id: user_id } = req.session.user
    const { provider: provider_id } = req.params
    const { date } = req.body

    console.log('req.body :', req.body)
    await Appointment.create({
      user_id,
      provider_id,
      date
    })

    return res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentController()
