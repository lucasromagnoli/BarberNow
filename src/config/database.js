module.exports = {
  dialect: 'postgress',
  host: '127.0.0,1',
  username: 'docker',
  password: 'docker',
  database: 'gobarberdb',
  operatorAliases: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
