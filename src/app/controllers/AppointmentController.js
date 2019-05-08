const { User, Appointment } = require('../models')
const { Op } = require('sequelize')

const moment = require('moment')

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

  show (req, res) {
    return res.render('appointments/show')
  }

  async all (req, res) {
    const date = moment(parseInt(req.query.date))
    const appointmentsDB = await Appointment.findAll({
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            date.startOf('day').format(),
            date.endOf('day').format()
          ]
        }
      },
      include: [
        {
          model: User,
          required: true
        }
      ]
    })

    const appointments = appointmentsDB.map(item => {
      return {
        date: moment(parseInt(item.dataValues.date.getTime())).format(
          `D/M/YYYY [ás] H:MM[h]`
        ),
        client: {
          name: item.User.dataValues.name,
          avatar: item.User.dataValues.avatar,
          email: item.User.dataValues.email
        }
      }
    })

    return res.render('appointments/all', { appointments })
  }
}

module.exports = new AppointmentController()
