import express, { Request, Response } from "express";
import { Ledger } from "../model/ledger";
import { TransactionType } from "../model/transaction-type";
import { User } from "../model/user";

class LedgerController {
  async create(req: Request, res: Response) {}
  async read(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const records = await Ledger.findAll({
        where: {},
        include: [
          {
            model: User,
            as: "user",
          },
          {
            model: TransactionType,
            as: "transaction_type",
          },
        ],
        limit,
        offset,
      });
      return res.json(records);
    } catch (e) {
      return res.json({
        msg: "Failed to read Ledgers",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/ledger",
      });
    }
  }
  async readByID(req: Request, res: Response) {}
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

export default new LedgerController();
