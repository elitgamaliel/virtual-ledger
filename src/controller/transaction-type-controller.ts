import express, { Request, Response } from "express";
import { TransactionType } from "../model/transaction-type";

class TransactionTypeController {
  async create(req: Request, res: Response) {
    try {
      const record = await TransactionType.create({ ...req.body });
      return res.json({
        record,
        msg: "Successfully created a Transaction Type",
      });
    } catch (e) {
      return res.json({
        msg: "Failed to create a new Transaction Type",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/trans-type",
      });
    }
  }
  async read(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const records = await TransactionType.findAll({
        where: {},
        limit,
        offset,
      });
      return res.json(records);
    } catch (e) {
      return res.json({
        msg: "Failed to read Transaction Types",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/trans-type",
      });
    }
  }
  async readByID(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await TransactionType.findOne({ where: { id } });
      return res.json(record);
    } catch (e) {
      return res.json({
        msg: "Failed to read the Transaction Type",
        status: 500,
        jsMSg: (e as Error).message,
        route: "/trans-type/:id",
      });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await TransactionType.findOne({ where: { id } });

      if (!record) {
        return res.json({ msg: "Can't find existing Transaction Type." });
      }

      const updatedRecord = await record.update({ ...req.body });
      return res.json(updatedRecord);
    } catch (e) {
      return res.json({
        msg: "Failed to update the Transaction Type",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/trans-type/:id",
      });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await TransactionType.findOne({ where: { id } });

      if (!record) {
        return res.json({ msg: "Can't find existing Transaction Type." });
      }

      const deletedRecord = await record.destroy();
      return res.json(deletedRecord);
    } catch (e) {
      return res.json({
        msg: "Failed to delete the Transaction Type",
        status: 500,
        jsMsg: (e as Error).message,
        route: "/trans-type/:id",
      });
    }
  }
}

export default new TransactionTypeController();
