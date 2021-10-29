import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface UserAttributes {
  id: Number;
  username: String;
  first_name: String;
  last_name: String;
  email: String;
  password: String;
}

export class User extends Model<UserAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "user",
    timestamps: false,
    underscored: true,
  }
);
