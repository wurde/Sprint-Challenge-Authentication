BEGIN TRANSACTION;

CREATE TABLE `users` (
  `id` integer not null primary key autoincrement,
  `username` text not null,
  `password_hash` text not null,
  `created_at` datetime not null default CURRENT_TIMESTAMP,
  `updated_at` datetime not null default CURRENT_TIMESTAMP
);

COMMIT TRANSACTION;
