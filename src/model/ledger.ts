import { DataTypes, Model } from "sequelize";
import db from "../config/database.config";
import { TransactionType } from "./transaction-type";
import { User } from "./user";

interface LedgerAttributes {
  id: Number;
  user_id: Number;
  transaction_type_id: Number;
  amount: Number;
  description: String;
  created_on: Date;
  added_on: Date;
}

export class Ledger extends Model<LedgerAttributes> {}

Ledger.init(
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
    transaction_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(13, 2),
      defaultValue: "0.00",
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(128),
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
    underscored: true,
  }
);

User.hasMany(Ledger, { as: "ledger" });
Ledger.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

TransactionType.hasMany(Ledger, { as: "ledger" });
Ledger.belongsTo(TransactionType, {
  foreignKey: "transaction_type_id",
  as: "transaction_type",
});
