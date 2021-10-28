import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";

interface TransactionTypeAttributes {
  id: Number;
  description: String;
}

export class TransactionTypeInstance extends Model<TransactionTypeAttributes> {}

TransactionTypeInstance.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "transaction_type",
    timestamps: false,
  }
);
