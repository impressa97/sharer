const username = process.env.NAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;
const port = process.env.PORT;

const config = {
  dev: {
    db: {
      username,
      password,
      database,
      host,
    },
    PORT: port,
  },
  test: {},
  prod: {},
};

module.exports = config[node_env];
