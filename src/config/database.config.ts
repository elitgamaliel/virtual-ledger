import { Sequelize } from "sequelize";

const databaseName = "test";
const username = "flyingcat";
const password = "flyingcat";

const db = new Sequelize(databaseName, username, password, {
  dialect: "mysql",
  port: 3306,
  logging: false,
});

export default db;
