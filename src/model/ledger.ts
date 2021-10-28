import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface LedgerAttributes {
  id: Number;
  user_id: Number;
  trans_type_id: Number;
  amount: Number;
  description: String;
  created_on: Date;
  added_on: Date;
}

export class LedgerInstance extends Model<LedgerAttributes> {}

LedgerInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trans_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "ledger",
    timestamps: false,
  }
);
