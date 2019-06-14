'use strict'

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'Bob', password_hash: '$2a$13$M/3Rr41ugFV.m/DiC5B/Teb.XKm3NAJgrCf51FXbZDhLFvf.Xo7PG'},
        {id: 2, username: 'Alice', password_hash: '$2a$13$dDLKi2bWdENtIzQDNqjHquocnj5eqYHmDJW3UQNpi6Sffb5H.hCMu'},
      ])
    })
}
