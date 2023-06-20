// const parse = require("pg-connection-string").parse;
// const config = parse(process.env.DATABASE_URL);
const { parse } = require("pg-connection-string");
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//     debug: false,
//   },
// });


module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
