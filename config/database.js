const path = require("path");
const connectionStringPass = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const config = connectionStringPass(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        }
      },
      debug: false
    }
  };

  // local db
  // return {
  //   connection: {
  //     client: "sqlite",
  //     connection: {
  //       filename: path.join(
  //         __dirname,
  //         "..",
  //         env("DATABASE_FILENAME", ".tmp/data.db")
  //       ),
  //     },
  //     useNullAsDefault: true,
  //   },
  // };
};
