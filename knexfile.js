module.exports = {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'grace_ministry_dev'
    },
    pool: { min: 0, max: 10 },
    migrations: {
      tableName: 'migrations'
    }
  };