import express, { Request, Response } from "express";
import { Ledger } from "../model/ledger";
import { User } from "../model/user";

class LedgerController {
  async create(req: Request, res: Response) {}
  async readByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const records = await Ledger.findAll({
        where: {
          user_id: id,
        },
        include: [
          {
            model: User,
            as: "user",
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
        route: "/ledger/:id",
      });
    }
  }
  async update(req: Request, res: Response) {}
  async delete(req: Request, res: Response) {}
}

export default new LedgerController();
