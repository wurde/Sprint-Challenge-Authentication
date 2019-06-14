'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.text('username').notNullable().unique()
    table.text('password_hash').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
