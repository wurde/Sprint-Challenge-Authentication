'use strict'

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './server/db/development.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },
}
